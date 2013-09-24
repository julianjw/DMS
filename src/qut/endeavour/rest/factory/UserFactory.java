package qut.endeavour.rest.factory;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.admin.DMSUser;
import qut.endeavour.rest.storage.DatabaseAccess;

public class UserFactory {
	
	public static DMSUser createUser(String username) {
		
		List<String> userInfo = DatabaseAccess.getUserInfo( username );
		
		DMSUser user = new DMSUser();
		
		user.setUser_id( userInfo.get(0) );
		user.setrName( userInfo.get(1) );
		user.setPassword( userInfo.get(2) );
		user.setRole( userInfo.get(3) );
		
		
		return user;
	}
	
}
