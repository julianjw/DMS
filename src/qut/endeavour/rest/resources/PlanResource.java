package qut.endeavour.rest.resources;


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
import qut.endeavour.rest.bean.plan.HealthDetails;
import qut.endeavour.rest.bean.plan.PersonalPlan;
import qut.endeavour.rest.bean.plan.Planning;
import qut.endeavour.rest.bean.plan.SupportRequired;
import qut.endeavour.rest.factory.PlanFactory;

@Path("/personalplan")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class PlanResource {
	
	
	
	@POST
	@Path("/planning/{user_id: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONPlanning(
			@PathParam("user_id") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Writing: Planning");
		System.out.println("Token: "+token);
		System.out.println("user_id: "+username);
		System.out.println("clientId: "+clientid);
		
		return new Verification(Verification.Verified.SUCCESS);
		//return PlanFactory.createPlanning();
		
	}
	
	
	@POST
	@Path("/communication/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONCommunication(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Writing: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return new Verification(Verification.Verified.SUCCESS);
	}
	
	@POST
	@Path("/supportrequired/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONSupportRequired(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Writing: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return new Verification(Verification.Verified.SUCCESS);
	}
	
	@POST
	@Path("/healthdetails/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONHealthDetails(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Writing: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return new Verification(Verification.Verified.SUCCESS);
	}
	
	@POST
	@Path("/clientdetails/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONClientDetails(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Writing: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return new Verification(Verification.Verified.SUCCESS);
	}
	
	@POST
	@Path("/educationemployment/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONEducationEmployment(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Writing: EducationEmployment");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return new Verification(Verification.Verified.SUCCESS);
	}
	
	@POST
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Verification setJSONPersonalPlan(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Writing: PersonalPlan");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return new Verification(Verification.Verified.SUCCESS);
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
		
		System.out.println("Requesting: Planning");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return PlanFactory.createPlanning();
	}
	
	@GET
	@Path("/communication/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public Communication JSONCommunication(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Requesting: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return PlanFactory.createCommunication();
	}
	
	@GET
	@Path("/supportrequired/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public SupportRequired JSONSupportRequired(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Requesting: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return PlanFactory.createSupportRequired();
	}
	
	@GET
	@Path("/healthdetails/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public HealthDetails JSONHealthDetails(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Requesting: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return PlanFactory.createHealthDetails();
	}
	
	@GET
	@Path("/clientdetails/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public ClientDetails JSONClientDetails(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Requesting: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return PlanFactory.createClientDetails();
	}
	
	@GET
	@Path("/educationemployment/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public EducationEmployment JSONEducationEmployment(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Requesting: ClientDetails");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return PlanFactory.createEducationEmployment();
	}
	
	@GET
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public PersonalPlan JSONPersonalPlan(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		System.out.println("Requesting: PersonalPlan");
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		return PlanFactory.createPersonalPlan();
	}
	
}
