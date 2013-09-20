package qut.endeavour.rest.storage;

import java.sql.Connection;

import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;



public class DatabaseAccess {
	
	private final static String DBMS_LOCATION = "jdbc:mysql://localhost:3306/";
	private final static String DATABASE_NAME = "endeavourdb";
	private final static String dbUsername = "root";
	private final static String dbPassword = "";
	
	
	
	/* ADMIN */
	private final static String TBL_ACTIVE_SESSION = "active_session";
	
	
	
	/* PERSONAL PLAN */
		// CLIENT DETAILS
	private final static String TBL_PERSONAL_DETAILS = "client_personal_details";
	private final static String TBL_ALERT_INFO = "client_alerts";
	private final static String TBL_FORMAL_ORDERS = "client_formal_orders";
	private final static String TBL_LIVING_ARRANGEMENTS = "client_living_arrangements";
	private final static String TBL_CONTACTS = "client_contacts";
	private final static String TBL_CONTACT_TYPE = "client_contact_type";
	
	
		// HEALTH
	private final static String TBL_DIETARY = "health_dietary";
	private final static String TBL_DISABILITY = "health_disability";
	private final static String TBL_MANAGEMENT = "health_management";
	
	
		// COMMUNICATION
	
	
		// EDUCATION AND EMPLOYMENT
	
	
		// PLANNING
	
	
		// SUPPORT
	
	
	
	
	private static Connection  con = null;
	
	private static Map<String,RoleRecord> roleByName = null;
	
	
	
	
	private static boolean makeConnection() {
		try {
			if ( con == null ) {
				Class.forName("com.mysql.jdbc.Driver");
				System.out.println("DatabaseAccess: Making a new connection to the database.");
				con = DriverManager.getConnection(DBMS_LOCATION+DATABASE_NAME, dbUsername, dbPassword );
				
				populateRoles();
			}
			
			return true;
			
		} catch ( SQLException e ) {
			System.out.println("Database error: " + e.toString());
		} catch (ClassNotFoundException e) {
			System.out.println("Database error: " + e.toString());
		}
		
		return false;
	}
	
	
	/**
	 * Close an open database connection.
	 * @return true if successful.
	 */
	public static boolean closeConnection() {
		if ( con != null ) {
			try {
				con.close();
				con = null;
				roleByName = null;
			} catch (SQLException e) {
				System.out.println("DatabaseAccess: Unable to close database connection.");
				return false;
			}
		}
		return true;
	}
	
	
	/**
	 * 
	 * @throws SQLException
	 */
	private static void populateRoles() throws SQLException {
		System.out.println("DatabaseAccess: Keep valid roles stored for role id referencing.");
		
		// make new map
		roleByName = new HashMap<String,RoleRecord>();
		
		String sql = "SELECT * from `roles` order by role_id";

		PreparedStatement ps = con.prepareStatement(sql);
		ResultSet results = ps.executeQuery();
		
		while (results.next()) {
			int roleId = results.getInt("role_id");
			String roleName = results.getString("role");
			String roleDetails = results.getString("details");
			roleByName.put(roleName, new RoleRecord(roleId,roleName,roleDetails));
		}
	}
	
	
	
	/**
	 * Checks if the current user session is valid
	 * 
	 * @param token
	 * @param user_id
	 * @return
	 */
	public static boolean validateUser(String user_id, String token) {
		if (!makeConnection()) return false;
		
		System.out.println("DatabaseAccess: Validating session token.");
		
		String sql = "SELECT count(*) as count FROM `login` WHERE username = ? and token = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, user_id);
			ps.setString(2, token);
			ResultSet countResult = ps.executeQuery();
			countResult.next();
			
			if ( countResult.getInt("count")  == 1 ) return true; // valid authority
			return false;
			
		} catch (SQLException e) {
			System.out.println("SQLException: " + e.toString());
		}
		
