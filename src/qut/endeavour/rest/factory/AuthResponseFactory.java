package qut.endeavour.rest.factory;

import com.sun.jersey.api.NotFoundException;

import qut.endeavour.rest.bean.AuthResponse;
import qut.endeavour.rest.storage.DatabaseStorage;

public class AuthResponseFactory {
	/**
	 * Ask database if token is valid
	 * 
	 * @param token
	 * @return AuthResponse object
	 */
	public static AuthResponse authToken( String token, String user_id ) {
		
		// sanity checks
		if( user_id == null ) throw new NotFoundException("Error: No user_id");
		if( user_id.length() < 1 ) throw new NotFoundException("Error: No user_id");
		if( token == null ) throw new NotFoundException("Error: No token");
		if( token.length() < 1 ) throw new NotFoundException("Error: No token");
		
		AuthResponse ar;
		DatabaseStorage db = new DatabaseStorage();
		
		boolean validUser = false;
		
		// ask server if token is authentic
		validUser = db.validateUser(token, user_id);
		
		if ( validUser ) {
			ar = new AuthResponse( AuthResponse.visibility.FOUND );
		} else {
			ar = new AuthResponse( AuthResponse.visibility.NOT_FOUND);
		}
		
		return ar;
	}
}
