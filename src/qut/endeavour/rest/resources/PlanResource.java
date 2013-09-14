package qut.endeavour.rest.resources;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import qut.endeavour.rest.bean.plan.ClientDetails;
import qut.endeavour.rest.bean.plan.Communication;
import qut.endeavour.rest.bean.plan.EducationEmployment;
import qut.endeavour.rest.bean.plan.HealthDetails;
import qut.endeavour.rest.bean.plan.PersonalPlan;
import qut.endeavour.rest.bean.plan.SupportRequired;
import qut.endeavour.rest.bean.plan.clientdetails.AlertInformation;
import qut.endeavour.rest.bean.plan.clientdetails.ContactDetails;
import qut.endeavour.rest.bean.plan.clientdetails.FormalOrders;
import qut.endeavour.rest.bean.plan.clientdetails.LivingArangements;
import qut.endeavour.rest.bean.plan.clientdetails.PersonalDetails;
import qut.endeavour.rest.bean.plan.communication.BadTopics;
import qut.endeavour.rest.bean.plan.communication.ComsAndDecisionMaking;
import qut.endeavour.rest.bean.plan.educationemployment.Education;
import qut.endeavour.rest.bean.plan.educationemployment.Employment;
import qut.endeavour.rest.bean.plan.health.DietaryRequirements;
import qut.endeavour.rest.bean.plan.health.HealthInformation;
import qut.endeavour.rest.bean.plan.health.HealthManagement;
import qut.endeavour.rest.bean.plan.support.DailyActivities;
import qut.endeavour.rest.bean.plan.support.FinancialSupport;
import qut.endeavour.rest.bean.plan.support.GeneralSupport;
import qut.endeavour.rest.bean.plan.support.MobilityAndTransport;
import qut.endeavour.rest.bean.plan.support.Relaxation;

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
		
		
		PersonalDetails pd = new PersonalDetails( "a", "a", "a", "a", "a", "a", "a" );
		AlertInformation ai = new AlertInformation( "a", "a", "a", "a", "a", "a", "a", "a" );
		ArrayList<ContactDetails> contd = new ArrayList<ContactDetails>();
		contd.add(new ContactDetails("cd1","cd","cd"));
		contd.add(new ContactDetails("cd2","cd","cd"));
		contd.add(new ContactDetails("cd3","cd","cd"));
		LivingArangements la = new LivingArangements("a", "a", "a", contd, "a", contd);
		FormalOrders fo = new FormalOrders("a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a");
		ClientDetails cd = new ClientDetails( pd, ai, la, fo );
		
		HealthInformation healthInfo = new HealthInformation("b", "b", false, false, false, "b", "b");
		HealthManagement healthManagement = new HealthManagement("b", "b", "b", "b", 0, "b", "b", "b", "b", "b");
		DietaryRequirements dietaryReqs = new DietaryRequirements("b", "b", false, "b", "b", "b", "b", "b", "b", "b", "b", "b", "b");
		HealthDetails hd = new HealthDetails(healthInfo, healthManagement, dietaryReqs);
		
		GeneralSupport gs = new GeneralSupport("C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C");
		MobilityAndTransport mat = new MobilityAndTransport("C", "C", "C", "C", "C", "C", "C", "C");
		FinancialSupport finsup = new FinancialSupport("C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C");
		DailyActivities dailyact = new DailyActivities("C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C");
		Relaxation relax = new Relaxation("C","C","C","C","C");
		SupportRequired supreq = new SupportRequired(gs, mat, finsup, dailyact, relax);
		
		ArrayList<BadTopics> badt = new ArrayList<BadTopics>();
		badt.add( new BadTopics("C1","C") );
		badt.add( new BadTopics("C2","C") );
		badt.add( new BadTopics("C3","C") );
		ComsAndDecisionMaking decision = new ComsAndDecisionMaking("C", "C", "C", "C", "C", "C", "C", "C", badt);
		Communication coms = new Communication(decision);
		
		
		Education cadm = new Education("D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D");
		Employment emp = new Employment("D", "D", "D", "D", "D", "D", "D", "D", "D");
		EducationEmployment ee = new EducationEmployment( cadm, emp );
		
		PersonalPlan pp = new PersonalPlan( cd, hd, supreq, coms, ee );
		
		return pp;
	}
	
}
