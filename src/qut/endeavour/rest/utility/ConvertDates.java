package qut.endeavour.rest.utility;

import java.sql.Date;
import java.util.List;

public class ConvertDates {
	public static String[] convertDateToString( int[] itemNumbers, List<Object> fields ){
		String[] dates = new String[itemNumbers.length];
		
		for ( int i = 0; i < dates.length; i++ ) {
			try {
				dates[i] = ( ( (Date)fields.get(itemNumbers[i]) ).toString() );
			} catch (NullPointerException e) {
				dates[i] = null;
			}
		} 
		
		return dates;
	}
}
