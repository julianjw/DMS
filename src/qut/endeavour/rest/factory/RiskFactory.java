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
import qut.endeavour.rest.utility.ConvertDates;
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
		
		
		int[] itemNumbers = { 4, 10, 13, 15 };
		String[] dates = ConvertDates.convertDateToString(itemNumbers, fields);
		
		return new RiskAssessment(
				(Integer)fields.get(0),
				clientLoginName,
				(String)fields.get(2),
				(String)fields.get(3),
				dates[0],
				(String)fields.get(5),
				(Integer)fields.get(6),
				(Integer)fields.get(7),
				(Integer)fields.get(8),
				(String)fields.get(9),
				dates[1],
				(Boolean)fields.get(11),
				(String)fields.get(12),
				dates[2],
				(String)fields.get(14),
				dates[3]
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
				try {
					r.setDate( results.getDate(4).toString() );
				} catch (Exception e) {
					r.setDate( null );
				}
				
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
}
