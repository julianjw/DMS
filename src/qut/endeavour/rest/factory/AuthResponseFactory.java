package qut.endeavour.rest.factory;

import qut.endeavour.rest.bean.AuthResponse;

public class AuthResponseFactory {
	/**
	 * Ask database if token is valid
	 * 
	 * @param token
	 * @return AuthResponse object
	 */
	public static AuthResponse authToken( String token ) {
		
		AuthResponse ar;
		boolean tokenFound = false;
		
		// ask server if token is authentic
		if ( token.length() > 0 ){
			tokenFound = true;
		}
		
		if ( tokenFound ) {
			ar = new AuthResponse( AuthResponse.visibility.FOUND );
		} else {
			ar = new AuthResponse( AuthResponse.visibility.NOT_FOUND);
		}
		
		return ar;
	}
}
