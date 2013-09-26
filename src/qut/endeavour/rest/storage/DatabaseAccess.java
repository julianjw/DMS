package qut.endeavour.rest.storage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;





import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;


public class DatabaseAccess {
	
	private final static String DBMS_LOCATION = "jdbc:mysql://localhost:3306/";
	private final static String DATABASE_NAME = "endeavourdb";
	private final static String dbUsername = "root";
	private final static String dbPassword = "";
	
	private final static char BOOLEAN = 'b';
	private final static char INTEGER = 'i';
	private final static char STRING = 's';
	private final static char DATE = 'd';
	private final static char DERIVED = 'x';
	
	/* ***** ADMIN ***** */
	private final static String TBL_ACTIVE_SESSION = "active_session";
	private final static String TBL_USER_INFO = "user_info";
	
	
	private static Connection  con = null;
	private static Map<String,RoleRecord> roleByName = null;
	private static Map<String,ContactTypeRecord> cTypeByMap = null; //  get contact type record by name or (String)id
	private static Map<String,PeriodRecord> periodByMap = null; //  get contact type record by name or (String)id
	
	

	
	
	
	
	/**
	 * 
	 * Used to poulate cTypeByName
	 * client contact types details
	 * 
	 * @param user_id
	 * @param token
	 * @return
	 */
//	public static List<String> getContactTypes( String user_id, String token ) {
//		List<String> contactTypes = new ArrayList<String>();
//		if ( validateUser(user_id, token) ) {
//			for ( Entry<String,ContactTypeRecord> record : cTypeByName.entrySet() ){
//				contactTypes.add(record.getValue().cType.toLowerCase());
//			}
//		}
//		return contactTypes;
//	}
	
	
	/**
	 * Populate roleByName
	 * 
	 * @param user_id
	 * @param token
	 * @return
	 */
	public static List<String> getRoles( String user_id, String token ) {
		List<String> roles = new ArrayList<String>();
		if ( validateUser(user_id, token) ) {
			for ( Entry<String,RoleRecord> record : roleByName.entrySet()){
				roles.add( record.getValue().role.toLowerCase() );
			}
		}
		return roles;
	}
	
	private static boolean makeConnection() {
		try {
			if ( con == null ) {
				Class.forName("com.mysql.jdbc.Driver");
				System.out.println("DatabaseAccess: Making a new connection to the database.");
				con = DriverManager.getConnection(DBMS_LOCATION+DATABASE_NAME, dbUsername, dbPassword );
				
				//TODO refactor these
				populateRoles();
				populateContactTypes();
				populatePeriods();
			}
			
			return true;
			
		} catch ( SQLException e ) {
			System.out.println("Database error: " + e.toString());
		} catch (ClassNotFoundException e) {
			System.out.println("Database error: " + e.toString());
		}
		
//		throw new ServerErrorException(1);
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
	
	
	/* **************************************** */
	/* ***********PREFILLS********************* */
	/* **************************************** */
	
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
		
		System.out.print("Found roles: ");
		while (results.next()) {
			System.out.print(results.getString("role")+" ");
			int roleId = results.getInt("role_id");
			String roleName = results.getString("role");
			String roleDetails = results.getString("details");
			roleByName.put(roleName.toLowerCase(), new RoleRecord(roleId,roleName,roleDetails));
//			roleByName.put(Integer.toString(roleId), new RoleRecord(roleId,roleName,roleDetails));
		}
		
		System.out.println();
	}
	
	
	private static void populateContactTypes() throws SQLException {
		System.out.println("DatabaseAccess: Keep valid contact types stored for contact type id referencing.");
		
		// make new map
		cTypeByMap = new HashMap<String,ContactTypeRecord>();
		
		String sql = "SELECT * from `client_contact_type` order by contact_type_id";

		PreparedStatement ps = con.prepareStatement(sql);
		ResultSet results = ps.executeQuery();
		
		while (results.next()) {
			Integer contactTypeId = results.getInt("contact_type_id");
			String typeName = results.getString("contact_type_name");
			String typeDescription = results.getString("description");
			ContactTypeRecord contactType = new ContactTypeRecord(contactTypeId,typeName,typeDescription);
			cTypeByMap.put(typeName, contactType );
			cTypeByMap.put(contactTypeId.toString(), contactType);
		}
	}
	
	
	private static void populatePeriods() throws SQLException {
		System.out.println("DatabaseAccess: Keep valid period values stored for referencing.");
		
		// make new map
		periodByMap = new HashMap<String,PeriodRecord>();
		
		String sql = "SELECT * from `health_frequency_period` order by frequency_period_id";

		PreparedStatement ps = con.prepareStatement(sql);
		ResultSet results = ps.executeQuery();
		
		while (results.next()) {
			Integer periodId = results.getInt("frequency_period_id");
			String periodName = results.getString("period_name");

			PeriodRecord period = new PeriodRecord(periodId,periodName);
			periodByMap.put(periodName, period );
			periodByMap.put(periodId.toString(), period );
		}
	}

	/* **************************************** */
	/* ***********PREFILLS END***************** */
	/* **************************************** */
	
	
	
	/**
	 * Checks if the current user session is valid
	 * 
	 * @param token
	 * @param user_id
	 * @return true if user logged in
	 */
	public static boolean validateUser(String user_id, String token) {
		if (!makeConnection()) return false;
		
		System.out.print("DatabaseAccess: Validating session token->");
		
		String sql = "SELECT count(*) as count FROM `"+DATABASE_NAME+"`.`"+TBL_ACTIVE_SESSION+"` WHERE username = ? and token = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, user_id);
			ps.setString(2, token);
			ResultSet countResult = ps.executeQuery();
			countResult.next();
			
			if ( countResult.getInt("count")  == 1 ) {
				System.out.println("Validated.");
				return true; // valid authority
			}
			
		} catch (SQLException e) {
			System.out.println("SQLException: " + e.toString());
		}
		
