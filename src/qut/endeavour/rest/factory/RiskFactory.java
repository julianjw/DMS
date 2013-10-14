package qut.endeavour.rest.factory;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import qut.endeavour.rest.bean.risk.ClientRisk;
import qut.endeavour.rest.bean.risk.RiskAssessment;
import qut.endeavour.rest.exception.DMSClientErrorException;
import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.storage.DatabaseAccess;
import qut.endeavour.rest.storage.DatabaseNames;
import qut.endeavour.rest.utility.Permissions;

public class RiskFactory {

	

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



	public static List<ClientRisk> createClientRisks(String username,
			String token, String clientid) {
		String userRole = DatabaseAccess.getRole(username, token);
		if (!Permissions.canGetClientRisks( userRole) )  throw new DMSClientErrorException("User with role " + userRole.toUpperCase() + " cannot see upcoming meetings.");
		
		List<ClientRisk> risks = new ArrayList<ClientRisk>();
		
		
		
		Integer clientIdNumber = null;
		try {
			clientIdNumber = DatabaseAccess.getUserIdNumberByUsername( clientid );
		} catch (DMSException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		//TODO Get rid of hard-coding
		String sql = "SELECT tb.risk_id, tb.service, tb.area, tb.risk_assess_date FROM risk_assessment tb WHERE tb.user_id = ?;";
		
		try {
			PreparedStatement ps = DatabaseAccess.createPreparedStatement(sql);
			ps.setInt(1, clientIdNumber );
			ResultSet results = ps.executeQuery();
			
			while ( results.next() ) {
				ClientRisk r = new ClientRisk();
				
				r.setRisk_id( results.getInt(1) );
				r.setService( results.getString(2) );
				r.setArea( results.getString(3) );
				r.setDate( results.getDate(4).toString() );
				
				risks.add(r);
			}
		} catch ( SQLException se ) {
			se.printStackTrace();
			throw new DMSClientErrorException("Error getting risks from database");
		} catch ( DMSException de ) {
			de.printStackTrace();
			throw new DMSClientErrorException("Error getting risks from database");
		}
		
		return risks;
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
