package qut.endeavour.rest.utility;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
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
	private final static char AUTO_INCREMENT = 'a';
	
	private String tableName;
	private Map<String,Object> key;
	private List<Map<String,Object>> table; /* TABLE INCLUDES ALL FIELDS INCLUDING BOTH KEYS */
	
	private Map<String,Object> secondKey;
	
	
	/**
	 * One table at a time write job.
	 * 
	 * @param con
	 * @param tableName
	 * @param key
	 * @param table
	 * @throws DMSException
	 */
	public SqlWriteJob(String tableName, Map<String,Object> key,
			List<Map<String, Object>> table) throws DMSException {
		this( tableName, key, null, table );
	}
	
	
	public SqlWriteJob(
				String tableName,
				Map<String,Object> key,
				Map<String,Object> secondKey,
				List<Map<String, Object>> table
				) throws DMSException {
		
		String errorMessage = "Error with SqlWriteJob variables.";
		
		if ( tableName == null )  throw new DMSException(errorMessage);
		if ( key == null)  throw new DMSException(errorMessage);
		if ( key.size() != 1 ) throw new DMSException(errorMessage);
		if ( table == null )  throw new DMSException(errorMessage);
		if ( table.size() < 1 )  throw new DMSException(errorMessage);
		if ( table.get(0) == null )  throw new DMSException(errorMessage);
		if ( table.get(0).size() < 1 )  throw new DMSException(errorMessage);
		
		this.tableName = tableName;
		this.key = key;
		this.secondKey = secondKey;
		this.table = table;
		
	}
	
	
	public void execute() throws SQLException, DMSException {
		if ( this.secondKey == null ) multiLineWrite();
		else singleLineWrite( table.get(0) );
	}

	private void multiLineWrite() throws SQLException, DMSException {
		for ( Map<String,Object> row: table ) singleLineWrite(row);
	}
	
	private void singleLineWrite( Map<String,Object> row ) throws SQLException, DMSException {
		if ( row == null ) throw new DMSException("Can't write null row.");
		
		Map<String,Object> actualKey = new HashMap<String,Object>();
		String actualKeyName = null;
		Object actualKeyValue = null;
		
		// pick the correct key
		if ( secondKey != null ) {
			actualKeyName = secondKey.entrySet().iterator().next().getKey();
			actualKeyValue = secondKey.entrySet().iterator().next().getValue();
			
		} else {
			actualKeyName = key.entrySet().iterator().next().getKey();
			actualKeyValue = key.entrySet().iterator().next().getValue();
		}
		
		actualKey.put( actualKeyName, actualKeyValue );
		
		// initialise strings
		String insertSqlFields = "";
		String insertSqlValues = "";
		String updateSqlSet = "";
		
		// write query string datas
		for ( Entry<String, Object> field : row.entrySet() ) {
			insertSqlFields += ",`"+field.getKey().substring(2)+"`"; // field name
			insertSqlValues += ",?"; // value
			
			// don't write key field, we'll do it manually to put it in with the where clause.
			if ( field.getKey() != actualKeyName )
				updateSqlSet += ",`"+field.getKey().substring(2)+"`=?";
		}
		
		insertSqlFields = insertSqlFields.substring(1);
		insertSqlValues = insertSqlValues.substring(1);
		updateSqlSet = updateSqlSet.substring(1);
		
		String countSql = null;
		String insertSql = null;
		String updateSql = null;
		
		
		countSql = "SELECT count(tb."+actualKeyName.substring(2)+") as `count` FROM `"+tableName+"` tb WHERE tb."+actualKeyName.substring(2)+" = ?;";
		insertSql = "INSERT INTO `"+tableName+"`("+insertSqlFields+") VALUES ("+insertSqlValues+");";
		updateSql = "UPDATE `"+tableName+"` SET "+updateSqlSet+" WHERE "+actualKeyName.substring(2)+" = ?;";
		
		System.out.println(countSql);
		System.out.println(insertSql);
		System.out.println(updateSql);
		
		System.out.println("SqlWriteJob: Preparing.");
		
		PreparedStatement countPs = populateValues(actualKey, null, DatabaseAccess.createPreparedStatement(countSql) );
		ResultSet countRs = countPs.executeQuery(); // count how many times it is in the database
		
		if( countRs.next() ) {
			System.out.println( "number of times user id number found in table: " + countRs.getInt(1));
			if ( countRs.getInt(1) == 0 ) { // if the count is 0, we need to insert it.
				System.out.println("Executing an insert.");
				PreparedStatement insertPs = populateValues(row, null, DatabaseAccess.createPreparedStatement(insertSql));
				insertPs.executeUpdate();
				
			} else {
				System.out.println("Executin an update.");
				PreparedStatement updatePs = populateValues(row, actualKeyName, DatabaseAccess.createPreparedStatement(updateSql));
				updatePs.executeUpdate();
			}
		}
		
		System.out.println("Finished writing row with unique id - \"" + actualKeyValue.toString() +"\"");
	}
	

	/**
	 * Will plug values into supplied prepared statement.
	 *  
	 * @param row
	 * @param ps
	 * @return
	 * @throws SQLException
	 * @throws DMSException 
	 */
	private static PreparedStatement populateValues(Map<String, Object> row,
			String keyName,
			PreparedStatement ps
			) throws SQLException, DMSException {
		
		boolean writeKeyInWhereClause = keyName != null; // do we want the key last?
		int total = row.size();
		
		int i = 0;
		
		System.out.println("\nPutting values in new query.");
		
		for ( Entry<String, Object> field : row.entrySet() ) {
			char type = field.getKey().charAt(0);
			
			Object data = field.getValue();
			
			if ( (field.getKey() == keyName) && writeKeyInWhereClause ) {
				System.out.println("Detected an endKey.");
				continue; // if we want the key last
			}
			
			i++;
			
			ps = insertData( ps, type, data, i) ;
		}
		
		if ( writeKeyInWhereClause ) {
			ps = insertData( ps, keyName.charAt(0), row.get(keyName), total);
		}
		
		return ps;
	}

	/**
	 * Put values into the ? of sql statements
	 * 
	 * @param ps
	 * @param type
	 * @param data
	 * @param i
	 * 
	 * @return a ready-to-execute prepared statement
	 * 
	 * @throws SQLException
	 * @throws DMSException
	 */
	private static PreparedStatement insertData(PreparedStatement ps, char type, Object data, int i) throws SQLException, DMSException {
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
			case AUTO_INCREMENT:
				ps.setNull(i, java.sql.Types.NULL );
				break;
			default:
				throw new DMSException("Unknown sql type \""+type+"\".");
		}
		return ps;
	}
	
}
