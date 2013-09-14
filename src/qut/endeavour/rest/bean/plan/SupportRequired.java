package qut.endeavour.rest.bean.plan;

import qut.endeavour.rest.bean.plan.support.DailyActivities;
import qut.endeavour.rest.bean.plan.support.FinancialSupport;
import qut.endeavour.rest.bean.plan.support.GeneralSupport;
import qut.endeavour.rest.bean.plan.support.MobilityAndTransport;
import qut.endeavour.rest.bean.plan.support.Relaxation;



public class SupportRequired {
	private GeneralSupport generalSupport;
	private MobilityAndTransport mobilityAndTransport;
	private FinancialSupport financialSupport;
	private DailyActivities dailyActivities;
	private Relaxation relaxation;
	
	
	public SupportRequired(
			GeneralSupport generalSupport,
			MobilityAndTransport mobilityAndTransport,
			FinancialSupport financialSupport,
			DailyActivities dailyActivities,
			Relaxation relaxation
			){
		
		this.generalSupport = generalSupport;
		this.mobilityAndTransport = mobilityAndTransport;
		this.financialSupport = financialSupport;
		this.dailyActivities = dailyActivities;
		this.relaxation = relaxation;
	}
	
	public SupportRequired() {} // empty constructor
	
	
	
	
	public GeneralSupport getGeneralSupport() {
		return this.generalSupport;
	}
	public void setGeneralSupport( GeneralSupport generalSupport ) {
		this.generalSupport = generalSupport;
	}
	
	
	
	
	public MobilityAndTransport getMobilityAndTransport() {
		return mobilityAndTransport;
	}
	public void setMobilityAndTransport( MobilityAndTransport mobilityAndTransport ) {
		this.mobilityAndTransport = mobilityAndTransport;
	}
	
	
	
	
	public FinancialSupport getFinancialSupport() {
		return this.financialSupport;
	}
	public void setFinancialSupport( FinancialSupport financialSupport ) {
		this.financialSupport = financialSupport;
	}
	
	
	
	
	public DailyActivities getDailyActivities() {
		return this.dailyActivities;
	}
	public void setDailyActivities( DailyActivities dailyActivities ) {
		this.dailyActivities = dailyActivities;
	}
	
	
	
	
	public Relaxation getRelaxation() {
		return this.relaxation;
	}
	public void setRelaxation( Relaxation relaxation ) {
		this.relaxation = relaxation;
	}
}
