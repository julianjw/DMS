package qut.endeavour.rest.factory;

import java.sql.Date;
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
import qut.endeavour.rest.storage.DatabaseNames;

public class PlanFactory {
	/**
	 * Make client details. Drawn from database.
	 * @param username
	 * @param token
	 * @param clientid
	 * @return
	 */
	public static ClientDetails createClientDetails( String username, String token, String clientid) {
		
		PersonalDetails pd = PlanFactory.createPersonalDetails( username, token, clientid );
		if ( pd == null ) pd = new PersonalDetails();
		
		AlertInformation ai = PlanFactory.createAlertInformation( username, token, clientid );
		if ( ai == null ) ai = new AlertInformation();

		LivingArrangements la = PlanFactory.createLivingArrangements( username, token, clientid );
		if ( la == null ) la = new LivingArrangements();
		
		FormalOrders fo = PlanFactory.createFormalOrders( username, token, clientid );
		if ( fo == null ) fo = new FormalOrders();
		
		return new ClientDetails( pd, ai, la, fo );
	}
	

	/**
	 * Pull formal orders from database, turn them into a FormalOrders object.
	 * @param username
	 * @param token
	 * @param clientid
	 * @return
	 */
	private static FormalOrders createFormalOrders(String username,
			String token, String clientid) {
		
		List<Map<String, Object>> resultsList = DatabaseAccess.getFormalOrders( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_FORMAL_ORDERS );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_FORMAL_ORDERS.size() ) return null; // some problem chopping up data from database.
		
