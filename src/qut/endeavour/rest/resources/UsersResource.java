package qut.endeavour.rest.resources;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
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
import qut.endeavour.rest.utility.Users;

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
	@Produces(MediaType.APPLICATION_JSON) // TODO get validation
	public DMSUser existinguser(){
		DMSUser user = new DMSUser();
		user.setrName("namefield");
		user.setPassword("passwordfield");
		user.setRole("rolefield");
		user.setUser_id("idfield");
		return user;
	}
	
	
	@POST
	@Path("/planning/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public void newUser(
			final DMSUser newUser,
			@PathParam("user_id") String currentUser_id,
			@PathParam("token") String token
			) {
		
		System.out.println("Existing user id: "+currentUser_id);
		System.out.println("Existing user auth: "+token);
		
		System.out.println("new user_id:"+newUser.getUser_id());
		System.out.println("new user name:"+newUser.getrName());
		System.out.println("new user password:"+newUser.getPassword());
		System.out.println("new user role:"+newUser.getRole());
		
		if ( Users.putUserInDatabase( currentUser_id, token, newUser ) ) {
		
		}
//	public void newUser( final String text) {
//		DMSUser newUser = newUserJAX.getValue();
		//System.out.println(text);
//		MultivaluedMap<String, String> params = uriInfo.getQueryParameters();
//		
//		String token = params.getFirst(AUTH_TOKEN_FIELD);
//		String user_id = params.getFirst(USER_ID_FIELD);
		
		// sanity checks
//		if( user_id == null ) throw new DMSClientErrorException("No user_id supplied");
//		if( user_id.length() < 1 ) throw new DMSClientErrorException("No user_id supplied");
//		if( token == null ) throw new DMSClientErrorException("No token supplied");
//		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");
		
		
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
	
	
	
	
