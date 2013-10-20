package qut.endeavour.rest.utility;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import qut.endeavour.rest.bean.admin.DMSUser;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.security.PasswordUtility;
import qut.endeavour.rest.utility.security.SaltAndHash;

public class UserUtility {
	
	private static String DEFAULT_PASSWORD = "password";
	
	/**
	 * Prepare a user before writing to database.
	 * 
	 * @param currentUser_id
	 * @param token
	 * @param user
	 * @return
	 */
	public static boolean putUserInDatabase( String currentUser_id, String token, DMSUser user ){
		String userRealName = user.getrName();
		if (userRealName == null ) throw new DMSClientErrorException("Invalid person name.");
		if (userRealName == "" ) throw new DMSClientErrorException("Invalid person name.");
		userRealName = userRealName.replaceAll("\\A\\s*", ""); // remove whitespace from outside of the words
		userRealName = userRealName.replaceAll("\\s\\Z*", "");
		
		String loginName = user.getUser_id();
		if (loginName == null ) throw new DMSClientErrorException("Invalid person name.");
		if (loginName == "" ) throw new DMSClientErrorException("Invalid person name.");
		loginName = loginName.replaceAll("\\A\\s*", "");
		loginName = loginName.replaceAll("\\s\\Z*", "");
		
		
		SaltAndHash sah;
		try {
			sah = PasswordUtility.newSaltAndHash(DEFAULT_PASSWORD);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
			return false;
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
			return false;
		} catch (InvalidKeySpecException e) {
			e.printStackTrace();
			return false;
		}
		
		String nameOfRole = user.getRole();
		List<String> roles = DatabaseAccess.getRoles();
		
		for( String role : roles ) {
			if ( role.equals(nameOfRole) ) return DatabaseAccess.createUser(currentUser_id, userRealName, loginName, sah.getSalt(), sah.getHash(), nameOfRole);
		}
		
		throw new DMSClientErrorException("Invalid user id.");
	}
}
