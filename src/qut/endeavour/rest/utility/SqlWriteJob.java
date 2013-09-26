package qut.endeavour.rest.utility;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import qut.endeavour.rest.exception.DMSException;
import qut.endeavour.rest.storage.DatabaseAccess;

public class SqlWriteJob {
	
	private final static char BOOLEAN = 'b';
	private final static char INTEGER = 'i';
	private final static char STRING = 's';
	private final static char DATE = 'd';
	
	public SqlWriteJob(Connection con, String tableName, Map<String,Object> key,
			List<Map<String, Object>> table) throws DMSException {
		
		if ( con == null ) throw new DMSException();
		if ( tableName == null )  throw new DMSException();
		if ( key == null)  throw new DMSException();
		if ( key.size() != 1 ) throw new DMSException();
		if ( table == null )  throw new DMSException();
		if ( table.size() < 1 )  throw new DMSException();
		if ( table.get(0) == null )  throw new DMSException();
		if ( table.get(0).size() < 1 )  throw new DMSException();
		
		prepare( con, tableName, key, table);
		
	}
	
	
	private void prepare(Connection con, String tableName, Map<String,Object> key,
		List<Map<String, Object>> table) {
		
		String keyName;
		
		{	
			Entry<String, Object> entry = key.entrySet().iterator().next();
			keyName = entry.getKey();
		}
		
		if ( table.size() == 1) {
			Map<String, Object> row = table.get(0);
			
			String insertSqlFields = "`"+keyName+"`";
			String insertSqlValues = "?";
			String updateSqlSet = "`"+keyName+"`=?";
			
			for ( Entry<String, Object> field : row.entrySet() ) {
				insertSqlFields += ",`"+field.getKey().substring(2)+"`";
				insertSqlValues += "?,";
				
				updateSqlSet += ",`"+field.getKey().substring(2)+"`=?";
			}
			
			String countSql = "SELECT count(tb."+keyName.substring(2)+") as `count` FROM `"+tableName+"` tb WHERE tb"+keyName.substring(2)+" = ?";
			String insertSql = "INSERT INTO `"+tableName+"`("+insertSqlFields+") VALUES ("+insertSqlValues+")";
			String updateSql = "UPDATE `"+tableName+"` SET "+updateSqlSet;
	
			System.out.println(countSql);
			System.out.println(insertSql);
			System.out.println(updateSql);
			
			
			
			try {
				PreparedStatement countPs = populateValues(key, DatabaseAccess.createPreparedStatement(countSql) );
				PreparedStatement insertPs = populateValues(table.get(0), DatabaseAccess.createPreparedStatement(insertSql));
				PreparedStatement updatePs = populateValues(table.get(0), DatabaseAccess.createPreparedStatement(updateSql));
				
				ResultSet countRs = countPs.executeQuery();
				
				if( countRs.next() ) {
					if ( countRs.getInt(1) == 0 ) { // if the count is 0, we need to insert it.
						insertPs.executeUpdate();
					} else {
						updatePs.executeUpdate();
					}
				}
				
			} catch (SQLException e) {
	
				e.printStackTrace();
			} catch (DMSException e) {
	
				e.printStackTrace();
			}
		}
	}


	/**
	 * Will plug values into supplied prepared statement.
	 *  
	 * @param row
	 * @param ps
	 * @return
	 * @throws SQLException
	 */
	private PreparedStatement populateValues(Map<String, Object> row,
			PreparedStatement ps) throws SQLException {
		
		int i = 0;
		
		for ( Entry<String, Object> field : row.entrySet() ) {
			char type = field.getKey().charAt(0);
			
			Object data = field.getValue();
			
			i++;
			
			switch (type) {
				case STRING:
					ps.setString(i, (String)data);
					break;
				case INTEGER:
					ps.setInt(i, (Integer)data);
					break;
				case BOOLEAN:
					ps.setBoolean(i, (Boolean)data);
					break;
				case DATE:
					ps.setDate(i, Date.valueOf( (String)data) );
					break;
				default:
					ps.setNull(i, java.sql.Types.NULL);
					break;
			}
		}	
		return ps;
	}
	
}