package qut.endeavour.rest.utility;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.plan.EducationEmployment;
import qut.endeavour.rest.bean.plan.educationemployment.Education;
import qut.endeavour.rest.bean.plan.educationemployment.Employment;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.storage.DatabaseNames;

public class PlanUtility {
	
	public static void storeEducationEmployment(
			EducationEmployment ee,
			String clientid
			) {

		try {
			
			List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
			writeJobs.addAll( prepareEducationEmployment( ee, clientid ) );
			DatabaseAccess.performSqlJobs(writeJobs);
			
		} catch (Exception e) {
			throw new DMSClientErrorException("Cannot write Education & Employment.");
		}
		
		
	}

	
	
	private static List<SqlWriteJob> prepareEducationEmployment( EducationEmployment ee, String clientid ) throws DMSException, SQLException {
		List<SqlWriteJob> writeJobs = new ArrayList<SqlWriteJob>();
		
		int userNumber = DatabaseAccess.getUserIdNumber( clientid );
		
		Education ed = ee.getEducation();
		Employment emp = ee.getEmployment();
		
		
		writeJobs.add( prepareEducation( ed, DatabaseNames.FLDS_EDUCATION, DatabaseNames.TBL_EDUCATION, userNumber) );
		writeJobs.add( prepareEmployment( emp, DatabaseNames.FLDS_EMPLOYMENT, DatabaseNames.TBL_EMPLOYMENT, userNumber) );
		
		return writeJobs;
	}
	
	private static SqlWriteJob prepareEmployment(
			Employment bean,
			List<String> fields,
			String tableName,
			int userNumber
			) throws DMSException {
		
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
		row.put("i*user_id", userNumber);
		
		List<Map<String,Object>> table = new ArrayList<Map<String,Object>>();
		table.add(row);
		
		Map<String, Object> key = new HashMap<String, Object>();
		key.put("i*user_id", userNumber);
		
		return new SqlWriteJob( tableName, key, table );
	}

	private static SqlWriteJob prepareEducation(
			Education ed,
			List<String> fields,
			String tableName,
			int userNumber
			) throws DMSException {
		
		Map<String, Object> row = new HashMap<String, Object>();
		
		row.put(fields.get(0), ed.getInstitutionName());
		row.put(fields.get(1), ed.getAddress());
		row.put(fields.get(2), ed.getEnrolledCourse());
		row.put(fields.get(3), ed.getContactPerson());
		row.put(fields.get(4), ed.getLiaison());
		row.put(fields.get(5), ed.getSupportPersons());
		row.put(fields.get(6), ed.getTeacher());
		row.put(fields.get(7), ed.getEduSupportPlan());
		row.put(fields.get(8), ed.getOtherSupportRequired());
		row.put(fields.get(9), ed.getCommunityAssistance());
		row.put(fields.get(10), ed.getStudySupport());
		row.put("i*user_id", userNumber);
		
		List<Map<String,Object>> table = new ArrayList<Map<String,Object>>();
		table.add(row);
		
		Map<String, Object> key = new HashMap<String, Object>();
		key.put("i*user_id", userNumber);
		
		return new SqlWriteJob( tableName, key, table );
		
	}
	
	
	
}
