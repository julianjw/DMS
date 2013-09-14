package qut.endeavour.rest.bean.plan.planning;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class GoalPlan {
	private String GoalToAchieve;
	private String Strategies;
	private String HowWhoWhere;
	private String Timeframes;
	private String Outcomes;
	private String ResourcesRequired;
	
	
	
	public GoalPlan(
			String GoalToAchieve,
			String Strategies,
			String HowWhoWhere,
			String Timeframes,
			String Outcomes,
			String ResourcesRequired
			) {
		
		this.GoalToAchieve = GoalToAchieve;
		this.Strategies = Strategies;
		this.HowWhoWhere = HowWhoWhere;
		this.Timeframes = Timeframes;
		this.Outcomes = Outcomes;
		this.ResourcesRequired = ResourcesRequired;
		
	}
	
	
	
	public GoalPlan() {}
	
	
	
	public String getGoalToAchieve() {
		return this.GoalToAchieve;
	}
	public void setGoalToAchieve( String GoalToAchieve ) {
		this.GoalToAchieve = GoalToAchieve;
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
	
	
	
	public String getOutcomes() {
		return this.Outcomes;
	}
	public void setOutcomes( String Outcomes ) {
		this.Outcomes = Outcomes;
	}
	
	
	
	public String getResourcesRequired() {
		return this.ResourcesRequired;
	}
	public void setResourcesRequired( String ResourcesRequired ) {
		this.ResourcesRequired = ResourcesRequired;
	}
}
