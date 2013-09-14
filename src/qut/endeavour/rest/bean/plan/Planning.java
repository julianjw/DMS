package qut.endeavour.rest.bean.plan;

import javax.xml.bind.annotation.XmlRootElement;

import qut.endeavour.rest.bean.plan.planning.GoalPlan;
import qut.endeavour.rest.bean.plan.planning.HolidayPlan;

@XmlRootElement
public class Planning {

	private HolidayPlan holidayPlan;
	private GoalPlan goalPlan;
	
	public Planning(
			HolidayPlan holidayPlan,
			GoalPlan goalPlan
			){
		this.holidayPlan = holidayPlan;
		this.goalPlan = goalPlan;
	}
	
	public Planning() {}
	
	
	public HolidayPlan getHolidayPlan() {
		return this.holidayPlan;
	}
	public void setHolidayPlan( HolidayPlan holidayPlan) {
		this.holidayPlan = holidayPlan;
	}
	
	
	public GoalPlan getGoalPlan() {
		return this.goalPlan;
	}
	public void setGoalPlan( GoalPlan goalPlan) {
		this.goalPlan = goalPlan;
	}
	
}
