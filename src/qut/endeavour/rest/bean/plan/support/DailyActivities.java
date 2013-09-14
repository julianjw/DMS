package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DailyActivities {
	private String Sleeping;
	private String BedTime;
	private String Bathing;
	private String Dressing;
	private String Toileting;
	private String Mensuration;
	private String Cooking;
	private String Cleaning;
	private String Monday;
	private String Tuesday;
	private String Wednesday;
	private String Thursday;
	private String Friday;
	private String Saturday;
	private String Sunday;
	private String OtherThings;
	private String RoutineMorning;
	private String RoutineMealTime;
	private String RoutineAfternoon;
	private String RoutineSleeping;
	private String RoutineWeekend;
	private String Service;
	
	/**
	 * 
	 * @param Sleeping
	 * @param BedTime
	 * @param Bathing
	 * @param Dressing
	 * @param Toileting
	 * @param Mensuration
	 * @param Cooking
	 * @param Cleaning
	 * @param Monday
	 * @param Tuesday
	 * @param Wednesday
	 * @param Thursday
	 * @param Friday
	 * @param Saturday
	 * @param Sunday
	 * @param OtherThings
	 * @param RoutineMorning
	 * @param RoutineMealTime
	 * @param RoutineAfternoon
	 * @param RoutineSleeping
	 * @param RoutineWeekend
	 * @param Service
	 */
	public DailyActivities(
			String Sleeping,
			String BedTime,
			String Bathing,
			String Dressing,
			String Toileting,
			String Mensuration,
			String Cooking,
			String Cleaning,
			String Monday,
			String Tuesday,
			String Wednesday,
			String Thursday,
			String Friday,
			String Saturday,
			String Sunday,
			String OtherThings,
			String RoutineMorning,
			String RoutineMealTime,
			String RoutineAfternoon,
			String RoutineSleeping,
			String RoutineWeekend,
			String Service
			) {
		
		this.Sleeping = Sleeping;
		this.BedTime = BedTime;
		this.Bathing = Bathing;
		this.Dressing = Dressing;
		this.Toileting = Toileting;
		this.Mensuration = Mensuration;
		this.Cooking = Cooking;
		this.Cleaning = Cleaning;
		this.Monday = Monday;
		this.Tuesday = Tuesday;
		this.Wednesday = Wednesday;
		this.Thursday = Thursday;
		this.Friday = Friday;
		this.Saturday = Saturday;
		this.Sunday = Sunday;
		this.OtherThings = OtherThings;
		this.RoutineMorning = RoutineMorning;
		this.RoutineMealTime = RoutineMealTime;
		this.RoutineAfternoon = RoutineAfternoon;
		this.RoutineSleeping = RoutineSleeping;
		this.RoutineWeekend = RoutineWeekend;
		this.Service = Service;
		
	}
	
	
	
	public DailyActivities() {}
	
	
	
	public String getSleeping() {
		return this.Sleeping;
	}
	public void setSleeping( String Sleeping ) {
		this.Sleeping = Sleeping;
	}
	
	
	
	public String getBedTime() {
		return this.BedTime;
	}
	public void setBedTime( String BedTime ) {
		this.BedTime = BedTime;
	}
	
	
	
	public String getBathing() {
		return this.Bathing;
	}
	public void setBathing( String Bathing ) {
		this.Bathing = Bathing;
	}
	
	
	
	public String getDressing() {
		return this.Dressing;
	}
	public void setDressing( String Dressing ) {
		this.Dressing = Dressing;
	}
	
	
	
	public String getToileting() {
		return this.Toileting;
	}
	public void setToileting( String Toileting ) {
		this.Toileting = Toileting;
	}
	
	
	
	public String getMensuration() {
		return this.Mensuration;
	}
	public void setMensuration(String Mensuration) {
		this.Mensuration = Mensuration;
	}
	
	
	
	public String getCooking() {
		return this.Cooking;
	}
	public void setCooking( String Cooking ) {
		this.Cooking = Cooking;
	}
	
	
	
	public String getCleaning() {
		return this.Cleaning;
	}
	public void setCleaning( String Cleaning ) {
		this.Cleaning = Cleaning;
	}
	
	
	
	public String getMonday() {
		return this.Monday;
	}
	public void setMonday( String Monday ) {
		this.Monday = Monday;
	}
	
	
	
	public String getTuesday() {
		return this.Tuesday;
	}
	public void setTuesday( String Tuesday ) {
		this.Tuesday = Tuesday;
	}
	
	
	
	public String getWednesday() {
		return this.Wednesday;
	}
	public void setWednesday( String Wednesday ) {
		this.Wednesday = Wednesday;
	}
	
	
	
	public String getThursday() {
		return this.Thursday;
	}
	public void setThursday(String Thursday) {
		this.Thursday = Thursday;
	}
	
	
	
	public String getFriday() {
		return this.Friday;
	}
	public void setFriday(String Friday) {
		this.Friday = Friday;
	}
	
	
	
	public String getSaturday() {
		return this.Saturday;
	}
	public void setSaturday(String Saturday) {
		this.Saturday = Saturday;
	}
	
	
	
	public String getSunday() {
		return this.Sunday;
	}
	public void setSunday( String Sunday ) {
		this.Sunday = Sunday;
	}
	
	
	
	public String getOtherThings() {
		return this.OtherThings;
	}
	public void setOtherThings( String OtherThings ) {
		this.OtherThings = OtherThings;
	}
	
	
	
	public String getRoutineMorning() {
		return this.RoutineMorning;
	}
	public void setRoutineMorning( String RoutineMorning ) {
		this.RoutineMorning = RoutineMorning;
	}
	
	
	
	public String getRoutineMealTime() {
		return this.RoutineMealTime;
	}
	public void setRoutineMealTime( String RoutineMealTime ) {
		this.RoutineMealTime = RoutineMealTime;
	}
	
	
	
	public String getRoutineAfternoon() {
		return this.RoutineAfternoon;
	}
	public void setRoutineAfternoon( String RoutineAfternoon ) {
		this.RoutineAfternoon = RoutineAfternoon;
	}
	
	
	
	public String getRoutineSleeping() {
		return this.RoutineSleeping;
	}
	public void setRoutineSleeping(String RoutineSleeping) {
		this.RoutineSleeping = RoutineSleeping;
	}
	
	
	
	public String getRoutineWeekend() {
		return this.RoutineWeekend;
	}
	public void setRoutineWeekend( String RoutineWeekend ) {
		this.RoutineWeekend = RoutineWeekend;
	}
	
	
	
	public String getService() {
		return this.Service;
	}
	public void setService( String Service ) {
		this.Service = Service;
	}
}
