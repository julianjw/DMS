package qut.endeavour.rest.bean.plan.support;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DailyActivities {
	private String sleeping;
	private String bedTime;
	private String bathing;
	private String dressing;
	private String toileting;
	private String menstruation;
	private String cooking;
	private String cleaning;
	private String monday;
	private String tuesday;
	private String wednesday;
	private String thursday;
	private String friday;
	private String saturday;
	private String sunday;
	private String otherThings;
	private String routineMorning;
	private String routineMealTime;
	private String routineAfternoon;
	private String routineSleeping;
	private String routineWeekend;
	private String services;
	
	public DailyActivities() {}

	public DailyActivities(String sleeping, String bedTime, String bathing,
			String dressing, String toileting, String menstruation,
			String cooking, String cleaning, String monday, String tuesday,
			String wednesday, String thursday, String friday, String saturday,
			String sunday, String otherThings, String routineMorning,
			String routineMealTime, String routineAfternoon,
			String routineSleeping, String routineWeekend, String services) {
		this.sleeping = sleeping;
		this.bedTime = bedTime;
		this.bathing = bathing;
		this.dressing = dressing;
		this.toileting = toileting;
		this.menstruation = menstruation;
		this.cooking = cooking;
		this.cleaning = cleaning;
		this.monday = monday;
		this.tuesday = tuesday;
		this.wednesday = wednesday;
		this.thursday = thursday;
		this.friday = friday;
		this.saturday = saturday;
		this.sunday = sunday;
		this.otherThings = otherThings;
		this.routineMorning = routineMorning;
		this.routineMealTime = routineMealTime;
		this.routineAfternoon = routineAfternoon;
		this.routineSleeping = routineSleeping;
		this.routineWeekend = routineWeekend;
		this.services = services;
	}

	public String getSleeping() {
		return sleeping;
	}

	public void setSleeping(String sleeping) {
		this.sleeping = sleeping;
	}

	public String getBedTime() {
		return bedTime;
	}

	public void setBedTime(String bedTime) {
		this.bedTime = bedTime;
	}

	public String getBathing() {
		return bathing;
	}

	public void setBathing(String bathing) {
		this.bathing = bathing;
	}

	public String getDressing() {
		return dressing;
	}

	public void setDressing(String dressing) {
		this.dressing = dressing;
	}

	public String getToileting() {
		return toileting;
	}

	public void setToileting(String toileting) {
		this.toileting = toileting;
	}

	public String getMenstruation() {
		return menstruation;
	}

	public void setMenstruation(String menstruation) {
		this.menstruation = menstruation;
	}

	public String getCooking() {
		return cooking;
	}

	public void setCooking(String cooking) {
		this.cooking = cooking;
	}

	public String getCleaning() {
		return cleaning;
	}

	public void setCleaning(String cleaning) {
		this.cleaning = cleaning;
	}

	public String getMonday() {
		return monday;
	}

	public void setMonday(String monday) {
		this.monday = monday;
	}

	public String getTuesday() {
		return tuesday;
	}

	public void setTuesday(String tuesday) {
		this.tuesday = tuesday;
	}

	public String getWednesday() {
		return wednesday;
	}

	public void setWednesday(String wednesday) {
		this.wednesday = wednesday;
	}

	public String getThursday() {
		return thursday;
	}

	public void setThursday(String thursday) {
		this.thursday = thursday;
	}

	public String getFriday() {
		return friday;
	}

	public void setFriday(String friday) {
		this.friday = friday;
	}

	public String getSaturday() {
		return saturday;
	}

	public void setSaturday(String saturday) {
		this.saturday = saturday;
	}

	public String getSunday() {
		return sunday;
	}

	public void setSunday(String sunday) {
		this.sunday = sunday;
	}

	public String getOtherThings() {
		return otherThings;
	}

	public void setOtherThings(String otherThings) {
		this.otherThings = otherThings;
	}

	public String getRoutineMorning() {
		return routineMorning;
	}

	public void setRoutineMorning(String routineMorning) {
		this.routineMorning = routineMorning;
	}

	public String getRoutineMealTime() {
		return routineMealTime;
	}

	public void setRoutineMealTime(String routineMealTime) {
		this.routineMealTime = routineMealTime;
	}

	public String getRoutineAfternoon() {
		return routineAfternoon;
	}

	public void setRoutineAfternoon(String routineAfternoon) {
		this.routineAfternoon = routineAfternoon;
	}

	public String getRoutineSleeping() {
		return routineSleeping;
	}

	public void setRoutineSleeping(String routineSleeping) {
		this.routineSleeping = routineSleeping;
	}

	public String getRoutineWeekend() {
		return routineWeekend;
	}

	public void setRoutineWeekend(String routineWeekend) {
		this.routineWeekend = routineWeekend;
	}

	public String getServices() {
		return services;
	}

	public void setService(String services) {
		this.services = services;
	}
	
	
}
