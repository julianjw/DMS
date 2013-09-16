package qut.endeavour.rest.storage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;



public class DatabaseAccess {
	
	private final static String DBMS_LOCATION = "jdbc:mysql://localhost:3306/";
	private final static String DATABASE_NAME = "endeavourdb";

	private final static String dbUsername = "root";
	private final static String dbPassword = "";
	
	private static Connection  con = null;
	
	private static boolean makeConnection() {
		try {
			if ( con == null ) {
				Class.forName("com.mysql.jdbc.Driver");
				System.out.println("DatabaseAccess: Making a new connection to the database.");
				con = DriverManager.getConnection(DBMS_LOCATION+DATABASE_NAME, dbUsername, dbPassword );
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
		
		System.out.println("DatabaseAccess: Validating login.");
		
		// check if user exists.
		String sql = "SELECT count(*) as 'count' FROM `user_info` WHERE username = ? and password = ?";
		
		try {
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, user_id);
			ps.setString(2, password);
			ResultSet countResult = ps.executeQuery();
			countResult.next();
			
			if ( countResult.getInt("count")  == 1 ) return true; // valid login
			return false;
			
		} catch (SQLException e) {
			System.out.println("SQLException: " + e.toString());
		}
		
		return false;
	}


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
	 * 
	 * @param user_id
	 * @param string
	 */
	public static boolean createAuthentication(String user_id, String token) {
		if (!makeConnection()) return false;
		
		System.out.println("DatabaseAccess: Inserting token into database ");
		String sql = "INSERT INTO `endeavourdb`.`login` (`username`, `token`, `create_timestamp`) VALUES (?, ?, CURRENT_TIMESTAMP);";
		
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
