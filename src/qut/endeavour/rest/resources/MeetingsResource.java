package qut.endeavour.rest.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.UriInfo;

import qut.endeavour.rest.bean.AuthRole;
import qut.endeavour.rest.bean.Verification;
import qut.endeavour.rest.bean.meeting.ScheduledMeeting;
import qut.endeavour.rest.bean.meeting.UpcomingMeeting;
import qut.endeavour.rest.bean.plan.Planning;
import qut.endeavour.rest.bean.plan.SupportRequired;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.factory.AuthFactory;
import qut.endeavour.rest.factory.MeetingFactory;
import qut.endeavour.rest.factory.PlanFactory;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.BeansUtility;
import qut.endeavour.rest.utility.Permissions;


@Path("/planmeeting")
public class MeetingsResource {
	
	@POST
	@Path("/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONScheduledMeeting(
			ScheduledMeeting arg,
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		
		String role = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canPostMeeting(role) ) {
			System.out.println("User " + username + " cannot perform this action.");
			return new Verification(Verification.Verified.FAILURE);
		}
		
		
		System.out.println("Writing: Plan Meeting");
		if ( BeansUtility.storeBean(arg, clientid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
		
	}
	
	@GET
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public ScheduledMeeting getJSONScheduledMeeting(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Requesting: meeting details");
		
		String role = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetMeeting(role) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		return MeetingFactory.createScheduledMeeting(username, token, clientid);
	}
	
	
	
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/allmeetings/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}")
	public List<UpcomingMeeting> getJSONUpcomingMeetings(
			@PathParam("username") String username,
			@PathParam("token") String token
			) {
		
		// sanity checks
		if( username == null ) throw new DMSClientErrorException("No username supplied");
		if( username.length() < 1 ) throw new DMSClientErrorException("No username supplied");
		if( token == null ) throw new DMSClientErrorException("No token supplied");
		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");

		String role = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetUpcomingMeetings(role) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Getting upcoming meeting details.");
		
		return MeetingFactory.createUpcomingMeetings(username, token);
	}
	
	
	
	
	
}
