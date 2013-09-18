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
import javax.xml.bind.JAXBElement;

import qut.endeavour.rest.bean.AuthResponse;
import qut.endeavour.rest.bean.AuthToken;
import qut.endeavour.rest.bean.Verification;
import qut.endeavour.rest.bean.admin.DMSUser;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.factory.AuthFactory;
import qut.endeavour.rest.storage.DatabaseAccess;

/**
 * Very powerful service to create, remove and modify users.
 * @author Steven
 *
 */
@Path("/user")
public class UsersResource {
	
	private final String USER_ID_FIELD = "user_id";
	private final String AUTH_TOKEN_FIELD = "auth_token";
	
	
	@GET
	public DMSUser existinguser(){
		DMSUser user = new DMSUser();
		user.setName("namefield");
		user.setPassword("passwordfield");
		user.setRole("rolefield");
		user.setUser_id("idfield");
		return user;
	}
	@POST
	//@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
//	public void newUser( JAXBElement<DMSUser> newUserJAX ){//, @Context UriInfo uriInfo ) {
	//public void newUser( DMSUser newUser ) {
	public void newUser( final String text) {
//		DMSUser newUser = newUserJAX.getValue();
		System.out.println(text);
//		MultivaluedMap<String, String> params = uriInfo.getQueryParameters();
//		
//		String token = params.getFirst(AUTH_TOKEN_FIELD);
//		String user_id = params.getFirst(USER_ID_FIELD);
		
		// sanity checks
//		if( user_id == null ) throw new DMSClientErrorException("No user_id supplied");
//		if( user_id.length() < 1 ) throw new DMSClientErrorException("No user_id supplied");
//		if( token == null ) throw new DMSClientErrorException("No token supplied");
//		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");
		
//		System.out.println(newUser.getUser_id());
//		System.out.println(newUser.getName());
//		System.out.println(newUser.getPassword());
//		System.out.println(newUser.getRole());
	}
	
	
	
	
//	@DELETE
//	@Produces(MediaType.APPLICATION_JSON)
//	public Verification deleteUser( DMSUser deleteUser, @Context UriInfo uriInfo ) {
		
//		MultivaluedMap<String, String> params = uriInfo.getQueryParameters();
//		
//		String token = params.getFirst(AUTH_TOKEN_FIELD);
//		String user_id = params.getFirst(USER_ID_FIELD);
//		
//		// sanity checks
//		if( user_id == null ) throw new DMSClientErrorException("No user_id supplied");
//		if( user_id.length() < 1 ) throw new DMSClientErrorException("No user_id supplied");
//		if( token == null ) throw new DMSClientErrorException("No token supplied");
//		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");
//		
//		return AuthFactory.authLogoutUser(token, user_id);
//		return null;
//	}
	
	
}
	
	
	
	