		System.out.println("Not Validated.");
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
		
		//TODO THIS IS BROKEN
		
		System.out.println("current user: "+currentUser_id);
		System.out.println("new person's name: "+personName);
		System.out.println("new username: "+newUser_id);
		System.out.println("new person's role: "+password);
		
		System.out.println("Role name: \"" + role_name + "\"");
		
		int role_id;
		
//		
//		for ( Entry<String,RoleRecord> es : roleByName.entrySet() ) {
//			System.out.println("Role Record- Key: "+es.getKey()+", id: "+es.getValue().roleId+", role: "+es.getValue().role+", roleName: "+es.getValue().details);
//		}
		
		
		try {
			role_id = roleByName.get(role_name.toLowerCase()).roleId;
		} catch (Exception e) {
			// role doesn't exist in database
			// this is case sensitive
//			throw new DMSClientErrorException("Incorrect role.");
			 throw new DMSClientErrorException("Bad user role");//return false;
		}
		
		System.out.println("Role id: " + Integer.toString(role_id));
		
		// Refuse roles that aren't allowed to create users.
		if ( currentUserRole.equals("") ) throw new DMSClientErrorException("Current cannot create a new user");//return false;
		if ( currentUserRole.equals("CLIENT") ) throw new DMSClientErrorException("Current cannot create a new user");// return false;
		
		// TODO check if they are allowed to make a new client
		
		// TODO check if they are allowed to make a new staff
		
		System.out.println("DatabaseAccess: Creating new user.");
		
		String sql = "INSERT INTO `"+DATABASE_NAME+"`.`user_info` (`user_id`, `name`, `username`, `password`, `role_id`) VALUES (NULL, ?, ?, ?, ?);";
		PreparedStatement ps;
		
		System.out.println(sql);
		
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
		
		 throw new DMSClientErrorException("Unable to update database with new user information");
//		return false;
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
			
			System.out.println("result getstring: " + countResult.getString("role"));
			
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

	
	
	/**
	 * Pulls everything from the database. transforms to a list of maps
	 * @param fields
	 * @param infoTable
	 * @param username
	 * @return
	 */
	private static List<Map<String, Object>> getUserRelatedDetails( List<String> fields, String infoTable, String username ) {
		
		List<Map<String, Object>> resultMapList = new ArrayList<Map<String,Object>>();
		
		String sql = "SELECT tb.* from `"+infoTable+"` tb inner join `"+TBL_USER_INFO+"` ui on tb.user_id=ui.user_id where ui.username = ?";
		System.out.println(sql);
		
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, username);
			ResultSet results = ps.executeQuery();
			
			while (results.next()) {
				Map<String, Object> resultMap = new HashMap<String, Object>();
				
				for ( String field : fields ) {
					char type = field.charAt(0);
					field = field.substring(2); // get rid of type character and *
					if ( type == STRING ) resultMap.put(field, results.getString(field)); else
					if ( type == INTEGER ) resultMap.put(field, results.getInt(field)); else
					if ( type == BOOLEAN) resultMap.put(field, results.getBoolean(field)); else
					if ( type == DATE ) resultMap.put(field, results.getDate(field)); else 
					if ( type == DERIVED ) resultMap.put(field, "?.derived.?");
				}
				
				resultMapList.add(resultMap);
			}
			
			if ( resultMapList.size() > 0 ) return resultMapList;
			
		} catch (SQLException e) {
			System.out.println("DatabaseAccess: "+e);
		}
		
		System.out.println("--(No rows returned)");
		return null;
	}

	/**
	 * Returns the contact name type by the ID of the name
	 * @param key
	 * @return
	 */
	public static String getContactTypeById(Integer contactTypeKey) {
		try {
			return cTypeByMap.get(contactTypeKey.toString()).cType;
		} catch (Exception e) {
			return null;
		}
		
	}
	
	/**
	 * return period name for int key
	 * 
	 * @param key
	 * @return
	 */
	public static String getPeriodById(Integer key) {
		try {
			return periodByMap.get(key.toString()).periodName;
		} catch (Exception e) {
			return null;
		}
		
	}
	
	public static List<Map<String, Object>> getTableContents(String username,
			String token, String clientid, List<String> fieldNames,
			String tableName) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;//throw new NotFoundException("Not using a valid session");
		return getUserRelatedDetails( fieldNames, tableName, clientid );
	}

	
	
	public static List<String> getUserInfo(String username) {
		
		String sql = "select ui.username, ui.name, ui.password, r.role from user_info ui inner join roles r on ui.role_id=r.role_id where ui.username=?";
		
		List<String> userInfo = new ArrayList<String>();
		
		try {
			
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, username);
			ResultSet results = ps.executeQuery();
			
			results.next();
			
			userInfo.add(results.getString("username"));
			userInfo.add(results.getString("name"));
			userInfo.add(results.getString("password"));
			userInfo.add(results.getString("role"));
			
		} catch (SQLException e) {
			return null;
		}
		
		return userInfo;
	}

	/**
	 * Get a prepared statement ready.
	 * 
	 * @param sql
	 * @return
	 * @throws SQLException
	 * @throws DMSException 
	 */
	public static PreparedStatement createPreparedStatement(String sql) throws SQLException, DMSException {
		if ( makeConnection() )
		return con.prepareStatement(sql);
		throw new DMSException("Cannot connect to database.");
	}
}
