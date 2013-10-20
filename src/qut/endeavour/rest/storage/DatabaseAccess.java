package qut.endeavour.rest.storage;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;






import java.util.Vector;

import qut.endeavour.rest.bean.admin.DMSClientUser;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.utility.Permissions;
import qut.endeavour.rest.utility.SqlWriteJob;
import qut.endeavour.rest.utility.security.PasswordUtility;
import qut.endeavour.rest.utility.security.SaltAndHash;


public class DatabaseAccess {
	
	private final static String DBMS_LOCATION = "jdbc:mysql://localhost:3306/";
	private final static String DATABASE_NAME = "endeavourdb";
	private final static String dbUsername = "root";
	private final static String dbPassword = "";
	
	private final static char BOOLEAN = 'b';
	private final static char INTEGER = 'i';
	private final static char STRING = 's';
	private final static char DATE = 'd';
	private final static char AUTO_INCREMENT = 'a';
	
	/* ***** ADMIN ***** */
	private final static String TBL_ACTIVE_SESSION = "active_session";
	private final static String TBL_USER_INFO = "user_info";
	
	
	private static Connection  con = null;
	private static Map<String,RoleRecord> roleByName = null;
	private static Map<String,ContactTypeRecord> cTypeByMap = null; //  get contact type record by name or (String)id
	private static Map<String,PeriodRecord> periodByMap = null; //  get contact type record by name or (String)id
	
	

	
	
	
	
	public static boolean performSqlJobs( List<SqlWriteJob> jobs ) {
		
		try {
			con.setAutoCommit(false);
		
			for ( SqlWriteJob job : jobs ) {
				job.execute();
			}
			
			con.commit();
			
			
		} catch (Exception e) { // any exception, do the same thing
			try {
				con.rollback();
				con.setAutoCommit(true);
				return false;
				
			} catch (SQLException e1) {}
			
		}
		return true;
	}
	
