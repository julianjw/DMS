package qut.endeavour.rest.factory;

import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.risk.RiskAssessment;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.storage.DatabaseNames;
import qut.endeavour.rest.utility.Permissions;

public class RiskFactory {

	//public static List<ClientRisks> createUpcomingMeetings(String username,
	//		String token)  {
		/*
		String userRole = DatabaseAccess.getRole(username, token);
		if (!Permissions.canGetUpcomingMeetings( userRole) )  throw new DMSClientErrorException("User with role " + userRole.toUpperCase() + " cannot see upcoming meetings.");
		
		List<UpcomingMeeting> upcomingMeetings = new ArrayList<UpcomingMeeting>();
		
		//TODO Get rid of hard-coding	
		String sql = "SELECT ui.name, ui.username, sm.meeting_date FROM  `scheduled_meeting` sm NATURAL JOIN  `user_info` ui ORDER BY sm.meeting_date DESC;";
		
		try {
			PreparedStatement ps = DatabaseAccess.createPreparedStatement(sql);
			ResultSet results = ps.executeQuery();
			
			while ( results.next() ) {
				UpcomingMeeting m = new UpcomingMeeting();
				
				m.setrName(results.getString(1));
				m.setUsername(results.getString(2));
				m.setDate(results.getDate(3).toString());
				
				upcomingMeetings.add(m);
			}
		} catch ( SQLException se ) {
			se.printStackTrace();
			throw new DMSClientErrorException("Error getting meetings from database");
		} catch ( DMSException de ) {
			de.printStackTrace();
			throw new DMSClientErrorException("Error getting meetings from database");
		}
		
		return upcomingMeetings;*/
	//}

	/*
	 * Get a meeting's details
	 */
	public static RiskAssessment createRiskAssessment(
			String username,
			String token,
			Integer riskid
			) {

		String userRole = DatabaseAccess.getRole(username, token);
		
		// verify user is allowed to do action
		if (!Permissions.canGetRiskAssessment(userRole)) throw new DMSClientErrorException("User with role " + userRole.toUpperCase() + " cannot view risk assessments.");
	 
		List<Object> fields = RiskFactory.getFields(
				riskid,
				DatabaseNames.FLDS_RISK_ASSESSMENT,
				DatabaseNames.TBL_RISK_ASSESSMENT
				);
		
		String clientLoginName = "";
		try {
			clientLoginName = DatabaseAccess.getUsernameByIdNumber( (Integer)fields.get(1) );
		} catch (DMSException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return new RiskAssessment(
				(Integer)fields.get(0),
				clientLoginName,
				(String)fields.get(2),
				(String)fields.get(3),
				((Date)fields.get(4)).toString(),
				(String)fields.get(5),
				(Integer)fields.get(6),
				(Integer)fields.get(7),
				(Integer)fields.get(8),
				(String)fields.get(9),
				((Date)fields.get(10)).toString(),
				(Boolean)fields.get(11),
				(String)fields.get(12),
				((Date)fields.get(13)).toString(),
				(String)fields.get(14),
				((Date)fields.get(15)).toString()
				);
	}

	
	
	private static List<Object> getFields(int riskid, List<String> fieldNames, String tableNames) {

		List<Map<String, Object>> resultsList = DatabaseAccess.getTableContents( riskid, fieldNames, tableNames);
		List<ArrayList<Object>> rows = processResults( resultsList, fieldNames );

		if ( rows.size() < 1 ) return null;
		List<Object> fields = rows.get(0);
		if ( fields.size() != fieldNames.size() ) return null;
		return fields;
	}

	
	private static List<ArrayList<Object>> processResults(List<Map<String, Object>> resultsList, List<String> columnNames) {
		
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
	
//	private static List<Object> getFields( String clientid, List<String> columns, String tableName){
//		List<ArrayList<Object>> objects = 
//		if ( objects.size() < 1 ) return null;
//		List<Object> fields = objects.get(0);
//		if ( fields.size() != fieldNames.size() ) return null;
//		return fields;
//	}
//	
//
//	//perform action
//	List<Map<String, Object>> resultsList = DatabaseAccess.getTableContents( clientid, fieldNames, tableNames);
//	List<ArrayList<Object>> rows = ProcessResults( resultsList, fieldNames );
//	
}
