package qut.endeavour.rest.utility;

import qut.endeavour.rest.bean.admin.DMSUser;

public class Users {
	
	public static boolean putUserInDatabase( String currentUser_id, String token, DMSUser user ){
		
		String personName = user.getrName();
		String newUser_id = user.getUser_id();
		String password = user.getPassword();
		String role_name = user.getRole();
		
		
		return false;
	}
	
}