	/**
	 * Populate roleByName
	 * 
	 * @param user_id
	 * @param token
	 * @return
	 */
	public static List<String> getRoles() {
		List<String> roles = new ArrayList<String>();
		//if ( validateUser(user_id, token) ) {
		for ( Entry<String,RoleRecord> record : roleByName.entrySet()){
			roles.add( record.getValue().role.toLowerCase() );
		}
		//}
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
				//populateContactTypes();
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
	
	
//	private static void populateContactTypes() throws SQLException {
//		System.out.println("DatabaseAccess: Keep valid contact types stored for contact type id referencing.");
//		
//		// make new map
//		cTypeByMap = new HashMap<String,ContactTypeRecord>();
//		
//		//String sql = "SELECT * from `client_contact_type` order by contact_type_id";
//
//		PreparedStatement ps = con.prepareStatement(sql);
//		ResultSet results = ps.executeQuery();
//		
//		while (results.next()) {
//			Integer contactTypeId = results.getInt("contact_type_id");
//			String typeName = results.getString("contact_type_name");
//			String typeDescription = results.getString("description");
//			ContactTypeRecord contactType = new ContactTypeRecord(contactTypeId,typeName,typeDescription);
//			cTypeByMap.put(typeName, contactType );
//			cTypeByMap.put(contactTypeId.toString(), contactType);
//		}
//	}
	
	
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

	public static SaltAndHash getSaltAndHash( String username ) {
		
		String sql = "select password_hash, salt from user_info where username = ?";
		try {
			
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, username);
			ResultSet rs = ps.executeQuery();
			rs.next();
			
			byte[] hash = rs.getBytes(1);
			byte[] salt = rs.getBytes(2);
			return new SaltAndHash(salt, hash);
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
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
		
		// does the user exist?
		try {
			String sql = "SELECT count(*) as 'count' FROM `user_info` WHERE username = ?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, user_id);
			ResultSet countResult = ps.executeQuery();
			countResult.next();
			if ( countResult.getInt("count") != 1 ) return false; 
		} catch (SQLException e) {
			e.printStackTrace();
			return false;
		}
		
		System.out.println("User found in db.");
		
		
		// is the user valid?
		SaltAndHash sah;
		
		try {
			sah = DatabaseAccess.getSaltAndHash(user_id);
			
			if ( PasswordUtility.compareAgainstHash(sah, password) ) {
				logoutUser(user_id);
				return true;
			}
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return false;
		} catch (InvalidKeySpecException e) {
			e.printStackTrace();
			return false;
		}
		
		System.out.println("User and password combo incorrect.");
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
	public static boolean createUser( String currentUser_id, String personName, String newUser_id, byte[] salt, byte[] hash, String role_name ){
		//String currentUserRole = getRole(currentUser_id, token);
		
		System.out.println("Making a new user.");
		
		int role_id;
		
		try {
			role_id = roleByName.get(role_name.toLowerCase()).roleId;
		} catch (Exception e) {
			// role doesn't exist in database
			// this is case sensitive
			 throw new DMSClientErrorException("Bad user role");//return false;
		}
		
		System.out.println("Role id: " + Integer.toString(role_id));
		
		// TODO check if they are allowed to make a new client
		
		// TODO check if they are allowed to make a new staff
		
		System.out.println("DatabaseAccess: Creating new user.");
		
		String sql = "INSERT INTO `"+DATABASE_NAME+"`.`user_info` (`user_id`, `name`, `username`, `password_hash`, `salt`, `role_id`) VALUES (NULL, ?, ?, ?, ?, ?);";
		PreparedStatement ps;
		
		System.out.println(sql);
		
		try {
			ps = con.prepareStatement(sql);
			ps.setString(1, personName);
			ps.setString(2, newUser_id);
			ps.setBytes(3, hash);
			ps.setBytes(4, salt);
			ps.setInt(5, role_id);
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
		//if (!validateUser(user_id, token)) return ""; // can only see your own role
		
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

	private static List<Map<String, Object>> getUserRelatedDetails( List<String> fields, String infoTable, String username ) {
		return getRelatedDetails( fields, infoTable, username, null, true);
	}
	
	/**
	 * 
	 * @param fieldNames
	 * @param tableName
	 * @param keyValue
	 * @param keyName
	 * @param joinToUserInfo
	 * @return
	 */
	private static List<Map<String, Object>>getRelatedDetails(
			List<String> fieldNames,
			String tableName,
			Object keyValue,
			String keyName,
			boolean joinToUserInfo
			) {
		
		List<Map<String, Object>> resultMapList = new ArrayList<Map<String,Object>>();
		
		String sql = null;
		
		if ( joinToUserInfo ) {
			sql = "SELECT tb.* from `"+tableName+"` tb inner join `"+TBL_USER_INFO+"` ui on tb.user_id=ui.user_id where ui.username = ?";
		} else {
			if ( keyName == null ) {
				keyName = "a";
				System.out.println("Key value name error.");
			}
			sql = "SELECT tb.* from `"+tableName+"` tb where tb."+keyName+" = ?";
		}
		
		
		System.out.println(sql);
		
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			if ( keyValue.getClass() == String.class ) ps.setString(1, (String)keyValue); else
			if ( keyValue.getClass() == Integer.class ) ps.setInt(1, (Integer)keyValue);
			
			ResultSet results = ps.executeQuery();
			
			while (results.next()) {
				Map<String, Object> resultMap = new HashMap<String, Object>();
				
				for ( String fieldName : fieldNames ) {
					char type = fieldName.charAt(0);
					fieldName = fieldName.substring(2); // get rid of type character and *
					if ( type == STRING ) resultMap.put(fieldName, results.getString(fieldName)); else
					if ( type == INTEGER ) resultMap.put(fieldName, results.getInt(fieldName)); else
					if ( type == BOOLEAN) resultMap.put(fieldName, results.getBoolean(fieldName)); else
					if ( type == DATE ) resultMap.put(fieldName, results.getDate(fieldName)); else 
					if ( type == AUTO_INCREMENT ) resultMap.put(fieldName, results.getInt(fieldName)); else
					System.out.println("Error: retrieving unknown type from db "+type);
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
	 * Pulls everything from the database. transforms to a list of maps
	 * @param fields
	 * @param infoTable
	 * @param username
	 * @return
	 */
	/*private static List<Map<String, Object>> getUserRelatedDetails( List<String> fields, String infoTable, String username ) {
		
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
	}*/

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
	public static Integer getPeriodByName(String key) {
		try {
			return periodByMap.get(key).periodId;
		} catch (Exception e) {
			return null;
		}
		
	}
	
	public static List<Map<String, Object>> getTableContents(String username,
			String token, String clientid, List<String> fieldNames,
			String tableName) {
		if (!makeConnection()) return null;
		//if (!validateUser(username, token)) return null;//throw new NotFoundException("Not using a valid session");
		return getUserRelatedDetails( fieldNames, tableName, clientid );
	}
	
	public static List<Map<String, Object>> getTableContents(
			String clientid,
			List<String> fieldNames,
			String tableName) {
		if (!makeConnection()) throw new DMSClientErrorException("Cannot access database.");
		return getUserRelatedDetails( fieldNames, tableName, clientid );
	}
	
	public static List<Map<String, Object>> getTableContents(
			int riskid,
			List<String> fieldNames,
			String tableName) {
		if (!makeConnection()) throw new DMSClientErrorException("Cannot access database.");
		return getRelatedDetails( fieldNames, tableName, riskid, "risk_id", false );
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
		if ( makeConnection() ) return con.prepareStatement(sql);
		throw new DMSException("Cannot connect to database.");
	}

	public static int getUserIdNumberByUsername(String username) throws DMSException, SQLException {
		if ( !makeConnection() ) throw new DMSException("Database down."); 
		
		String sql = "SELECT user_id FROM `user_info` WHERE username = '"+username+"';";
		PreparedStatement ps = con.prepareStatement(sql);
		
		ResultSet rs = ps.executeQuery();
		
		int userIdNumber = 0;
		
		if ( rs.next() ) {
			userIdNumber = rs.getInt("user_id");
		} else {
			throw new DMSException("User \""+username+"\" doesn't exist.");
		}
		
		
		return userIdNumber;
	}
	
	public static String getUsernameByIdNumber(int userId) throws DMSException, SQLException {
		if ( !makeConnection() ) throw new DMSException("Database down."); 
		
		String sql = "SELECT username FROM `user_info` WHERE user_id = "+userId+";";
		PreparedStatement ps = con.prepareStatement(sql);
		
		ResultSet rs = ps.executeQuery();
		
		String userName = null;
		
		if ( rs.next() ) {
			userName = rs.getString("username");
		} else {
			throw new DMSException("User \""+userId+"\" doesn't exist.");
		}
		
		
		return userName;
	}

	public static List<List<String>> getAllUsersWithRole(String role) {
		role = role.toUpperCase();
		String sql = "select ui.username, ui.name, r.role from user_info ui inner join roles r on ui.role_id=r.role_id where r.role=?";
		ResultSet results = queryUserInfo(sql, role);
		
		List<List<String>> allClients = new ArrayList<List<String>>();
		
		List<String> client = null;
		while ( (client = extractUserInfo(results)) != null ) allClients.add(client);
		
		return allClients;
	}
	
	public static List<String> getUserInfo(String username) {
		String sql = "select ui.username, ui.name, r.role from user_info ui inner join roles r on ui.role_id=r.role_id where ui.username=?";
		ResultSet results = queryUserInfo(sql, username);
		return extractUserInfo(results);
	}
	
	private static List<String> extractUserInfo( ResultSet r ){
		
		List<String> userInfo = new Vector<String>();
		try {
			if ( !r.next() ) return null;
			userInfo.add( r.getString("username"));
			userInfo.add( r.getString("name"));
			userInfo.add( ""/*r.getString("password")*/);
			userInfo.add( r.getString("role"));
			return userInfo;
		} catch (SQLException e) {
			return null;
		}
	}
	
	private static ResultSet queryUserInfo(String sql, String whereValue ) {
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, whereValue);
			ResultSet results = ps.executeQuery();
			return results;
		} catch (SQLException e) {
			return null;
		}
	}

	public static Boolean isSignedOff(String clientid) {
		if (!makeConnection()) return null;
		
		System.out.println( "Checking if signed off.");
		
		try {
			String sql = "select count(user_id) as count from plan_sign_off where user_id = ?";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, DatabaseAccess.getUserIdNumberByUsername(clientid));
			ResultSet results = ps.executeQuery();
			results.next();
			int count = results.getInt(1);
			boolean response = count > 0; 
			System.out.println("Signed off: " + response);
			return response;
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (DMSException e) {
			e.printStackTrace();
		}
		return null;
	}


	
	public static void addSignOff(String clientid) {
		if (!makeConnection()) return;
		Boolean performDelete = isSignedOff(clientid);
		if ( performDelete == null ) return;
		
		if ( !performDelete ) {
			String sql = "INSERT INTO  `"+DATABASE_NAME+"`.`plan_sign_off` ( `user_id` ) VALUES ( ? );";
			changeSignOff( sql, clientid);
		}
	}
	
	public static void removeSignOff(String clientid) {
		if (!makeConnection()) return;
		Boolean performDelete = isSignedOff(clientid);
		if ( performDelete == null ) return;
		
		if ( performDelete ) {
			String sql = "DELETE FROM `"+DATABASE_NAME+"`.`plan_sign_off` WHERE `plan_sign_off`.`user_id` = ?;";
			changeSignOff( sql, clientid);
		}
	}
	
	private static void changeSignOff( String sql, String clientid ) {
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setInt(1, DatabaseAccess.getUserIdNumberByUsername(clientid));
			ps.execute();
			
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (DMSException e) {
			e.printStackTrace();
		}
	}

	public static List<DMSClientUser> getAllClients() {
		String sql = "select ui.username, ui.name, pd.dob, pd.mobileno, pd.phoneno from client_personal_details pd natural right join user_info ui  inner join roles r on ui.role_id=r.role_id where r.role = 'client';";
		PreparedStatement ps = null;
		ResultSet r = null;
		
		List<DMSClientUser> allClients = new ArrayList<DMSClientUser>();
		
		try {
			ps = con.prepareStatement(sql);
			r = ps.executeQuery();
			
			while (r.next()) {
				
				String dob = null;
				
				if (r.getDate("dob") != null)
					dob = r.getDate("dob").toString();
				
				DMSClientUser c = new DMSClientUser();
				c.setUser_id( r.getString("username") );
				c.setrName( r.getString("name") );
				c.setDob( dob );
				c.setMobile( r.getString("mobileno") );
				c.setTelephone( r.getString("phoneno") );
				allClients.add(c);
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
			throw new DMSClientErrorException("Cannot get client information");
		}
		
		return allClients;
	}
	
}
