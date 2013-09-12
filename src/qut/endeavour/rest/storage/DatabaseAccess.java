package qut.endeavour.rest.storage;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



public class DatabaseAccess {
	
	private final static String dbUrl = "jdbc:mysql://localhost:3306/testdb";
	private final static String username = "root";
	private final static String password = "";
	
	private static Connection  con = null;
	
	private static void makeConnection() {
		try {
			Class.forName("com.mysql.jdbc.Driver");
		
			if ( con == null ) {
				System.out.println("DatabaseAccess: Making a new connection to the database.");
				con = DriverManager.getConnection(dbUrl, username, password );
			}
//			
//			PreparedStatement st = con.prepareStatement("select * from names");
//			ResultSet result = st.executeQuery();
//			
//			while(result.next()) {
//				System.out.println(result.getString(1) + " " + result.getString(2));
//			}
		} catch ( SQLException e ) {
			System.out.println("Database error: " + e.toString());
		} catch (ClassNotFoundException e) {
			System.out.println("Database error: " + e.toString());
		}
		
	}
	
	
	
	public static boolean validateUser(String token, String user_id) {
		makeConnection();
		System.out.println("DatabaseAccess: Validating session token.");
		return true;
	}

	public static boolean validateLogin(String userId, String password) {
		makeConnection();
		System.out.println("DatabaseAccess: Validating login.");
		return true;
	}

}
