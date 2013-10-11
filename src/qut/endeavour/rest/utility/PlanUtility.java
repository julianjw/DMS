package qut.endeavour.rest.utility;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.plan.ClientDetails;
import qut.endeavour.rest.bean.plan.Communication;
import qut.endeavour.rest.bean.plan.EducationEmployment;
import qut.endeavour.rest.bean.plan.HealthDetails;
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
import qut.endeavour.rest.bean.plan.support.SupportServices;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.storage.DatabaseNames;

public class PlanUtility {
	
	/* DATABASE STORAGE */
	public static boolean storeBean(
			Object bean,
			String clientid,
			String username,
			String token
			) {
		
		{
			String role = DatabaseAccess.getRole(username, token);
			if ( !Permissions.canPostPersonalPlan(role) ) {
				System.out.println("A "+role.toUpperCase()+" cannot update/add a personal plan.");
				return false;
			}
		}
		//if ( )
		
		//System.out.println("About to check for bean class -" + bean.getClass().toString());
		try {
			List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
			
			if ( bean.getClass() == EducationEmployment.class ) writeJobs.addAll( prepareEducationEmployment( (EducationEmployment)bean, clientid ) );
			else if ( bean.getClass() == HealthDetails.class ) writeJobs.addAll( prepareHealthDetails( (HealthDetails)bean, clientid ) );
			else if ( bean.getClass() == Communication.class ) writeJobs.addAll( prepareCommunication( (Communication)bean, clientid ) );
			else if ( bean.getClass() == Planning.class ) writeJobs.addAll( preparePlanning( (Planning)bean, clientid ) );
			else if ( bean.getClass() == ClientDetails.class ) writeJobs.addAll( prepareClientDetails( (ClientDetails)bean, clientid ) );
			else if ( bean.getClass() == SupportRequired.class ) writeJobs.addAll( prepareSupportRequired( (SupportRequired)bean, clientid ) );
			
			else {
				System.out.println("Cannot handle class: " + bean.getClass().toString());
				return false;
			}
			
			//System.out.println("Found container bean.");
			DatabaseAccess.performSqlJobs(writeJobs);
			
		} catch (Exception e) {
			System.out.println(e);
			return false;
			//throw new DMSClientErrorException("Cannot write Education & Employment.");
		}
		
		return true;
	}
	
	/* PREPARATION OF BASES */
	private static SqlWriteJob prepareBase(
			Object bean,
			List<String> fields,
			String tableName,
			int userNumber
			) throws DMSException {
		
		System.out.println("*userIDNumber=** " + userNumber);
		
		Map<String, Object> row = null;
		Map<String, Object> key = new HashMap<String, Object>();
		key.put("i*user_id", userNumber);
		
		// education & employment
		if ( bean.getClass() == Employment.class ) row = prepareEmployment((Employment)bean, fields);
		else if ( bean.getClass() == Education.class ) row = prepareEducation((Education)bean, fields);
		
		// health details
		else if ( bean.getClass() == HealthDietary.class ) row = prepareHealthDietary((HealthDietary)bean, fields);
		else if ( bean.getClass() == HealthInformation.class ) row = prepareHealthInformation((HealthInformation)bean, fields);
		else if ( bean.getClass() == HealthManagement.class ) row = prepareHealthManagement((HealthManagement)bean, fields);
		
		// communication
		else if ( bean.getClass() == ComsAndDecisionMaking.class ) row = prepareComsAndDecisionMaking((ComsAndDecisionMaking)bean, fields);
		
		// planning
		else if ( bean.getClass() == GoalPlan.class ) row = prepareGoalPlan((GoalPlan)bean, fields);
		else if ( bean.getClass() == HolidayPlan.class ) row = prepareHolidayPlan((HolidayPlan)bean, fields);
		
		// client details
		else if ( bean.getClass() == AlertInformation.class ) row = prepareAlertInformation((AlertInformation)bean, fields);
		else if ( bean.getClass() == FormalOrders.class ) row = prepareFormalOrders((FormalOrders)bean, fields);
		else if ( bean.getClass() == LivingArrangements.class ) row = prepareLivingArrangements((LivingArrangements)bean, fields);
		else if ( bean.getClass() == PersonalDetails.class ) row = preparePersonalDetails((PersonalDetails)bean, fields);
		//TODO contact details
		
		// Support
		else if ( bean.getClass() == DailyActivities.class ) row = prepareDailyActivities((DailyActivities)bean, fields);
		else if ( bean.getClass() == FinancialSupport.class ) row = prepareFinancialSupport((FinancialSupport)bean, fields);
		else if ( bean.getClass() == GeneralSupport.class ) row = prepareGeneralSupport((GeneralSupport)bean, fields);
		else if ( bean.getClass() == MobilityAndTransport.class ) row = prepareMobilityAndTransport((MobilityAndTransport)bean, fields);
		else if ( bean.getClass() == Relaxation.class ) row = prepareRelaxation((Relaxation)bean, fields);
		//TODO Support Services
		
		// not found
		else throw new DMSException("Cannot find sub-class:" + bean.getClass().toString());
		
		//System.out.println("Found sub-bean.");
		
		row.putAll(key);
		List<Map<String,Object>> table = new ArrayList<Map<String,Object>>();
		table.add(row);
		
		return new SqlWriteJob( tableName, key, table );
	}
	
	
	
	
	
	
	/* PREPARATION OF ROOT BEANS */
	
