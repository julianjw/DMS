package qut.endeavour.rest.bean.plan.planning;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class GoalPlan {
	private String goalToAchieve;
	private String strategies;
	private String howWhoWhere;
	private String timeframes;
	private String outcomes;
	private String resourcesRequired;
	
	public GoalPlan() {}

	public GoalPlan(String goalToAchieve, String strategies,
			String howWhoWhere, String timeframes, String outcomes,
			String resourcesRequired) {
		super();
		this.goalToAchieve = goalToAchieve;
		this.strategies = strategies;
		this.howWhoWhere = howWhoWhere;
		this.timeframes = timeframes;
		this.outcomes = outcomes;
		this.resourcesRequired = resourcesRequired;
	}

	public String getGoalToAchieve() {
		return goalToAchieve;
	}

	public void setGoalToAchieve(String goalToAchieve) {
		this.goalToAchieve = goalToAchieve;
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

	public String getOutcomes() {
		return outcomes;
	}

	public void setOutcomes(String outcomes) {
		this.outcomes = outcomes;
	}

	public String getResourcesRequired() {
		return resourcesRequired;
	}

	public void setResourcesRequired(String resourcesRequired) {
		this.resourcesRequired = resourcesRequired;
	}
	
	
}
