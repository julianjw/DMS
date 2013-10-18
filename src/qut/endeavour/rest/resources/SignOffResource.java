package qut.endeavour.rest.resources;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import qut.endeavour.rest.bean.Found;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.Permissions;

@Path("/signoff")
public class SignOffResource {
	
	
	@GET
	@Path("/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public Found getJSONSignedOff(
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canRequestClients(userRole) ) {
			throw new DMSClientErrorException("User with role " + userRole.toUpperCase() + " cannot access client information.");
		}
		
		return new Found( DatabaseAccess.isSignedOff(clientid) );
	}
	
	
	@POST
	@Path("/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	public void getJSONSetSignedOff(
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Signing off.");
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canRequestClients(userRole) ) {
			throw new DMSClientErrorException("User with role " + userRole.toUpperCase() + " cannot access client information.");
		}
		
		DatabaseAccess.addSignOff(clientid);
		
	}
	
	@DELETE
	@Path("/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	public void getJSONDeleteSignedOff(
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Removing sign off.");
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canRequestClients(userRole) ) {
			throw new DMSClientErrorException("User with role " + userRole.toUpperCase() + " cannot access client information.");
		}
		
		DatabaseAccess.removeSignOff(clientid);
		
	}
	
}