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
import qut.endeavour.rest.bean.risk.ClientRisk;
import qut.endeavour.rest.bean.risk.RiskAssessment;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.factory.AuthFactory;
import qut.endeavour.rest.factory.MeetingFactory;
import qut.endeavour.rest.factory.PlanFactory;
import qut.endeavour.rest.factory.RiskFactory;
import qut.endeavour.rest.utility.BeansUtility;


@Path("/risk")
public class RiskResource {
	
	@POST
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{riskid: [0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONPlanning(
			Planning arg,
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("riskid") Integer riskid
			) {
		
		System.out.println("Writing: Plan Meeting");
		if ( BeansUtility.storeBean(arg, riskid, username, token) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
		
	}

	@GET
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{riskid: [0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public RiskAssessment JSONSupportRequired(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("riskid") Integer riskid
			) {
		
		System.out.println("Requesting: Requesting risk details");
		
		return RiskFactory.createRiskAssessment(username, token, riskid);
	}
	
	
	
	
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/clientrisks/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	public List<ClientRisk> getJSONUpcomingMeetings(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		// sanity checks
		if( username == null ) throw new DMSClientErrorException("No username supplied");
		if( username.length() < 1 ) throw new DMSClientErrorException("No username supplied");
		if( token == null ) throw new DMSClientErrorException("No token supplied");
		if( token.length() < 1 ) throw new DMSClientErrorException("No token supplied");
		if( clientid == null ) throw new DMSClientErrorException("No username supplied");
		if( clientid.length() < 1 ) throw new DMSClientErrorException("No username supplied");

		System.out.println("Getting upcoming meeting details.");
		
		return RiskFactory.createClientRisks(username, token, clientid);
	}
	
	
	
	
	
}
