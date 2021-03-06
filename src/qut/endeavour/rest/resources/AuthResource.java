package qut.endeavour.rest.resources;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.UriInfo;

import qut.endeavour.rest.bean.AuthResponse;
import qut.endeavour.rest.bean.AuthToken;
import qut.endeavour.rest.bean.Verification;
import qut.endeavour.rest.bean.admin.Authentication;
import qut.endeavour.rest.bean.admin.DMSUser;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.factory.AuthFactory;
import qut.endeavour.rest.storage.DatabaseAccess;

/**
 * This RESTful resource resides in the <b>./rest/auth</b> path
 * 
 * @author Steven
 * 
 * 
 *
 */
@Path("/auth")
public class AuthResource {
	
	private final String USER_ID_FIELD = "user_id";
	private final String PASSWORD_FIELD = "password";
	
	private final String AUTH_TOKEN_FIELD = "auth_token";
	private final String MESSAGE = "badlogin";
	
	private final String VALID_USER_REDIRECT = "../post-login.html";
	private final String INVALID_USER_REDIRECT = "../login.jsp";
	
	
	/**
	 * Validates current token & user_id combination.
	 * 
	 *  ./rest/auth/?auth_token={AUTH_TOKEN}&user_id={USER_ID}
	 * 
	 * @param uriInfo - Reads supplied URL.
	 * 
	 * @return Verification - JSON verification success or failure
	 */
	@DELETE
	@Produces(MediaType.APPLICATION_JSON)
	public Verification logout( @Context UriInfo uriInfo ) {
		
		MultivaluedMap<String, String> params = uriInfo.getQueryParameters();
		
		String token = params.getFirst(AUTH_TOKEN_FIELD);
		String user_id = params.getFirst(USER_ID_FIELD);
		
		System.out.println("Logging out user " +user_id + " with token " + token);
		
		// sanity checks
		if( user_id == null ) throw new DMSClientErrorException("No user_id supplied");
		if( user_id.length() < 1 ) throw new DMSClientErrorException("No user_id supplied");
		if( token == null ) throw new DMSClientErrorException("No token supplied");
		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");
		
		if ( DatabaseAccess.validateUser(user_id, token) ) {
			return AuthFactory.authLogoutUser(token, user_id);
		}
		return new Verification(Verification.Verified.FAILURE);
	}
	
	
	
	/**
	 * validates if the current token & userid match and are valid.
	 * @param uriInfo
	 * @return
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public AuthResponse validate( @Context UriInfo uriInfo ) {
		
		MultivaluedMap<String, String> params = uriInfo.getQueryParameters();
		
		String token = params.getFirst(AUTH_TOKEN_FIELD);
		String user_id = params.getFirst(USER_ID_FIELD);
		
		// sanity checks
		if( user_id == null ) throw new DMSClientErrorException("No user_id supplied");
		if( user_id.length() < 1 ) throw new DMSClientErrorException("No user_id supplied");
		if( token == null ) throw new DMSClientErrorException("No token supplied");
		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");
		
		return AuthFactory.createAuthResponse(token, user_id);
	}
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/app")
	public Authentication jsonAuthRequest( DMSUser user ) {
		
		String userId = user.getUser_id();
		String password = user.getPassword();
		
		System.out.println();
		System.out.println("user_id: "+userId);
		System.out.println("password: "+password);
		
		//Sanity Checks
		if (	userId != null &&
				userId != "" &&
				password != null &&
				password != "" 
				) {
				   
			boolean validLogin = false;
			
			validLogin = DatabaseAccess.loginAttempt( userId, password );
			   
			// redirect user to first page
			if ( validLogin ) {
				// generate token
				AuthToken t = AuthFactory.makeToken();
				
				// store token as active session
				if ( DatabaseAccess.createAuthentication( userId, t.toString()) ) {
					return new Authentication( userId, t.getTokenId() );
				} 
			} 
		} 
		throw new DMSClientErrorException("Invalid login details" );
	}
	
	
	/**
	 * WEBSITE USE ONLY
	 * Checks user_id and password
	 * redirects
	 * @param userId
	 * @param password
	 * @param response
	 * @throws IOException
	 */
	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
	public void authRequest(
			@FormParam(USER_ID_FIELD) String userId,
			@FormParam(PASSWORD_FIELD) String password,
			@Context HttpServletResponse response )
					throws IOException {
		
		System.out.println();
		System.out.println("user_id: "+userId);
		System.out.println("password: "+password);
		
		//Sanity Checks
		if (	userId != null &&
				userId != "" &&
				password != null &&
				password != "" 
				) {
				   
			boolean validLogin = false;
			
			validLogin = DatabaseAccess.loginAttempt( userId, password );
			   
			// redirect user to first page
			if ( validLogin ) {
				// generate token
				AuthToken t = AuthFactory.makeToken();
				
				// store token as active session
				if ( DatabaseAccess.createAuthentication( userId, t.toString()) ) {
					response.sendRedirect(VALID_USER_REDIRECT + "?" + AUTH_TOKEN_FIELD + "=" + t.getTokenId() + "&" + USER_ID_FIELD + "=" + userId);
				} else {
					response.sendRedirect(INVALID_USER_REDIRECT + "?" + MESSAGE  + "=" + "CannotCreateAuth");
				}
			
			} else {
				response.sendRedirect(INVALID_USER_REDIRECT + "?" + MESSAGE  + "=" + "InvalidLogin");
			}
			
		} else {
			response.sendRedirect(INVALID_USER_REDIRECT + "?" + MESSAGE  + "=" + "InvalidLogin");
		}
	}
}
