package qut.endeavour.rest.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

import qut.endeavour.rest.bean.plan.ClientDetails;
import qut.endeavour.rest.bean.plan.PersonalPlan;
import qut.endeavour.rest.bean.plan.clientdetails.PersonalDetails;

@Path("/personalplan")
public class PlanResource {
	
	
	@GET
	@Path("/{username: [a-zA-Z_0-9]+}/{token: [a-zA-Z_0-9]+}/{clientid: [a-zA-Z_0-9]+}")
	@Produces(MediaType.APPLICATION_JSON)
	public PersonalPlan getPersonalPlan(
			@PathParam("username") String username,
			@PathParam("token") String token,
			@PathParam("clientid") String clientid
			) {
		
		
		System.out.println("Token: "+token);
		System.out.println("Username: "+username);
		System.out.println("clientId: "+clientid);
		
		/*
		
		ClientDetails cd = new ClientDetails(
				new PersonalDetails(""),
				new 
				)
		*/
		return null;
	}
	
}
