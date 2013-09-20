package qut.endeavour.rest.factory;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.plan.ClientDetails;
import qut.endeavour.rest.bean.plan.Communication;
import qut.endeavour.rest.bean.plan.EducationEmployment;
import qut.endeavour.rest.bean.plan.HealthDetails;
import qut.endeavour.rest.bean.plan.PersonalPlan;
import qut.endeavour.rest.bean.plan.Planning;
import qut.endeavour.rest.bean.plan.SupportRequired;
import qut.endeavour.rest.bean.plan.clientdetails.AlertInformation;
import qut.endeavour.rest.bean.plan.clientdetails.ContactDetails;
import qut.endeavour.rest.bean.plan.clientdetails.FormalOrders;
import qut.endeavour.rest.bean.plan.clientdetails.LivingArrangements;
import qut.endeavour.rest.bean.plan.clientdetails.PersonalDetails;
import qut.endeavour.rest.bean.plan.communication.BadTopics;
import qut.endeavour.rest.bean.plan.communication.ComsAndDecisionMaking;
import qut.endeavour.rest.bean.plan.educationemployment.Education;
import qut.endeavour.rest.bean.plan.educationemployment.Employment;
import qut.endeavour.rest.bean.plan.health.HealthDietary;
import qut.endeavour.rest.bean.plan.health.HealthInformation;
import qut.endeavour.rest.bean.plan.health.HealthManagement;
import qut.endeavour.rest.bean.plan.planning.GoalPlan;
import qut.endeavour.rest.bean.plan.planning.HolidayPlan;
import qut.endeavour.rest.bean.plan.support.DailyActivities;
import qut.endeavour.rest.bean.plan.support.FinancialSupport;
import qut.endeavour.rest.bean.plan.support.GeneralSupport;
import qut.endeavour.rest.bean.plan.support.MobilityAndTransport;
import qut.endeavour.rest.bean.plan.support.Relaxation;
import qut.endeavour.rest.storage.DatabaseAccess;

public class PlanFactory {
	public static ClientDetails createClientDetails(){
		PersonalDetails pd = new PersonalDetails( "a", "a", "a", "a", "a", "a", "a", "a", "a" );
		AlertInformation ai = new AlertInformation( "a", "a", "a", "a", "a", "a", "a", "a", "a" );
		ArrayList<ContactDetails> contds = new ArrayList<ContactDetails>();
		contds.add(new ContactDetails("cd1","cd","cd","cd"));
		contds.add(new ContactDetails("cd1","cd","cd","cd"));
		contds.add(new ContactDetails("cd1","cd","cd","cd"));
		LivingArrangements la = new LivingArrangements("a", "a", "a", "a", 0, "a", contds, contds, contds.get(0));
		FormalOrders fo = new FormalOrders("a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a");
		
		return new ClientDetails( pd, ai, la, fo );
	}
	
	
	public static HealthDetails createHealthDetails() {
		HealthInformation healthInfo = new HealthInformation("b", "b", false, false, false, "b", "b");
		HealthManagement healthManagement = new HealthManagement("b", "b", "b", "b", 0, "b", "b", "b", "b", "b");
		HealthDietary dietaryReqs = new HealthDietary("b", "b", false, "b", "b", "b", "b", "b", "b", "b", "b", "b", "b");
		return new HealthDetails(healthInfo, healthManagement, dietaryReqs);
		
	}
	
	
	public static SupportRequired createSupportRequired(){
		GeneralSupport gs = new GeneralSupport("C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C");
		MobilityAndTransport mat = new MobilityAndTransport("C", "C", "C", "C", "C", "C", "C", "C");
		FinancialSupport finsup = new FinancialSupport("C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C");
		List<String> services = new ArrayList<String>();
		services.add("C");
		DailyActivities dailyact = new DailyActivities("C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", "C", services);
		Relaxation relax = new Relaxation("C","C","C","C","C");
		return new SupportRequired(gs, mat, finsup, dailyact, relax);
	}
	
	
	public static Communication createCommunication() {
		ArrayList<BadTopics> badt = new ArrayList<BadTopics>();
		badt.add( new BadTopics("C1","C") );
		badt.add( new BadTopics("C2","C") );
		badt.add( new BadTopics("C3","C") );
		ComsAndDecisionMaking decision = new ComsAndDecisionMaking("C", "C", "C", "C", "C", "C", "C", "C", badt);
		return new Communication(decision);
	}
	
	/**
	 * 
	 * @param username
	 * @param token
	 * @param clientid
	 * @return
	 */
	public static EducationEmployment createEducationEmployment(String username, String token, String clientid) {
		Education cadm = PlanFactory.createEducation( username, token, clientid );
		if ( cadm == null ) cadm = new Education();
		
		Employment emp = PlanFactory.createEmployment( username, token, clientid );
		if ( emp == null ) emp = new Employment();
		
		return new EducationEmployment( cadm, emp );
	}
	
	
	private static Employment createEmployment(String username, String token,
			String clientid) {
		
		List<Map<String, Object>> resultsList = DatabaseAccess.getEmployment( username, token, clientid );
		if ( resultsList == null ) return null;

		Map<String, Object> r = resultsList.get(0);
		ArrayList<Object> fields = new ArrayList<Object>();
		for ( String field: DatabaseAccess.FLDS_EMPLOYMENT) {
			field=field.substring(2);
			fields.add(r.get(field));
		}
		
		return new Employment(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				(String)fields.get(5),
				(String)fields.get(6),
				(String)fields.get(7),
				(String)fields.get(8)
				);
	}


	private static Education createEducation(String username, String token, String clientid) {
		
		List<Map<String, Object>> resultsList = DatabaseAccess.getEducation( username, token, clientid );
		
		if ( resultsList == null ) return null;
		Map<String, Object> r = resultsList.get(0);
		ArrayList<Object> fields = new ArrayList<Object>();
		for ( String field: DatabaseAccess.FLDS_EDUCATION) {
			field=field.substring(2);
			fields.add(r.get(field));
		}
		
		return new Education(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				(String)fields.get(5),
				(String)fields.get(6),
				(String)fields.get(7),
				(String)fields.get(8),
				(String)fields.get(9),
				(String)fields.get(10)
				);
	}


	public static Planning createPlanning() {
		HolidayPlan holPlan = new HolidayPlan("E", "E", "E", "E", "E", "E");
		GoalPlan goaPlan = new GoalPlan("E", "E", "E", "E", "E", "E");
		return new Planning( holPlan, goaPlan );
	}
	
	
	public static PersonalPlan createPersonalPlan(String username, String token, String clientid) {
		ClientDetails cd = createClientDetails();
		HealthDetails hd = createHealthDetails();
		SupportRequired sr = createSupportRequired();
		Communication com = createCommunication();
		EducationEmployment ee = createEducationEmployment(username, token, clientid);
		Planning plan = createPlanning();
		return new PersonalPlan( cd, hd, sr, com, ee, plan );
	}
}
