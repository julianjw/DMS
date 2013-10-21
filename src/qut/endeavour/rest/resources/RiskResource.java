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
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.BeansUtility;
import qut.endeavour.rest.utility.Permissions;


@Path("/risk")
public class RiskResource {
	
	/**
	 * Update an individual risk
	 * 
	 * @param arg
	 * @param username
	 * @param token
	 * @return
	 */
	@POST
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONPlanning(
			RiskAssessment arg,
			@PathParam("username") String username,
			@PathParam("token") String token
			) {
		
		Integer riskid = arg.getRisk_id();
		System.out.println("Risk id is " + riskid);
		
		String role = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canPostRiskAssessment(role) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Writing: Plan Meeting");
		if ( BeansUtility.storeBean(arg, riskid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
		
	}

	/**
	 * Get an individual risk
	 * @param username
	 * @param token
	 * @param riskid
	 * @return
	 */
	@GET
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{riskid: [0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public RiskAssessment JSONSupportRequired(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("riskid") Integer riskid
			) {
		
		System.out.println("Requesting: Requesting risk details");
		
		String role = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetRiskAssessment(role) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		return RiskFactory.createRiskAssessment(username, token, riskid);
	}
	
	
	
	
	/**
	 * Get a summary of all risks for a client
	 * 
	 * @param username
	 * @param token
	 * @param clientid
	 * @return
	 */
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
		
		String role = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetRiskAssessment(role) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		return RiskFactory.createClientRisks(username, token, clientid);
	}
	
}
