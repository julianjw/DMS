/**
 * 
 */
package qut.endeavour.rest.factory;

import java.util.ArrayList;
import java.util.List;
import java.util.Map.Entry;
import java.util.Random;

import qut.endeavour.rest.bean.AuthResponse;
import qut.endeavour.rest.bean.AuthRole;
import qut.endeavour.rest.bean.AuthRole.Role;
import qut.endeavour.rest.bean.AuthToken;
import qut.endeavour.rest.bean.Verification;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.storage.RoleRecord;

/**
 * AuthTokenFactory
 * @author Steven
 *
 */
public final class AuthFactory {
	
	private static final int tokenLength = 32;
	private static final String validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	private static final Random r = new Random( System.currentTimeMillis() );
	
	/**
	 * Generates a token string of default length
	 * @return
	 */
	private static String generateTokenString() {
		return generateTokenString(tokenLength);
	}
	
	/**
	 * 
	 * @param n number of characters in token string
	 * @return
	 */
	private static String generateTokenString( int n ) {
		String st = "";
		for ( int i = 0; i < n; i++ ) {
			st += validChars.charAt( r.nextInt( validChars.length() ) );
		}
		return st;
	}
	
	
	/**
	 * Makes a new AuthToken
	 * @return AuthToken
	 */
	public static AuthToken makeToken() {
		return new AuthToken( generateTokenString() );
	}

	/**
	 * finds a user's role and returns it as an object
	 * @param userId
	 * @param token
	 * @return
	 */
	public static AuthRole createRole(String userId, String token) {
		String role = DatabaseAccess.getRole(userId, token);
		return new AuthRole(role);
	}

	/**
	 * returns all user roles
	 * @param user_id
	 * @param token
	 * @return
	 */
	public static List<AuthRole> createRoles(String user_id, String token) {
		List<String> roles = DatabaseAccess.getRoles(user_id, token);
		List<AuthRole> authRoles = new ArrayList<AuthRole>();
		
		for ( String role : roles ) authRoles.add( new AuthRole(role));
		
		return authRoles;
	}
	
	
	
	/**
	 * Ask database if token is valid
	 * 
	 * @param token
	 * @return AuthResponse object
	 */
	public static AuthResponse createAuthResponse( String token, String user_id ) {

		AuthResponse ar;
		
		boolean validUser = false;
		
		// ask server if token is authentic
		validUser = DatabaseAccess.validateUser(token, user_id);
		
		if ( validUser ) {
			ar = new AuthResponse( AuthResponse.visibility.FOUND );
		} else {
			ar = new AuthResponse( AuthResponse.visibility.NOT_FOUND);
		}
		
		return ar;
	}
	
	
	
	/**
	 * 
	 * @param user_id
	 * @param token
	 * @return
	 */
	public static Verification authLogoutUser( String user_id, String token ) {
		if ( DatabaseAccess.logoutUser(user_id, token) ) {
			return new Verification(Verification.Verified.SUCCESS);
		}
		return new Verification(Verification.Verified.FAILURE);
	}
	
}
