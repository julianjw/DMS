package qut.endeavour.rest.bean.plan.health;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DietaryRequirements {
	private String CannotEat;
	private String AvoidFood;
	private boolean AssessmentDone;
	private String UsualDiet;
	private String Snacks;
	private String Dislikes;
	private String Breakfast;
	private String Lunch;
	private String Dinner;
	private String SupportDrinking;
	private String EatingSupport;
	private String OtherInfo;
	private String Location;
	
	/**
	 * 
	 * @param CannotEat
	 * @param AvoidFood
	 * @param AssessmentDone
	 * @param UsualDiet
	 * @param Snacks
	 * @param Dislikes
	 * @param Breakfast
	 * @param Lunch
	 * @param Dinner
	 * @param SupportDrinking
	 * @param EatingSupport
	 * @param OtherInfo
	 * @param Location
	 */
	public DietaryRequirements(
			String CannotEat,
			String AvoidFood,
			boolean AssessmentDone,
			String UsualDiet,
			String Snacks,
			String Dislikes,
			String Breakfast,
			String Lunch,
			String Dinner,
			String SupportDrinking,
			String EatingSupport,
			String OtherInfo,
			String Location
			) {
		
		this.CannotEat = CannotEat;
		this.AvoidFood = AvoidFood;
		this.AssessmentDone = AssessmentDone;
		this.UsualDiet = UsualDiet;
		this.Snacks = Snacks;
		this.Dislikes = Dislikes;
		this.Breakfast = Breakfast;
		this.Lunch = Lunch;
		this.Dinner = Dinner;
		this.SupportDrinking = SupportDrinking;
		this.EatingSupport = EatingSupport;
		this.OtherInfo = OtherInfo;
		this.Location = Location;
	}
	
	public DietaryRequirements() {}
	
	public String getCannotEat() {
		return this.CannotEat;
	}
	
	public void setCannotEat( String CannotEat ) {
		this.CannotEat = CannotEat;
	}
	
	public String getAvoidFood() {
		return this.AvoidFood;
	}
	
	public void setAvoidFood( String AvoidFood ) {
		this.AvoidFood = AvoidFood;
	}
	
	public boolean getAssessmentDone() {
		return this.AssessmentDone;
	}
	
	public void setAssessmentDone( boolean AssessmentDone ) {
		this.AssessmentDone = AssessmentDone;
	}
	
	public String getUsualDiet() {
		return this.UsualDiet;
	}
	
	public void setUsualDiet( String UsualDiet ) {
		this.UsualDiet = UsualDiet;
	}
	
	public String getSnacks() {
		return this.Snacks;
	}
	
	public void setSnacks(String Snacks) {
		this.Snacks = Snacks;
	}
	
	public String getDislikes() {
		return this.Dislikes;
	}
	
	public void setDislikes( String Dislikes ) {
		this.Dislikes = Dislikes;
	}
	
	public String getBreakfast() {
		return this.Breakfast;
	}
	
	public void setBreakfast( String Breakfast ) {
		this.Breakfast = Breakfast;
	}
	
	public String getLunch() {
		return this.Lunch;
	}
	
	public void setLunch( String Lunch ) {
		this.Lunch = Lunch;
	}
	
	public String getDinner() {
		return this.Dinner;
	}
	
	public void setDinner( String Dinner ) {
		this.Dinner = Dinner;
	}
	
	public String getSupportDrinking() {
		return this.SupportDrinking;
	}
	
	public void setSupportDrinking( String SupportDrinking ) {
		this.SupportDrinking = SupportDrinking;
	}
	
	public String getEatingSupport() {
		return this.EatingSupport;
	}
	
	public void setEatingSupport(String EatingSupport) {
		this.EatingSupport = EatingSupport;
	}
	
	public String getOtherInfo() {
		return this.OtherInfo;
	}
	
	public void setOtherInfo(String OtherInfo) {
		this.OtherInfo = OtherInfo;
	}
	
	public String getLocation() {
		return this.Location;
	}
	
	public void setLocation(String Location) {
		this.Location = Location;
	}

}
