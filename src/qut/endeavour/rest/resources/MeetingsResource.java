package qut.endeavour.rest.resources;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import javax.ws.rs.core.UriInfo;

import qut.endeavour.rest.bean.AuthRole;
import qut.endeavour.rest.bean.meeting.UpcomingMeeting;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.factory.AuthFactory;
import qut.endeavour.rest.factory.MeetingFactory;


@Path("/planmeeting")
public class MeetingsResource {
	
	private final String USER_ID_FIELD = "user_id";
	private final String AUTH_TOKEN_FIELD = "auth_token";
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<UpcomingMeeting> getJSONUpcomingMeetings(@Context UriInfo uriInfo ) {

		MultivaluedMap<String, String> params = uriInfo.getQueryParameters();
		
		String userId = params.getFirst(USER_ID_FIELD);
		String token = params.getFirst(AUTH_TOKEN_FIELD);
		
		// sanity checks
		if( userId == null ) throw new DMSClientErrorException("No user_id supplied");
		if( userId.length() < 1 ) throw new DMSClientErrorException("No user_id supplied");
		if( token == null ) throw new DMSClientErrorException("No token supplied");
		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");
		

		System.out.println("Getting upcoming meeting details");
//		System.out.println("user_id: " + userId );
//		System.out.println("Token: "+token);
		
		return MeetingFactory.createUpcomingMeetings(userId, token);
	}
	
	
}
