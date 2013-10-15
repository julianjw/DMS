package qut.endeavour.rest.factory;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.admin.DMSUser;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.Permissions;

public class UserFactory {
	
	private static String CLIENT_ROLE = "CLIENT";
	
	public static DMSUser createUser(String requester_username, String token, String username) {
		
		String role = DatabaseAccess.getRole(requester_username, token);
		if ( !Permissions.canRequestUser( role ) ) throw new DMSClientErrorException("User role "+role+" cannot request a user.");
		
		List<String> userInfo = DatabaseAccess.getUserInfo( username );
		
		return new DMSUser (
				userInfo.get(0),	// user login name
				userInfo.get(1),	// user's real name
				null, 				// no password returned
				userInfo.get(3)		// role
				);
	}
	
	public static List<DMSUser> createAllClients(String username, String token) {
	
		{
			String role = DatabaseAccess.getRole(username, token);
			if ( !Permissions.canRequestClients( role ) ) throw new DMSClientErrorException("User role "+role+" cannot request a user.");
		}
		
		List<List<String>> clientsInfo = DatabaseAccess.getAllUsersWithRole( CLIENT_ROLE ); // TODO make this a constant
		List<DMSUser> users = new ArrayList<DMSUser>();
		
		for ( List<String> client : clientsInfo ) {
			users.add( new DMSUser(
					client.get(0),	// user login name
					client.get(1),	// user's real name
					null, 			// no password returned
					null			// no role will be returned
					) );
		}
		return users;
	}
	
}
