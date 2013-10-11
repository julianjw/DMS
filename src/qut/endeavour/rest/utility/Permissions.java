package qut.endeavour.rest.utility;

public class Permissions {
	
	private final static String SUPPORT_WORKER = "SW";
	private final static String RESEARCH_AND_DEVELOPMENT_OFFICER = "R&DO";
	private final static String SERVICE_DEVELOPMENT_AND_INNOVATIONS_MANAGER = "SDIM";
	private final static String SERVICE_OPERATION_MANGER = "SOM";
	private final static String SERVICE_COORDINATOR = "SC";
	
	
//	USER SERVICE/ SIGNIFICANT OTHER
//	• SUPPORT_WORKER
//	• RESEARCH_AND_DEVELOPMENT_OFFICER (R&DO)
//	• SERVICE_DEVELOPMENT_AND_INNOVATIONS_MANAGER (SDIM)
//	• SERVICE_OPERATION_MANGER (SOM)
//	• SERVICE_COORDINATOR (SC)
	
	
	private static boolean testRole( String[] allowed, String userRole) {
		for ( int i = 0; i < allowed.length; i++ )
			if ( allowed[i].toLowerCase().equals(userRole.toLowerCase()) )
					return true;
		return false;
	}
	
	public static boolean canPostPersonalPlan( String userRole ) {
		return testRole( new String[] {
				SUPPORT_WORKER,
				RESEARCH_AND_DEVELOPMENT_OFFICER,
				SERVICE_DEVELOPMENT_AND_INNOVATIONS_MANAGER,
				SERVICE_OPERATION_MANGER
				} , userRole );
	}
	
	public static boolean canGetMeeting( String userRole ) {
		return testRole( new String[] {
				SUPPORT_WORKER,
				RESEARCH_AND_DEVELOPMENT_OFFICER,
				SERVICE_DEVELOPMENT_AND_INNOVATIONS_MANAGER,
				SERVICE_OPERATION_MANGER
				} , userRole );
	}
	
	public static boolean canPostMeeting( String userRole ) {
		return testRole( new String[] {
				SUPPORT_WORKER,
				RESEARCH_AND_DEVELOPMENT_OFFICER,
				SERVICE_DEVELOPMENT_AND_INNOVATIONS_MANAGER,
				SERVICE_OPERATION_MANGER
				} , userRole );
	}

	public static boolean canGetUpcomingMeetings(String userRole) {
		return testRole( new String[] {
				SUPPORT_WORKER,
				RESEARCH_AND_DEVELOPMENT_OFFICER,
				SERVICE_DEVELOPMENT_AND_INNOVATIONS_MANAGER,
				SERVICE_OPERATION_MANGER
				} , userRole );
	}
}
