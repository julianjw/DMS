package qut.endeavour.rest.utility;

import qut.endeavour.rest.bean.admin.DMSUser;
import qut.endeavour.rest.storage.DatabaseAccess;

public class UserUtility {
	public static boolean putUserInDatabase( String currentUser_id, String token, DMSUser user ){
		String personName = user.getrName();
		String newUser_id = user.getUser_id();
		String password = user.getPassword();
		String role_name = user.getRole();
		
		return DatabaseAccess.createUser(currentUser_id, token, personName, newUser_id, password, role_name);
	}
}