		return new FormalOrders(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				(String)fields.get(5),
				(String)fields.get(6),
				(String)fields.get(7),
				((Date)fields.get(8)).toString(),
				(String)fields.get(9),
				(String)fields.get(10),
				(String)fields.get(11),
				(String)fields.get(12)
				);
	}

	private static LivingArrangements createLivingArrangements(String username,
			String token, String clientid) {
		
		List<Map<String, Object>> resultsList = DatabaseAccess.getLivingArrangements( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_LIVING_ARRANGEMENTS );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_LIVING_ARRANGEMENTS.size() ) return null; // some problem chopping up data from database.
		
		List<ContactDetails> allContacts = PlanFactory.createContactDetails( username, token, clientid );
		
		if ( allContacts == null ) allContacts = new ArrayList<ContactDetails>();
		
		// divide the contacts up into their groups.
		List<ContactDetails> fContact = new ArrayList<ContactDetails>();
		List<ContactDetails> eContact = new ArrayList<ContactDetails>();
		List<ContactDetails> iContact = new ArrayList<ContactDetails>();
		
		for ( ContactDetails cd : allContacts ) {
			
			switch (cd.contactType) {
			case "Family Member" :
				fContact.add(cd);
				break;
				
			case "Emergency Contact" :
				eContact.add(cd);
				break;
				
			case "Important Person" :
				iContact.add(cd);
				break;
			}
		}
		
		return new LivingArrangements(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(Integer)fields.get(4),
				(String)fields.get(5),
				fContact,
				eContact,
				iContact
		);
	}


	

	/**
	 * Pull contacts from database 
	 * 
	 * @param username
	 * @param token
	 * @param clientid
	 * @param contactType
	 * @return
	 */
	private static List<ContactDetails> createContactDetails(String username,
			String token, String clientid ) {
		
		// get results
		List<Map<String, Object>> resultsList = DatabaseAccess.getContactDetails( username, token, clientid );
		if ( resultsList == null ) return null;
		
		// get field names
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_CLIENT_CONTACTS );
		if ( rows.get(0).size() != DatabaseNames.FLDS_CLIENT_CONTACTS.size() ) return null; // some problem chopping up data from database.
		
		List<ContactDetails> allContacts = new ArrayList<ContactDetails>();
		
		// put all results into a list of clients
		for ( List<Object> row : rows ) {
			allContacts.add(
				new ContactDetails ( 
						(String)row.get(0),
						(String)row.get(1),
						(String)row.get(2),
						DatabaseAccess.getContactTypeById((Integer)row.get(3))
						)
				);
		}
		return allContacts;
	}


	private static AlertInformation createAlertInformation(String username,
			String token, String clientid) {
		
		List<Map<String, Object>> resultsList = DatabaseAccess.getAlertInformation( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_ALERT_INFO );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_ALERT_INFO.size() ) return null; // some problem chopping up data from database.
		
		return new AlertInformation(
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


	private static PersonalDetails createPersonalDetails(String username,
			String token, String clientid) {
		
		List<Map<String, Object>> resultsList = DatabaseAccess.getPersonalDetails( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_PERSONAL_DETAILS );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_PERSONAL_DETAILS.size() ) return null; // some problem chopping up data from database.
		
		return new PersonalDetails(
				(String)fields.get(0),
				((Date)fields.get(1)).toString(),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				((Date)fields.get(5)).toString(),
				((Date)fields.get(6)).toString()
				);
	}


	public static HealthDetails createHealthDetails(String username, String token, String clientid) {
		HealthInformation hi = PlanFactory.createHealthInformation( username, token, clientid );
		HealthManagement hm = PlanFactory.createHealthManagement( username, token, clientid );
		HealthDietary dr = PlanFactory.createHealthDietary( username, token, clientid );
		return new HealthDetails(hi, hm, dr);
		
	}
	
	
	private static HealthDietary createHealthDietary(String username,
			String token, String clientid) {

		List<Map<String, Object>> resultsList = DatabaseAccess.getHealthDietary(username, token, clientid);
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_DIETARY );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_DIETARY.size() ) return null; // some problem chopping up data from database.
		
		return new HealthDietary(
				(String)fields.get(0),
				(String)fields.get(1),
				(Boolean)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				(String)fields.get(5),
				(String)fields.get(6),
				(String)fields.get(7),
				(String)fields.get(8),
				(String)fields.get(9),
				(String)fields.get(10),
				(String)fields.get(11),
				(String)fields.get(12)
				);
	}


	private static HealthManagement createHealthManagement(String username,
			String token, String clientid) {
		
		List<Map<String, Object>> resultsList = DatabaseAccess.getHealthManagement( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_MANAGEMENT );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_MANAGEMENT.size() ) return null; // some problem chopping up data from database.
		
		
		
		return new HealthManagement(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(Integer)fields.get(4),
				DatabaseAccess.getPeriodById((Integer)fields.get(5)), // feed integer in and get string back
				(String)fields.get(6),
				(String)fields.get(7),
				(String)fields.get(8),
				(String)fields.get(9)
				);
	}


	private static HealthInformation createHealthInformation(String username,
			String token, String clientid) {
		
		List<Map<String, Object>> resultsList = DatabaseAccess.getHealthDisability( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_DISABILITY );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_DISABILITY.size() ) return null; // some problem chopping up data from database.

		
		return new HealthInformation(
				(String)fields.get(0),
				(String)fields.get(1),
				(Boolean)fields.get(2),
				(Boolean)fields.get(3),
				(Boolean)fields.get(4),
				(String)fields.get(5),
				(String)fields.get(6)
				);
	}


	public static SupportRequired createSupportRequired(String username,
			String token, String clientid){
		GeneralSupport gs = PlanFactory.createGeneralSupport( username, token, clientid );
		MobilityAndTransport mat = PlanFactory.createMobilityAndTransport( username, token, clientid );
		FinancialSupport finsup = PlanFactory.createFinancialSupport( username, token, clientid );
		DailyActivities dailyact = PlanFactory.createDailyActivities( username, token, clientid );
		Relaxation relax = PlanFactory.createRelaxation( username, token, clientid );
		return new SupportRequired(gs, mat, finsup, dailyact, relax);
	}
	
	
	private static Relaxation createRelaxation(String username, String token,
			String clientid) {

		List<Map<String, Object>> resultsList = DatabaseAccess.getRelaxation( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_RELAXATION );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_RELAXATION.size() ) return null; // some problem chopping up data from database.

		return new Relaxation(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4)
				);
	}


	private static DailyActivities createDailyActivities(String username,
			String token, String clientid) {
		
		List<String> services = PlanFactory.createServices( username, token, clientid );

		List<Map<String, Object>> resultsList = DatabaseAccess.getDailyActivities( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_ACTIVITIES );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_ACTIVITIES.size() ) return null; // some problem chopping up data from database.

		return new DailyActivities(
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
				(String)fields.get(10),
				(String)fields.get(11),
				(String)fields.get(12),
				(String)fields.get(13),
				(String)fields.get(14),
				(String)fields.get(15),
				(String)fields.get(16),
				(String)fields.get(17),
				(String)fields.get(18),
				(String)fields.get(19),
				(String)fields.get(20),
				services
				);
	}


	private static List<String> createServices(String username, String token,
			String clientid) {

		List<Map<String, Object>> resultsList = DatabaseAccess.getSupportServices( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_SUPPORT_SERVICES );
		if ( rows.get(0).size() != DatabaseNames.FLDS_SUPPORT_SERVICES.size() ) return null; // some problem chopping up data from database.
		
		List<String> allServices = new ArrayList<String>();
		for ( ArrayList<Object> row : rows ) {
			if ( row == null ) return null;
			allServices.add((String)row.get(0));
		}
		return allServices;
	}


	private static FinancialSupport createFinancialSupport(String username,
			String token, String clientid) {

		List<Map<String, Object>> resultsList = DatabaseAccess.getFinancialSupport( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_FINANCIAL );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_FINANCIAL.size() ) return null; // some problem chopping up data from database.

		return new FinancialSupport(
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
				(String)fields.get(10),
				(String)fields.get(11),
				(String)fields.get(12),
				(String)fields.get(13)
				);
	}


	private static MobilityAndTransport createMobilityAndTransport(
			String username, String token, String clientid) {

		List<Map<String, Object>> resultsList = DatabaseAccess.getMobilityAndTransport( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_MOBILITY_TRANSPORT );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_MOBILITY_TRANSPORT.size() ) return null; // some problem chopping up data from database.

		return new MobilityAndTransport(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				(String)fields.get(5),
				(String)fields.get(6),
				(String)fields.get(7)
				);
	}


	private static GeneralSupport createGeneralSupport(String username,
			String token, String clientid) {

		List<Map<String, Object>> resultsList = DatabaseAccess.getGeneralSupport( username, token, clientid );
		if ( resultsList == null ) return null;
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_SUPPORT_GENERAL );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_SUPPORT_GENERAL.size() ) return null; // some problem chopping up data from database.

		return new GeneralSupport(
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
				(String)fields.get(10),
				(String)fields.get(11),
				(String)fields.get(12)
				);
	}


	public static Communication createCommunication() { // TODO Communiation
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

		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_EMPLOYMENT );
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_EMPLOYMENT.size() ) return null; // some problem chopping up data from database.
		
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
		
		
		List<ArrayList<Object>> rows = ProcessResults( resultsList, DatabaseNames.FLDS_EDUCATION );
		if ( rows.size() < 1 ) return null;
		List<Object> fields = rows.get(0);
		if ( fields.size() != DatabaseNames.FLDS_EDUCATION.size() ) return null; // some problem chopping up data from database.
		
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


	public static Planning createPlanning() { // TODO Planning
		HolidayPlan holPlan = new HolidayPlan("E", "E", "E", "E", "E", "E");
		GoalPlan goaPlan = new GoalPlan("E", "E", "E", "E", "E", "E");
		return new Planning( holPlan, goaPlan );
	}
	
	/**
	 * Get full personal plan. Drawn from database.
	 * @param username
	 * @param token
	 * @param clientid
	 * @return
	 */
	public static PersonalPlan createPersonalPlan(String username, String token, String clientid) { // TODO Personal Plan
		ClientDetails cd = createClientDetails(username, token, clientid);
		HealthDetails hd = createHealthDetails(username, token, clientid);
		SupportRequired sr = createSupportRequired(username, token, clientid);
		Communication com = createCommunication();
		EducationEmployment ee = createEducationEmployment(username, token, clientid);
		Planning plan = createPlanning();
		return new PersonalPlan( cd, hd, sr, com, ee, plan );
	}
	
	
	/**
	 * Work through results and generate values.
	 * @param resultsList
	 * @param columnNames
	 * @return
	 */
	private static List<ArrayList<Object>> ProcessResults(List<Map<String, Object>> resultsList, List<String> columnNames) {
		
		List<ArrayList<Object>> rows = new ArrayList<ArrayList<Object>>();
		
		for ( Map<String, Object> result : resultsList) {
			ArrayList<Object> row = new ArrayList<Object>();
			for ( String columnName: columnNames ) {
				columnName=columnName.substring(2);
				row.add( result.get(columnName) );
			}
			rows.add(row);
		}
		return rows;
	}
}