	private static List<SqlWriteJob> prepareSupportRequired(
			SupportRequired bean, String clientid) throws DMSException, SQLException {
		List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
		writeJobs.add( prepareBase( bean.getDailyActivities(), DatabaseNames.FLDS_ACTIVITIES, DatabaseNames.TBL_ACTIVITIES, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getFinancialSupport(), DatabaseNames.FLDS_FINANCIAL, DatabaseNames.TBL_FINANCIAL, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getGeneralSupport(), DatabaseNames.FLDS_SUPPORT_GENERAL, DatabaseNames.TBL_SUPPORT_GENERAL, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getMobilityAndTransport(), DatabaseNames.FLDS_MOBILITY_TRANSPORT, DatabaseNames.TBL_MOBILITY_TRANSPORT, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getRelaxation(), DatabaseNames.FLDS_RELAXATION, DatabaseNames.TBL_RELAXATION, DatabaseAccess.getUserIdNumber(clientid)));
		return writeJobs;
	}
	
	
	private static List<SqlWriteJob> prepareClientDetails(
			ClientDetails bean, String clientid) throws DMSException, SQLException {
		List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
		writeJobs.add( prepareBase( bean.getAlertInformation(), DatabaseNames.FLDS_ALERT_INFO, DatabaseNames.TBL_ALERT_INFO, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getFormalOrders(), DatabaseNames.FLDS_FORMAL_ORDERS, DatabaseNames.TBL_FORMAL_ORDERS, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getLivingArangements(), DatabaseNames.FLDS_LIVING_ARRANGEMENTS, DatabaseNames.TBL_LIVING_ARRANGEMENTS, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getPersonalDetails(), DatabaseNames.FLDS_PERSONAL_DETAILS, DatabaseNames.TBL_PERSONAL_DETAILS, DatabaseAccess.getUserIdNumber(clientid)));
		return writeJobs;
	}
	
	private static List<SqlWriteJob> preparePlanning(
			Planning bean, String clientid) throws DMSException, SQLException {
		List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
		writeJobs.add( prepareBase( bean.getGoalPlan(), DatabaseNames.FLDS_GOAL, DatabaseNames.TBL_GOAL, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getHolidayPlan(), DatabaseNames.FLDS_HOLIDAY, DatabaseNames.TBL_HOLIDAY, DatabaseAccess.getUserIdNumber(clientid)));
		return writeJobs;
	}
	
	private static List<SqlWriteJob> prepareCommunication( Communication bean, String clientid) throws DMSException, SQLException {
		List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
		writeJobs.add( prepareBase( bean.getComsAndDecisionMaking(), DatabaseNames.FLDS_COMMUNICATION, DatabaseNames.TBL_COMMUNICATION, DatabaseAccess.getUserIdNumber(clientid)));
		//TODO bad topics
		return writeJobs;
	}
	
