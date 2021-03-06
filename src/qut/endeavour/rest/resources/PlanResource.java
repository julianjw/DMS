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
import qut.endeavour.rest.bean.plan.ClientDetails;
import qut.endeavour.rest.bean.plan.Communication;
import qut.endeavour.rest.bean.plan.EducationEmployment;
import qut.endeavour.rest.bean.plan.ExistingPlanDetails;
import qut.endeavour.rest.bean.plan.HealthDetails;
import qut.endeavour.rest.bean.plan.PersonalPlan;
import qut.endeavour.rest.bean.plan.Planning;
import qut.endeavour.rest.bean.plan.SupportRequired;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.factory.PlanFactory;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.utility.BeansUtility;
import qut.endeavour.rest.utility.Permissions;

@Path("/personalplan")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PlanResource {
	
	
	
	@POST
	@Path("/planning/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONPlanning(
			Planning arg,
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		boolean signedOff = DatabaseAccess.isSignedOff(clientid);
		boolean canAccess = false;
		String userRole = DatabaseAccess.getRole(username, token);
		
		if ( signedOff ) {
			canAccess = Permissions.canPostPersonalPlanPostSignOff(userRole);
		} else {
			canAccess = Permissions.canGetPersonalPlan(userRole);
		}
		
		// TODO Should refactor hardcoding
		if ( !canAccess && !userRole.toLowerCase().equals("client".toLowerCase())) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Writing: Planning");
		if ( BeansUtility.storeBean(arg, clientid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
		
	}
	
	
	@POST
	@Path("/communication/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONCommunication(
			Communication arg,
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		boolean signedOff = DatabaseAccess.isSignedOff(clientid);
		boolean canAccess = false;
		String userRole = DatabaseAccess.getRole(username, token);
		
		if ( signedOff ) {
			canAccess = Permissions.canPostPersonalPlanPostSignOff(userRole);
		} else {
			canAccess = Permissions.canGetPersonalPlan(userRole);
		}

		if ( !canAccess  ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Writing: Communication");
		if ( BeansUtility.storeBean(arg, clientid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
	}
	
	@POST
	@Path("/supportrequired/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONSupportRequired(
			SupportRequired arg,
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		boolean signedOff = DatabaseAccess.isSignedOff(clientid);
		boolean canAccess = false;
		String userRole = DatabaseAccess.getRole(username, token);
		
		if ( signedOff ) {
			canAccess = Permissions.canPostPersonalPlanPostSignOff(userRole);
		} else {
			canAccess = Permissions.canGetPersonalPlan(userRole);
		}

		if ( !canAccess ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Writing: Support Required");
		if ( BeansUtility.storeBean(arg, clientid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
	}
	
	@POST
	@Path("/healthdetails/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONHealthDetails(
			HealthDetails arg,
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		boolean signedOff = DatabaseAccess.isSignedOff(clientid);
		boolean canAccess = false;
		String userRole = DatabaseAccess.getRole(username, token);
		
		if ( signedOff ) {
			canAccess = Permissions.canPostPersonalPlanPostSignOff(userRole);
		} else {
			canAccess = Permissions.canGetPersonalPlan(userRole);
		}

		if ( !canAccess ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Writing: Health Details");
		if ( BeansUtility.storeBean(arg, clientid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
	}
	
	@POST
	@Path("/clientdetails/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONClientDetails(
			ClientDetails arg,
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		boolean signedOff = DatabaseAccess.isSignedOff(clientid);
		boolean canAccess = false;
		String userRole = DatabaseAccess.getRole(username, token);
		
		if ( signedOff ) {
			canAccess = Permissions.canPostPersonalPlanPostSignOff(userRole);
		} else {
			canAccess = Permissions.canGetPersonalPlan(userRole);
		}

		if ( !canAccess ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Writing: Client Details");
		if ( BeansUtility.storeBean(arg, clientid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
	}
	
	@POST
	@Path("/educationemployment/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONEducationEmployment(
			EducationEmployment arg,
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		boolean signedOff = DatabaseAccess.isSignedOff(clientid);
		boolean canAccess = false;
		String userRole = DatabaseAccess.getRole(username, token);
		
		if ( signedOff ) {
			canAccess = Permissions.canPostPersonalPlanPostSignOff(userRole);
		} else {
			canAccess = Permissions.canGetPersonalPlan(userRole);
		}
		
		if ( !canAccess ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Writing: Education & Employment");
		if ( BeansUtility.storeBean(arg, clientid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
	}
	
	@POST
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONPersonalPlan(
			PersonalPlan arg,
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		boolean signedOff = DatabaseAccess.isSignedOff(clientid);
		boolean canAccess = false;
		String userRole = DatabaseAccess.getRole(username, token);
		
		if ( signedOff ) {
			canAccess = Permissions.canPostPersonalPlanPostSignOff(userRole);
		} else {
			canAccess = Permissions.canGetPersonalPlan(userRole);
		}
		
		if ( !canAccess ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Writing: Personal Plan");
		if ( BeansUtility.storeBean(arg, clientid) ) return new Verification(Verification.Verified.SUCCESS);
		System.out.println("Failure.");
		return new Verification(Verification.Verified.FAILURE);
	}
	
	
	/********************************************************************************************/
	@GET
	@Path("/planning/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public Planning JSONPlanning(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		// TODO Should refactor hardcoding
		if ( !Permissions.canGetPersonalPlan(userRole) && !userRole.toLowerCase().equals("client".toLowerCase())) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Requesting: Planning");return PlanFactory.createPlanning(username, token, clientid);
	}
	
	@GET
	@Path("/communication/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public Communication JSONCommunication(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetPersonalPlan(userRole) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Requesting: communication");
		
		return PlanFactory.createCommunication( username, token, clientid );
	}
	
	@GET
	@Path("/supportrequired/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public SupportRequired JSONSupportRequired(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetPersonalPlan(userRole) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Requesting: support required");
		
		return PlanFactory.createSupportRequired(username, token, clientid);
	}
	
	@GET
	@Path("/healthdetails/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public HealthDetails JSONHealthDetails(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetPersonalPlan(userRole) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Requesting: health details");

		return PlanFactory.createHealthDetails( username, token, clientid );
	}
	
	@GET
	@Path("/clientdetails/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public ClientDetails JSONClientDetails(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetPersonalPlan(userRole) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}

		System.out.println("Requesting: ClientDetails");

		return PlanFactory.createClientDetails(username, token, clientid);
	}
	
	@GET
	@Path("/educationemployment/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public EducationEmployment JSONEducationEmployment(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetPersonalPlan(userRole) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}

		System.out.println("Requesting: Education & Employment");

		return PlanFactory.createEducationEmployment( username, token, clientid );
	}
	
	@GET
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public PersonalPlan JSONPersonalPlan(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetPersonalPlan(userRole) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}
		
		System.out.println("Requesting: PersonalPlan");

		return PlanFactory.createPersonalPlan( username, token, clientid );
	}
	
	
	@GET
	@Path("allclientswithplans/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<ExistingPlanDetails> JSONExistingPlanDetails(
			@PathParam("username") String username,
			@PathParam("token") String token
			) {
		
		String userRole = DatabaseAccess.getRole(username, token);
		if ( !Permissions.canGetPersonalPlan(userRole) ) {
			System.out.println("User " + username + " cannot perform this action.");
			throw new DMSClientErrorException("User \""+username+"\"does not have permission for this action.");
		}

		System.out.println("Requesting: Existing plan details");

		return PlanFactory.createExistingPlanDetails( username, token );
	}/**/
	
}
