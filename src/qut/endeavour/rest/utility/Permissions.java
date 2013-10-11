package qut.endeavour.rest.utility;

public class Permissions {
	public static boolean canPostPersonalPlan( String role ) {
		String[] allowed = {"SW","R&DO","SDIM","SOM"};
		return testRole( allowed, role );
		
	}
	
	public static boolean canGetMeeting( String role ) {
		String[] allowed = {"SW","R&DO","SDIM","SOM"};
		return testRole( allowed, role );
		
	}
	
	public static boolean canPostMeeting( String role ) {
		String[] allowed = {"SW","R&DO","SDIM","SOM"};
		return testRole( allowed, role );
		
	}
	
	private static boolean testRole( String[] allowed, String role) {
		for ( int i = 0; i < allowed.length; i++ )
			if ( allowed[i].toLowerCase().equals(role.toLowerCase()) )
					return true;
		
		return false;
	}
}