	private static List<SqlWriteJob> prepareEducationEmployment( EducationEmployment bean, String clientid ) throws DMSException, SQLException {
		List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
		writeJobs.add( prepareBase( bean.getEducation(), DatabaseNames.FLDS_EDUCATION, DatabaseNames.TBL_EDUCATION, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getEmployment(), DatabaseNames.FLDS_EMPLOYMENT, DatabaseNames.TBL_EMPLOYMENT, DatabaseAccess.getUserIdNumber(clientid)));
		return writeJobs;
	}
	
	private static List<SqlWriteJob> prepareHealthDetails( HealthDetails bean, String clientid ) throws DMSException, SQLException {
		List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
		writeJobs.add( prepareBase( bean.getDietaryRequirements(), DatabaseNames.FLDS_DIETARY, DatabaseNames.TBL_DIETARY, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getHealthManagement(), DatabaseNames.FLDS_MANAGEMENT, DatabaseNames.TBL_MANAGEMENT, DatabaseAccess.getUserIdNumber(clientid)));
		writeJobs.add( prepareBase( bean.getHealthInformation(), DatabaseNames.FLDS_DISABILITY, DatabaseNames.TBL_DISABILITY, DatabaseAccess.getUserIdNumber(clientid)));
		return writeJobs;
	}

	
	
	

	
	
	/* ALLOCATING FIELDS AND VALUES */
	
