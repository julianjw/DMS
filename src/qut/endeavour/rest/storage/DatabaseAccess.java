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
				roles.add(record.getValue().role.toLowerCase());
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
		
		while (results.next()) {
			int roleId = results.getInt("role_id");
			String roleName = results.getString("role");
			String roleDetails = results.getString("details");
			roleByName.put(roleName, new RoleRecord(roleId,roleName,roleDetails));
		}
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
	 * @return
	 */
	public static boolean validateUser(String user_id, String token) {
		if (!makeConnection()) return false;
		
		System.out.println("DatabaseAccess: Validating session token.");
		
		String sql = "SELECT count(*) as count FROM `"+DATABASE_NAME+"`.`"+TBL_ACTIVE_SESSION+"` WHERE username = ? and token = ?";
		
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
			throw new DMSClientErrorException("Incorrect role.");
//			return false;
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

	public static List<Map<String, Object>> getEmployment(
			String username, String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Employment.");
		return getUserRelatedDetails( DatabaseNames.FLDS_EMPLOYMENT, DatabaseNames.TBL_EMPLOYMENT, clientid );
	}

	public static List<Map<String,Object>> getEducation(
			String username, String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Education.");
		return getUserRelatedDetails( DatabaseNames.FLDS_EDUCATION, DatabaseNames.TBL_EDUCATION, clientid );
	}
	


	public static List<Map<String, Object>> getFormalOrders(String username,
			String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Formal Orders.");
		return getUserRelatedDetails( DatabaseNames.FLDS_FORMAL_ORDERS, DatabaseNames.TBL_FORMAL_ORDERS, clientid );
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

	public static List<Map<String, Object>> getLivingArrangements(
			String username, String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Living Arrangements.");
		return getUserRelatedDetails( DatabaseNames.FLDS_LIVING_ARRANGEMENTS, DatabaseNames.TBL_LIVING_ARRANGEMENTS, clientid );
	}

	public static List<Map<String, Object>> getContactDetails(String username,
			String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Contact Details.");
		return getUserRelatedDetails( DatabaseNames.FLDS_CLIENT_CONTACTS, DatabaseNames.TBL_CLIENT_CONTACTS, clientid );
	}

	public static List<Map<String, Object>> getAlertInformation(
			String username, String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Alert Information.");
		return getUserRelatedDetails( DatabaseNames.FLDS_ALERT_INFO, DatabaseNames.TBL_ALERT_INFO, clientid );
	}

	public static List<Map<String, Object>> getPersonalDetails(String username,
			String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Personal Details.");
		return getUserRelatedDetails( DatabaseNames.FLDS_PERSONAL_DETAILS, DatabaseNames.TBL_PERSONAL_DETAILS, clientid );
	}

	public static List<Map<String, Object>> getHealthDietary(String username,
			String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Dietary Details.");
		return getUserRelatedDetails( DatabaseNames.FLDS_DIETARY, DatabaseNames.TBL_DIETARY, clientid );
	}

	public static List<Map<String, Object>> getHealthDisability(String username,
			String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Disability Details.");
		return getUserRelatedDetails( DatabaseNames.FLDS_DISABILITY, DatabaseNames.TBL_DISABILITY, clientid );
	}

	public static List<Map<String, Object>> getHealthManagement(String username,
			String token, String clientid) {
		if (!makeConnection()) return null;
		if (!validateUser(username, token)) return null;
		System.out.println("DatabaseAccess: Getting Health Management Details.");
		return getUserRelatedDetails( DatabaseNames.FLDS_MANAGEMENT, DatabaseNames.TBL_MANAGEMENT, clientid );
	}
}
