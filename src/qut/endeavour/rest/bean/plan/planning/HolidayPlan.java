package qut.endeavour.rest.bean.plan.planning;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class HolidayPlan {
	private String HolidayType;
	private String Strategies;
	private String HowWhoWhere;
	private String Timeframes;
	private String DetailsAndInfo;
	private String ResourcesRequired;
	
	
	
	public HolidayPlan(
			String HolidayType,
			String Strategies,
			String HowWhoWhere,
			String Timeframes,
			String DetailsAndInfo,
			String ResourcesRequired
			) {
		
		this.HolidayType = HolidayType;
		this.Strategies = Strategies;
		this.HowWhoWhere = HowWhoWhere;
		this.Timeframes = Timeframes;
		this.DetailsAndInfo = DetailsAndInfo;
		this.ResourcesRequired = ResourcesRequired;
		
	}
	
	
	
	public HolidayPlan() {}
	
	
	
	public String getHolidayType() {
		return this.HolidayType;
	}
	public void setHolidayType( String HolidayType ) {
		this.HolidayType = HolidayType;
	}
	
	
	
	public String getStrategies() {
		return this.Strategies;
	}
	public void setStrategies( String Strategies ) {
		this.Strategies = Strategies;
	}
	
	
	
	public String getHowWhoWhere() {
		return this.HowWhoWhere;
	}
	public void setHowWhoWhere( String HowWhoWhere ) {
		this.HowWhoWhere = HowWhoWhere;
	}
	
	
	
	public String getTimeframes() {
		return this.Timeframes;
	}
	public void setTimeframes(String Timeframes) {
		this.Timeframes = Timeframes;
	}
	
	
	
	public String getDetailsAndInfo() {
		return this.DetailsAndInfo;
	}
	public void setDetailsAndInfo( String DetailsAndInfo ) {
		this.DetailsAndInfo = DetailsAndInfo;
	}
	
	
	
	public String getResourcesRequired() {
		return this.ResourcesRequired;
	}
	public void setResourcesRequired( String ResourcesRequired ) {
		this.ResourcesRequired = ResourcesRequired;
	}
}
