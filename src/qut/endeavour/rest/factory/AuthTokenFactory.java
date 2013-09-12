/**
 * 
 */
package qut.endeavour.rest.factory;

import java.util.Random;

import qut.endeavour.rest.bean.AuthToken;

/**
 * AuthTokenFactory
 * @author Steven
 *
 */
public final class AuthTokenFactory {
	
	private static final int tokenLength = 32;
	private static final String validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	private static final Random r = new Random( System.currentTimeMillis() );
	
	private static String generateTokenString() {
		String st = "";
		for ( int i = 0; i < tokenLength; i++ ) {
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
}
