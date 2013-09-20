package qut.endeavour.rest.bean.plan.planning;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class HolidayPlan {
	private String holidayType;
	private String strategies;
	private String howWhoWhere;
	private String timeframes;
	private String detailsAndInfo;
	private String resourcesRequired;
	
	public HolidayPlan() {}

	public HolidayPlan(String holidayType, String strategies,
			String howWhoWhere, String timeframes, String detailsAndInfo,
			String resourcesRequired) {
		super();
		this.holidayType = holidayType;
		this.strategies = strategies;
		this.howWhoWhere = howWhoWhere;
		this.timeframes = timeframes;
		this.detailsAndInfo = detailsAndInfo;
		this.resourcesRequired = resourcesRequired;
	}

	public String getHolidayType() {
		return holidayType;
	}

	public void setHolidayType(String holidayType) {
		this.holidayType = holidayType;
	}

	public String getStrategies() {
		return strategies;
	}

	public void setStrategies(String strategies) {
		this.strategies = strategies;
	}

	public String getHowWhoWhere() {
		return howWhoWhere;
	}

	public void setHowWhoWhere(String howWhoWhere) {
		this.howWhoWhere = howWhoWhere;
	}

	public String getTimeframes() {
		return timeframes;
	}

	public void setTimeframes(String timeframes) {
		this.timeframes = timeframes;
	}

	public String getDetailsAndInfo() {
		return detailsAndInfo;
	}

	public void setDetailsAndInfo(String detailsAndInfo) {
		this.detailsAndInfo = detailsAndInfo;
	}

	public String getResourcesRequired() {
		return resourcesRequired;
	}

	public void setResourcesRequired(String resourcesRequired) {
		this.resourcesRequired = resourcesRequired;
	}
	
	
	
}
