package qut.endeavour.rest.utility;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import qut.endeavour.rest.bean.plan.EducationEmployment;
import qut.endeavour.rest.bean.plan.educationemployment.Education;
import qut.endeavour.rest.bean.plan.educationemployment.Employment;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.storage.DatabaseNames;

public class PlanUtility {
	
	public static void storeEducationEmployment(
			EducationEmployment bean
			) {
		
		int userNumber = 1; //TODO get user number.
		
		Education ed = bean.getEducation();
		Employment emp = bean.getEmployment();
		
		storeEducation( ed, DatabaseNames.FLDS_EDUCATION, DatabaseNames.TBL_EDUCATION, userNumber);
	}

	
	private static void storeEducation(
			Education ed,
			List<String> fldsEducation,
			String tblEducation,
			int userNumber
			) {
		
		Map<String, Object> row = new HashMap<String, Object>();
		
		row.put(fldsEducation.get(0), ed.getInstitutionName());
		row.put(fldsEducation.get(1), ed.getAddress());
		row.put(fldsEducation.get(2), ed.getEnrolledCourse());
		row.put(fldsEducation.get(3), ed.getContactPerson());
		row.put(fldsEducation.get(4), ed.getLiaison());
		row.put(fldsEducation.get(5), ed.getSupportPersons());
		row.put(fldsEducation.get(6), ed.getTeacher());
		row.put(fldsEducation.get(7), ed.getEduSupportPlan());
		row.put(fldsEducation.get(8), ed.getOtherSupportRequired());
		row.put(fldsEducation.get(9), ed.getCommunityAssistance());
		row.put(fldsEducation.get(10), ed.getStudySupport());
		row.put("i*user_id", userNumber);
		
		
		
	}
	
	
	
}
