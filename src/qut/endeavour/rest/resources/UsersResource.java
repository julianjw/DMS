package qut.endeavour.rest.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import qut.endeavour.rest.bean.Verification;
import qut.endeavour.rest.bean.admin.DMSUser;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.factory.UserFactory;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.Permissions;
import qut.endeavour.rest.utility.UserUtility;

/**
 * Very powerful service to create, remove and modify users.
 * @author Steven
 *
 */
@Path("/user")
public class UsersResource {
	
	@GET
	@Path("/getallclients/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<DMSUser> getAllClients(
			@PathParam("user_id") String username,
			@PathParam("token") String token
			){
		
		String role = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetClients(role) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		return UserFactory.createAllClients( username, token );
	}
	
	@GET
	@Path("/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{user_to_get: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public DMSUser existinguser(
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("user_to_get") String userToRetrieve
			){
		
		String role = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetUser(role) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		return UserFactory.createUser( username, token, userToRetrieve );
	}
	
	
	@POST
	@Path("/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification newUser(
			final DMSUser newUser,
			@PathParam("user_id") String username,
			@PathParam("token") String token
			) {
		// sanity checks
		if( username == null ) throw new DMSClientErrorException("No user_id supplied");
		if( username.length() < 1 ) throw new DMSClientErrorException("No user_id supplied");
		if( token == null ) throw new DMSClientErrorException("No token supplied");
		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");
		
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canPostUser(userRole) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		if ( UserUtility.putUserInDatabase( username, token, newUser ) ) {
			return new Verification(Verification.Verified.SUCCESS);
		}
		return new Verification(Verification.Verified.FAILURE);
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
	
	
	
	
