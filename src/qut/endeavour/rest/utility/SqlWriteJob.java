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
	
	private String tableName;
	private Map<String,Object> key;
	private List<Map<String,Object>> table;
	
	
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
		
		if ( tableName == null )  throw new DMSException();
		if ( key == null)  throw new DMSException();
		if ( key.size() != 1 ) throw new DMSException();
		if ( table == null )  throw new DMSException();
		if ( table.size() < 1 )  throw new DMSException();
		if ( table.get(0) == null )  throw new DMSException();
		if ( table.get(0).size() < 1 )  throw new DMSException();
		
		this.tableName = tableName;
		this.key = key;
		this.table = table;
		
	}
	
	
	public void execute() throws SQLException, DMSException {
		
		String keyName;
		
		{	
			Entry<String, Object> entry = key.entrySet().iterator().next();
			keyName = entry.getKey();
		}
		
		if ( table.size() == 1) { // BEGIN ONE ROW ONLY
			Map<String, Object> row = table.get(0);
			
			String insertSqlFields = "";//"`"+keyName.substring(2)+"`";
			String insertSqlValues = "";//"?";
			String updateSqlSet = "";//"`"+keyName.substring(2)+"`=?";
			
			for ( Entry<String, Object> field : row.entrySet() ) {
				insertSqlFields += ",`"+field.getKey().substring(2)+"`";
				insertSqlValues += ",?";
				
				if ( field.getKey() != keyName )
					updateSqlSet += ",`"+field.getKey().substring(2)+"`=?";
			}
			
			insertSqlFields = insertSqlFields.substring(1);
			insertSqlValues = insertSqlValues.substring(1);
			updateSqlSet = updateSqlSet.substring(1);
			
			String countSql = "SELECT count(tb."+keyName.substring(2)+") as `count` FROM `"+tableName+"` tb WHERE tb."+keyName.substring(2)+" = ?";
			String insertSql = "INSERT INTO `"+tableName+"`("+insertSqlFields+") VALUES ("+insertSqlValues+")";
			String updateSql = "UPDATE `"+tableName+"` SET "+updateSqlSet+" WHERE user_id = ?";
	
			System.out.println(countSql);
			System.out.println(insertSql);
			System.out.println(updateSql);
			
			System.out.println("Writing:");
			//for ( Map.Entry<String, Object> set : row.entrySet() ) {
			//	System.out.println("--> \""+set.getKey()+"\" - \""+set.getValue().toString()+"\"");
			//}
			
			PreparedStatement countPs = populateValues(key, null, DatabaseAccess.createPreparedStatement(countSql) );
			PreparedStatement insertPs = populateValues(table.get(0), null, DatabaseAccess.createPreparedStatement(insertSql));
			PreparedStatement updatePs = populateValues(table.get(0), keyName, DatabaseAccess.createPreparedStatement(updateSql));
			
			ResultSet countRs = countPs.executeQuery(); // count how many times it is in the database
			
			System.out.println("");
			
			if( countRs.next() ) {
				System.out.println( "number of times user id number found in table: " + countRs.getInt(1));
				if ( countRs.getInt(1) == 0 ) { // if the count is 0, we need to insert it.
					System.out.println("Executing an insert.");
					insertPs.executeUpdate();
				} else {
					System.out.println("Executin an update.");
					updatePs.executeUpdate();
				}
			}
			
			
			System.out.println("Finished writing.");
			
		}  else { // END ONE ROW ONLY, begin multiple rows.
			System.out.println("Multiple rows to be written to \""+ tableName +"\" - Ignoring.");
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
			String keyName,
			PreparedStatement ps
			) throws SQLException {
		
		boolean endKey = keyName != null; // do we want the key last?
		int total = row.size();
		
		int i = 0;
		
		System.out.println("\nPutting values in new query.");
		
		for ( Entry<String, Object> field : row.entrySet() ) {
			char type = field.getKey().charAt(0);
			
			Object data = field.getValue();
			
			if ( (field.getKey() == keyName) && endKey ) {
				System.out.println("Detected an endKey.");
				continue; // if we want the key last
			}
			
			i++;
			
			ps = insertData( ps, type, data, i) ;
			
		}
		
		if ( endKey ) {
			ps = insertData( ps, keyName.charAt(0), row.get(keyName), total);
		}
		
		return ps;
	}


	private PreparedStatement insertData(PreparedStatement ps, char type, Object data, int i) throws SQLException {
		
		switch (type) {
			case STRING:
				//System.out.println(field.getKey()+"-->String " +(String)data);
				ps.setString(i, (String)data);
				break;
			case INTEGER:
				//System.out.println(field.getKey()+"-->Integer " +(Integer)data);
				ps.setInt(i, (Integer)data);
				break;
			case BOOLEAN:
				//System.out.println(field.getKey()+"-->Boolean " +(Boolean)data);
				ps.setBoolean(i, (Boolean)data);
				break;
			case DATE:
				//System.out.println(field.getKey()+"-->Date " +Date.valueOf( (String)data));
				ps.setDate(i, Date.valueOf( (String)data) );
				break;
			default:
				ps.setNull(i, java.sql.Types.NULL);
				break;
		}
		return ps;
	}
	
}
