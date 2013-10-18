package qut.endeavour.rest.factory;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.plan.ClientDetails;
import qut.endeavour.rest.bean.plan.Communication;
import qut.endeavour.rest.bean.plan.EducationEmployment;
import qut.endeavour.rest.bean.plan.HealthDetails;
import qut.endeavour.rest.bean.plan.PersonalPlan;
import qut.endeavour.rest.bean.plan.ExistingPlanDetails;
import qut.endeavour.rest.bean.plan.Planning;
import qut.endeavour.rest.bean.plan.SupportRequired;
import qut.endeavour.rest.bean.plan.clientdetails.AlertInformation;
import qut.endeavour.rest.bean.plan.clientdetails.FormalOrders;
import qut.endeavour.rest.bean.plan.clientdetails.LivingArrangements;
import qut.endeavour.rest.bean.plan.clientdetails.PersonalDetails;
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
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.exception.DMSNotFoundException;
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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_FORMAL_ORDERS,
				DatabaseNames.TBL_FORMAL_ORDERS
				);
		
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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_LIVING_ARRANGEMENTS,
				DatabaseNames.TBL_LIVING_ARRANGEMENTS
				);
		
		return new LivingArrangements(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(Integer)fields.get(4),
				(String)fields.get(5),
				(String)fields.get(6),
				(String)fields.get(7),
				(String)fields.get(8)
		);
	}




	private static AlertInformation createAlertInformation(String username,
			String token, String clientid) {

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_ALERT_INFO,
				DatabaseNames.TBL_ALERT_INFO
				);
		
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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_PERSONAL_DETAILS,
				DatabaseNames.TBL_PERSONAL_DETAILS
				);
		
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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_DIETARY,
				DatabaseNames.TBL_DIETARY
				);
		
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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_MANAGEMENT,
				DatabaseNames.TBL_MANAGEMENT
				);
		
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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_DISABILITY,
				DatabaseNames.TBL_DISABILITY
				);
		
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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_RELAXATION,
				DatabaseNames.TBL_RELAXATION
				);
		
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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_ACTIVITIES,
				DatabaseNames.TBL_ACTIVITIES
				);

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
				(String)fields.get(21)
				);
	}



	private static FinancialSupport createFinancialSupport(String username,
			String token, String clientid) {

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_FINANCIAL,
				DatabaseNames.TBL_FINANCIAL
				);

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

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_MOBILITY_TRANSPORT,
				DatabaseNames.TBL_MOBILITY_TRANSPORT
				);
		
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
		
		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_SUPPORT_GENERAL,
				DatabaseNames.TBL_SUPPORT_GENERAL
				);
	
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


	public static Communication createCommunication(String username, String token, String clientid) {
		
		//List<BadTopics> badTopics = PlanFactory.createBadTopics(username, token, clientid);
		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_COMMUNICATION,
				DatabaseNames.TBL_COMMUNICATION
				);
	
		ComsAndDecisionMaking coms = new ComsAndDecisionMaking(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				(String)fields.get(5),
				(String)fields.get(6),
				(String)fields.get(7),
				(String)fields.get(7)
				);
		
		return new Communication(coms);
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
		Employment emp = PlanFactory.createEmployment( username, token, clientid );
		return new EducationEmployment( cadm, emp );
	}
	
	
	private static Employment createEmployment(String username, String token,
			String clientid) {
		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_EMPLOYMENT,
				DatabaseNames.TBL_EMPLOYMENT
				);
		
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
		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_EDUCATION,
				DatabaseNames.TBL_EDUCATION
				);
		
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

	
	
	/**
	 * Get information from given table
	 * 
	 * @param username
	 * @param token
	 * @param clientid
	 * @param fieldNames
	 * @param tableNames
	 * @return
	 */
	private static List<Object> RetrieveFirstInfo(String username, String token, String clientid, List<String> fieldNames, String tableNames) {
		List<ArrayList<Object>> objects = RetrieveInfo(username, token, clientid, fieldNames, tableNames);
		if ( objects.size() < 1 ) return null;
		List<Object> fields = objects.get(0);
		if ( fields.size() != fieldNames.size() ) return null;
		return fields;
	}

	private static List<ArrayList<Object>> RetrieveInfo(String username, String token, String clientid, List<String> fieldNames, String tableNames) {
		List<Map<String, Object>> resultsList = DatabaseAccess.getTableContents( username, token, clientid, fieldNames, tableNames);
		List<ArrayList<Object>> rows = ProcessResults( resultsList, fieldNames );
		return rows;
	}
	
	public static Planning createPlanning(String username, String token, String clientid) {
		HolidayPlan holPlan = PlanFactory.createHolidayPlan(username, token, clientid);
		GoalPlan goaPlan = PlanFactory.createGoalPlan(username, token, clientid);
		return new Planning( holPlan, goaPlan );
	}
	
	private static GoalPlan createGoalPlan(String username, String token,
			String clientid) {
		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_GOAL,
				DatabaseNames.TBL_GOAL
				);
		
		return new GoalPlan(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				(String)fields.get(5)
				);
	}


	private static HolidayPlan createHolidayPlan(String username, String token,
			String clientid) {

		List<Object> fields = PlanFactory.RetrieveFirstInfo( username, token, clientid,
				DatabaseNames.FLDS_HOLIDAY,
				DatabaseNames.TBL_HOLIDAY
				);
		
		return new HolidayPlan(
				(String)fields.get(0),
				(String)fields.get(1),
				(String)fields.get(2),
				(String)fields.get(3),
				(String)fields.get(4),
				(String)fields.get(5)
				);
	}


	/**
	 * Get full personal plan. Drawn from database.
	 * @param username
	 * @param token
	 * @param clientid
	 * @return
	 */
	public static PersonalPlan createPersonalPlan(String username, String token, String clientid) {
		ClientDetails cd = createClientDetails(username, token, clientid);
		HealthDetails hd = createHealthDetails(username, token, clientid);
		SupportRequired sr = createSupportRequired(username, token, clientid);
		Communication com = createCommunication(username, token, clientid);
		EducationEmployment ee = createEducationEmployment(username, token, clientid);
		Planning plan = createPlanning(username, token, clientid);
		PersonalPlan pp = new PersonalPlan( cd, hd, sr, com, ee, plan );
		pp.setSignedOff( DatabaseAccess.isSignedOff(clientid) );
		return pp;
	}
	
	
	/**
	 * Work through results and generate values.
	 * @param resultsList
	 * @param columnNames
	 * @return
	 */
	private static List<ArrayList<Object>> ProcessResults(List<Map<String, Object>> resultsList, List<String> columnNames) {
		
		List<ArrayList<Object>> rows = new ArrayList<ArrayList<Object>>();
		
		if (resultsList == null) return rows;
		
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


	public static List<ExistingPlanDetails> createExistingPlanDetails(
			String username, String token) {
		// TODO Authenticate against roles.
		//if (!DatabaseAccess.validateUser(username, token)) throw new DMSClientErrorException("Not logged in.");
		
		List<ExistingPlanDetails> details = new ArrayList<ExistingPlanDetails>();
		
		String sql =
			"select ui.username, ui.name, d.dob, d.phoneno, d.mobileno "+
			"from user_info ui inner join client_personal_details d "+
			"on ui.user_id=d.user_id "+
			"order by creation_date desc;";
		
		
		try {
			PreparedStatement ps = DatabaseAccess.createPreparedStatement(sql);
			ResultSet rs = ps.executeQuery();
			
			while ( rs.next() ) {
				ExistingPlanDetails d = new ExistingPlanDetails();
				
				d.setUser_id(rs.getString("username"));
				d.setrName(rs.getString("name"));
				d.setDob(rs.getDate("dob").toString());
				d.setTelephone(rs.getString("phoneno"));
				d.setMobile(rs.getString("mobileno"));
				
				details.add(d);
				
			}
		} catch (SQLException e) {
			throw new DMSClientErrorException("Error getting personal plan list.");
		} catch (DMSException e) {
			throw new DMSClientErrorException(e.toString());
		}
		
		return details;
	}
}