		return false;
	}

	
	
	
	/**
	 * Used at login time.
	 * Checks if a username and password exist in the database
	 * 
	 * @param userId
	 * @param password
	 * @return
	 * @throws  
	 */
	public static boolean loginAttempt(String user_id, String password) {
		if (!makeConnection()) return false;
		
//		for ( Entry<String,RoleRecord> record : roleByName.entrySet()){
//			System.out.println( record.getKey() +": "+ record.getValue().roleId +", "+ record.getValue().role +", "+ record.getValue().details);
//		}
			
		
		System.out.println("DatabaseAccess: Validating login.");
		
		// check if user exists.
		String sql = "SELECT count(*) as 'count' FROM `user_info` WHERE username = ? and password = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, user_id);
			ps.setString(2, password);
			ResultSet countResult = ps.executeQuery();
			countResult.next();
			
			if ( countResult.getInt("count")  == 1 ) {
				System.out.println("DatabaseAccess: username & password are valid.");
				logoutUser(user_id);
				return true; 
			}
			
			return false;
			
		} catch (SQLException e) {
			System.out.println("SQLException: " + e.toString());
		}
		
		return false;
	}

	
	/**
	 * Insert a new user into the database.
	 * 
	 * role_name is case sensitive.
	 * 
	 * @param currentUser_id
	 * @param token
	 * @param personName
	 * @param newUser_id
	 * @param password
	 * @param role_name
	 * @return
	 */
	public static boolean createUser( String currentUser_id, String token, String personName, String newUser_id, String password, String role_name ){
		String currentUserRole = getRole(currentUser_id, token);
		int role_id;
		
		try {
			role_id = roleByName.get(role_name).roleId;
		} catch (Exception e) {
			// role doesn't exist in database
			// this is case sensitive
			return false;
		}
		
		// Refuse roles that aren't allowed to create users.
		if ( currentUserRole.equals("") ) return false;
		if ( currentUserRole.equals("CLIENT") ) return false;
		
		// TODO check if they are allowed to make a new client
		
		// TODO check if they are allowed to make a new staff
		
		System.out.println("DatabaseAccess: Creating new user.");
		
		String sql = "INSERT INTO `"+DATABASE_NAME+"`.`"+TBL_ACTIVE_SESSION+"` (`user_id`, `name`, `username`, `password`, `role_id`) VALUES (NULL, ?, ?, ?, ?);";
		PreparedStatement ps;
		
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, personName);
			ps.setString(2, newUser_id);
			ps.setString(3, password);
			ps.setInt(4, role_id);
			ps.executeUpdate();
			return true;
			
		} catch (SQLException e) {
			System.out.println("DatabaseAccess: " +  e.toString());
		}
		
		return false;
	}
	
	
	/**
	 * remove a user's database authentication, closing their session.
	 * 
	 * @param user_id
	 * @return
	 */
	public static boolean logoutUser(String user_id, String token) {
		// can only log out of your own session
		if ( !validateUser(user_id, token) ) return false;
		return logoutUser( user_id );
		
	}


	/**
	 * Only to be used after user has been authenticated
	 * Must remain private function for security reasons
	 * @param user_id
	 * @return
	 */
	private static boolean logoutUser(String user_id) {
		System.out.println("DatabaseAccess: User is being logged out.");
		
		String sql = "DELETE FROM `"+DATABASE_NAME+"`.`"+TBL_ACTIVE_SESSION+"` WHERE `"+TBL_ACTIVE_SESSION+"`.`username` = ?";
		PreparedStatement ps;
		
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, user_id);
			ps.executeUpdate();
			return true;
			
		} catch (SQLException e) {
			System.out.println("DatabaseAccess: " +  e.toString());
		}
		
		return false;
	}


	/**
	 * Return the role of current session user
	 * 
	 * @param user_id
	 * @param token
	 * @return
	 */
	public static String getRole(String user_id, String token) {
		
		if (!makeConnection()) return "";
		if (!validateUser(user_id, token)) return ""; // can only see your own role
		
		System.out.println("DatabaseAccess: Getting role.");
		
		String sql = "select role from roles natural join user_info where user_info.username = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, user_id);
			ResultSet countResult = ps.executeQuery();
			countResult.next();
			
			return countResult.getString("role");
			
		} catch (SQLException e) {
			System.out.println("SQLException: " + e.toString());
		}
		
		return "";
	}

	
	/**
	 * Creates a new session in the database's login table
	 * This happens after a successful login
	 * 
	 * @param user_id
	 * @param string
	 */
	public static boolean createAuthentication(String user_id, String token) {
		if (!makeConnection()) return false;
		
		System.out.println("DatabaseAccess: User is being logged in.");
		String sql = "INSERT INTO `"+DATABASE_NAME+"`.`"+TBL_ACTIVE_SESSION+"` (`username`, `token`, `create_timestamp`) VALUES (?, ?, CURRENT_TIMESTAMP);";
		
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, user_id);
			ps.setString(2, token);
			ps.executeUpdate();
			return true;
		
		} catch (SQLException e) {
			System.out.println("SQLException: " + e.toString());
		}
		
		return false;
	}
}
