package qut.endeavour.rest.storage;

public class DatabaseAccess {

	
	
	public static boolean validateUser(String token, String user_id) {
		System.out.println("DatabaseAccess: Validating session token.");
		return true;
	}

	public static boolean validateLogin(String userId, String password) {
		System.out.println("DatabaseAccess: Validating login.");
		return false;
	}

}
