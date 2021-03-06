package qut.endeavour.rest.factory;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.meeting.ScheduledMeeting;
import qut.endeavour.rest.bean.meeting.UpcomingMeeting;
import qut.endeavour.rest.bean.plan.educationemployment.Education;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.storage.DatabaseNames;
import qut.endeavour.rest.utility.Permissions;

public class MeetingFactory {

	public static List<UpcomingMeeting> createUpcomingMeetings(String username,
			String token)  {
		
		
		List<UpcomingMeeting> upcomingMeetings = new ArrayList<UpcomingMeeting>();

		// TODO refactor hard coding
		String sql = "SELECT ui.name, ui.username, sm.meeting_date FROM  `scheduled_meeting` sm NATURAL JOIN  `user_info` ui ORDER BY sm.meeting_date DESC;";
		
		try {
			PreparedStatement ps = DatabaseAccess.createPreparedStatement(sql);
			ResultSet results = ps.executeQuery();
			
			while ( results.next() ) {
				UpcomingMeeting m = new UpcomingMeeting();
				
				m.setrName(results.getString(1));
				m.setUsername(results.getString(2));
				try {
					m.setDate(results.getDate(3).toString());
				} catch (Exception e) {
					m.setDate( null );
				}
				
				
				upcomingMeetings.add(m);
			}
		} catch ( SQLException se ) {
			se.printStackTrace();
			throw new DMSClientErrorException("Error getting meetings from database");
		} catch ( DMSException de ) {
			de.printStackTrace();
			throw new DMSClientErrorException("Error getting meetings from database");
		}
		
		return upcomingMeetings;
	}

	/*
	 * Get a meeting's details
	 */
	public static ScheduledMeeting createScheduledMeeting(
			
			String username,
			String token,
			String clientid
			) {
		
		List<Object> fields = MeetingFactory.getFields(
				clientid,
				DatabaseNames.FLDS_SCHEDULE_MEETING,
				DatabaseNames.TBL_SCHEDULE_MEETING
				);
		
		return new ScheduledMeeting(
				(Boolean)fields.get(0),
				(Boolean)fields.get(1),
				(Boolean)fields.get(2),
				((Date)fields.get(3)).toString(),
				((Date)fields.get(4)).toString(),
				(String)fields.get(5),
				(Boolean)fields.get(6),
				(Boolean)fields.get(7),
				(Boolean)fields.get(8),
				(Boolean)fields.get(9),
				(Boolean)fields.get(10),
				(Boolean)fields.get(11),
				(Boolean)fields.get(12),
				(Boolean)fields.get(13),
				(Boolean)fields.get(14),
				(Boolean)fields.get(15),
				(Boolean)fields.get(16),
				(Boolean)fields.get(17),
				(Boolean)fields.get(18),
				(Boolean)fields.get(19),
				(Boolean)fields.get(20),
				(Boolean)fields.get(21),
				(Boolean)fields.get(22),
				(Boolean)fields.get(23),
				(Boolean)fields.get(24),
				(Boolean)fields.get(25),
				(Boolean)fields.get(26),
				(Boolean)fields.get(27),
				(Boolean)fields.get(28),
				(String)fields.get(29),
				(Boolean)fields.get(30),
				(Boolean)fields.get(31),
				(Boolean)fields.get(32),
				(Boolean)fields.get(33),
				(String)fields.get(34),
				(Boolean)fields.get(35),
				(Boolean)fields.get(36),
				(Boolean)fields.get(37),
				(Boolean)fields.get(38),
				(Boolean)fields.get(39),
				(String)fields.get(40)
				);
	}

	
	
	private static List<Object> getFields(String clientid, List<String> fieldNames, String tableNames) {

		List<Map<String, Object>> resultsList = DatabaseAccess.getTableContents( clientid, fieldNames, tableNames);
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

}
