package qut.endeavour.rest.storage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



public class DatabaseAccess {
	
	private final static String DBMS_LOCATION = "jdbc:mysql://localhost:3306/";
	private final static String DATABASE_NAME = "endeavordb";


	private final static String username = "root";
	private final static String password = "";
	
	private static Connection  con = null;
	
	private static void makeConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		
			if ( con == null ) {
				System.out.println("DatabaseAccess: Making a new connection to the database.");
				con = DriverManager.getConnection(DBMS_LOCATION+DATABASE_NAME, username, password );
			}

		} catch ( SQLException e ) {
			System.out.println("Database error: " + e.toString());
		} catch (ClassNotFoundException e) {
			System.out.println("Database error: " + e.toString());
		}
	}
	
	public static boolean validateUser(String token, String user_id) {
		// TODO Auto-generated method stub
		makeConnection();
		System.out.println("DatabaseAccess: Validating session token.");
		return true;
	}

	public static boolean validateLogin(String userId, String password) {
		// TODO Auto-generated method stub
		makeConnection();
		System.out.println("DatabaseAccess: Validating login.");
		return true;
	}



	public static String getRole(String userId, String token) {
		// TODO Auto-generated method stub
		makeConnection();
		System.out.println("DatabaseAccess: Getting role.");
		return "staff";
	}

}