	private static Map<String, Object> prepareEmployment(Employment bean,
			List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getEmployer());
		row.put(fields.get(1), bean.getAddress());
		row.put(fields.get(2), bean.getContactPerson());
		row.put(fields.get(3), bean.getPosition());
		row.put(fields.get(4), bean.getArrangements());
		row.put(fields.get(5), bean.getTransport());
		row.put(fields.get(6), bean.getAnnualLeave());
		row.put(fields.get(7), bean.getSickLeave());
		row.put(fields.get(8), bean.getEquipment());
		return row;
	}

	private static Map<String, Object> prepareEducation( Education bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getInstitutionName());
		row.put(fields.get(1), bean.getAddress());
		row.put(fields.get(2), bean.getEnrolledCourse());
		row.put(fields.get(3), bean.getContactPerson());
		row.put(fields.get(4), bean.getLiaison());
		row.put(fields.get(5), bean.getSupportPersons());
		row.put(fields.get(6), bean.getTeacher());
		row.put(fields.get(7), bean.getEduSupportPlan());
		row.put(fields.get(8), bean.getOtherSupportRequired());
		row.put(fields.get(9), bean.getCommunityAssistance());
		row.put(fields.get(10), bean.getStudySupport());
		return row;
	}
	
	private static Map<String, Object> prepareHealthManagement( HealthManagement bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getMedicalCondition());
		row.put(fields.get(1), bean.getSymptom());
		row.put(fields.get(2), bean.getPrecurser());
		row.put(fields.get(3), bean.getDuration());
		row.put(fields.get(4), bean.getFrequency());
		row.put(fields.get(5), DatabaseAccess.getPeriodByName(bean.getFrequencyPeriod())); // integer
		row.put(fields.get(6), bean.getStaffResponse());
		row.put(fields.get(7), bean.getSymptomAvoidance());
		row.put(fields.get(8), bean.getSeizureBrief());
		row.put(fields.get(9), bean.getSeizureNonBrief());
		return row;
	}

	private static Map<String, Object> prepareHealthInformation( HealthInformation bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getHistoryAndInfo());
		row.put(fields.get(1), bean.getConditions());
		row.put(fields.get(2), bean.isTakeMedication());
		row.put(fields.get(3), bean.isAssistanceWithMedication());
		row.put(fields.get(4), bean.isSelfMedicate());
		row.put(fields.get(5), bean.getAllMedicalInfo());
		row.put(fields.get(6), bean.getAdditionalInfo());
		return row;
	}

	private static Map<String, Object> prepareHealthDietary(HealthDietary bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getCannotEat());
		row.put(fields.get(1), bean.getAvoidFood());
		row.put(fields.get(2), bean.isAssessmentDone());
		row.put(fields.get(3), bean.getUsualDiet());
		row.put(fields.get(4), bean.getSnacks());
		row.put(fields.get(5), bean.getDislikes());
		row.put(fields.get(6), bean.getBreakfast());
		row.put(fields.get(7), bean.getLunch());
		row.put(fields.get(8), bean.getDinner());
		row.put(fields.get(9), bean.getSupportDrinking());
		row.put(fields.get(10), bean.getEatingSupport());
		row.put(fields.get(11), bean.getOtherInfo());
		row.put(fields.get(12), bean.getLocation());
		return row;
	}

	private static Map<String, Object> prepareComsAndDecisionMaking(ComsAndDecisionMaking bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getiCommunicate());
		row.put(fields.get(1), bean.getYouCommunicate());
		row.put(fields.get(2), bean.getSupportPeople());
		row.put(fields.get(3), bean.getSupportMeBy());
		row.put(fields.get(4), bean.getIndependantDecisions());
		row.put(fields.get(5), bean.getGoodTopics());
		row.put(fields.get(6), bean.getLikes());
		row.put(fields.get(7), bean.getDislikes());
		return row;
	}

	private static Map<String, Object> prepareGoalPlan(GoalPlan bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getGoalToAchieve());
		row.put(fields.get(1), bean.getStrategies());
		row.put(fields.get(2), bean.getHowWhoWhere());
		row.put(fields.get(3), bean.getTimeframes());
		row.put(fields.get(4), bean.getOutcomes());
		row.put(fields.get(5), bean.getResourcesRequired());
		return row;
	}

	private static Map<String, Object> prepareHolidayPlan(HolidayPlan bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getHolidayType());
		row.put(fields.get(1), bean.getStrategies());
		row.put(fields.get(2), bean.getHowWhoWhere());
		row.put(fields.get(3), bean.getTimeframes());
		row.put(fields.get(4), bean.getDetailsAndInfo());
		row.put(fields.get(5), bean.getResourcesRequired());
		return row;
	}

	private static Map<String, Object> prepareAlertInformation(AlertInformation bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getAllergies());
		row.put(fields.get(1), bean.getMedIssues());
		row.put(fields.get(2), bean.getEatingAlerts());
		row.put(fields.get(3), bean.getSafetyConcerns());
		row.put(fields.get(4), bean.getRestrictive());
		row.put(fields.get(5), bean.getGuardianOrders());
		row.put(fields.get(6), bean.getComplexSupportNeeds());
		row.put(fields.get(7), bean.getPhobias());
		row.put(fields.get(8), bean.getOtherInfo());
		return row;
	}

	private static Map<String, Object> prepareFormalOrders(FormalOrders bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getOrderFor());
		row.put(fields.get(1), bean.getAppointee());
		row.put(fields.get(2), bean.getDetails());
		row.put(fields.get(3), bean.getOrderLocation());
		row.put(fields.get(4), bean.getOtherInfo());
		row.put(fields.get(5), bean.getChildSupportOfficer());
		row.put(fields.get(6), bean.getVisitorInfo());
		row.put(fields.get(7), bean.getProtectionOrder());
		row.put(fields.get(8), bean.getCommenceDate());
		row.put(fields.get(9), bean.getJusticeRequirements());
		row.put(fields.get(10), bean.getFamilyContact());
		row.put(fields.get(11), bean.getContactArrangement());
		row.put(fields.get(12), bean.getSpecialConditions());
		return row;
	}

	private static Map<String, Object> prepareLivingArrangements(LivingArrangements bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getService());
		row.put(fields.get(1), bean.getStreet());
		row.put(fields.get(2), bean.getHouseNumber());
		row.put(fields.get(3), bean.getSuburb());
		row.put(fields.get(4), bean.getPostCode());
		row.put(fields.get(5), bean.getCity());
		return row;
	}

	private static Map<String, Object> preparePersonalDetails(PersonalDetails bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getPreferredName());
		row.put(fields.get(1), bean.getDob());
		row.put(fields.get(2), bean.getPhoneNumber());
		row.put(fields.get(3), bean.getMobileNumber());
		row.put(fields.get(4), bean.getEmail());
		row.put(fields.get(5), bean.getCreationDate());
		row.put(fields.get(6), bean.getReviewDate());
		return row;
	}

	private static Map<String, Object> prepareDailyActivities(DailyActivities bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getSleeping());
		row.put(fields.get(1), bean.getBedTime());
		row.put(fields.get(2), bean.getBathing());
		row.put(fields.get(3), bean.getDressing());
		row.put(fields.get(4), bean.getToileting());
		row.put(fields.get(5), bean.getMenstruation());
		row.put(fields.get(6), bean.getCooking());
		row.put(fields.get(7), bean.getCleaning());
		row.put(fields.get(8), bean.getMonday());
		row.put(fields.get(9), bean.getTuesday());
		row.put(fields.get(10), bean.getWednesday());
		row.put(fields.get(11), bean.getThursday());
		row.put(fields.get(12), bean.getFriday());
		row.put(fields.get(13), bean.getSaturday());
		row.put(fields.get(14), bean.getSunday());
		row.put(fields.get(15), bean.getOtherThings());
		row.put(fields.get(16), bean.getRoutineMorning());
		row.put(fields.get(17), bean.getRoutineMealTime());
		row.put(fields.get(18), bean.getRoutineAfternoon());
		row.put(fields.get(19), bean.getRoutineSleeping());
		row.put(fields.get(20), bean.getRoutineWeekend());
		return row;
	}

	private static Map<String, Object> prepareFinancialSupport(FinancialSupport bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getFinancialAdmin());
		row.put(fields.get(1), bean.getBudgetExpend());
		row.put(fields.get(2), bean.getBudgetConstraintGoal());
		row.put(fields.get(3), bean.getPersonalItemsSupport());
		row.put(fields.get(4), bean.getBudgetTransport());
		row.put(fields.get(5), bean.getMoneyHandlingSupport());
		row.put(fields.get(6), bean.getBudgetSupportNetwork());
		row.put(fields.get(7), bean.getBudgetGroceries());
		row.put(fields.get(8), bean.getBudgetHouse());
		row.put(fields.get(9), bean.getBudgetUtilities());
		row.put(fields.get(10), bean.getBudgetBills());
		row.put(fields.get(11), bean.getBudgetEmergency());
		row.put(fields.get(12), bean.getBudgetSupportNetwork());
		row.put(fields.get(13), bean.getOtherRequirements());
		return row;
	}

	private static Map<String, Object> prepareGeneralSupport(GeneralSupport bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getCrowdSafety());
		row.put(fields.get(1), bean.getStrangerDanger());
		row.put(fields.get(2), bean.getMoneyHandling());
		row.put(fields.get(3), bean.getCrowds());
		row.put(fields.get(4), bean.getSocialNetworks());
		row.put(fields.get(5), bean.getCommunications());
		row.put(fields.get(6), bean.getEatingOut());
		row.put(fields.get(7), bean.getBeliefs());
		row.put(fields.get(8), bean.getLeisure());
		row.put(fields.get(9), bean.getUsingApplicances());
		row.put(fields.get(10), bean.getUsingChemical());
		row.put(fields.get(11), bean.getHazardRecognition());
		row.put(fields.get(12), bean.getOtherSafetyInfo());
		return row;
	}

	private static Map<String, Object> prepareMobilityAndTransport(MobilityAndTransport bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getLiftsAndEscalators());
		row.put(fields.get(1), bean.getUnevenSurfaces());
		row.put(fields.get(2), bean.getHeight());
		row.put(fields.get(3), bean.getMobilityAids());
		row.put(fields.get(4), bean.getRoadSafetySkills());
		row.put(fields.get(5), bean.getPublicTransport());
		row.put(fields.get(6), bean.getTravelPreferences());
		row.put(fields.get(7), bean.getOtherTravelSupport());
		return row;
	}

	private static Map<String, Object> prepareRelaxation(Relaxation bean, List<String> fields) {
		Map<String, Object> row = new HashMap<String, Object>();
		row.put(fields.get(0), bean.getActivities());
		row.put(fields.get(1), bean.getMusic());
		row.put(fields.get(2), bean.getMovie());
		row.put(fields.get(3), bean.gettVShow());
		row.put(fields.get(4), bean.getOtherActivities());
		return row;
	}
	
	
	
	
	
}
