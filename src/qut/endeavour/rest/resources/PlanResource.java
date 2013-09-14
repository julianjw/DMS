package qut.endeavour.rest.resources;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import qut.endeavour.rest.bean.plan.ClientDetails;
import qut.endeavour.rest.bean.plan.PersonalPlan;
import qut.endeavour.rest.bean.plan.clientdetails.AlertInformation;
import qut.endeavour.rest.bean.plan.clientdetails.ContactDetails;
import qut.endeavour.rest.bean.plan.clientdetails.FormalOrders;
import qut.endeavour.rest.bean.plan.clientdetails.LivingArangements;
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
		
		
		PersonalDetails pd = new PersonalDetails( "a", "a", "a", "a", "a", "a" );
		AlertInformation ai = new AlertInformation( "a", "a", "a", "a", "a", "a", "a", "a" );
		ArrayList<ContactDetails> contd = new ArrayList<ContactDetails>();
		contd.add(new ContactDetails("cd1","cd","cd"));
		contd.add(new ContactDetails("cd2","cd","cd"));
		contd.add(new ContactDetails("cd3","cd","cd"));
		LivingArangements la = new LivingArangements("a", "a", "a", contd, "a", contd);
		FormalOrders fo = new FormalOrders("a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a");
		ClientDetails cd = new ClientDetails( pd, ai, la, fo );
		
		PersonalPlan pp = new PersonalPlan( cd );
		
		return pp;
	}
	
}
