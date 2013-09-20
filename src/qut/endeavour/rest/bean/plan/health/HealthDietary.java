package qut.endeavour.rest.bean.plan.health;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class HealthDietary {
	private String cannotEat;
	private String avoidFood;
	private boolean assessmentDone;
	private String usualDiet;
	private String snacks;
	private String dislikes;
	private String breakfast;
	private String lunch;
	private String dinner;
	private String supportDrinking;
	private String eatingSupport;
	private String otherInfo;
	private String location;
	
	public HealthDietary() {}

	public HealthDietary(String cannotEat, String avoidFood,
			boolean assessmentDone, String usualDiet, String snacks,
			String dislikes, String breakfast, String lunch, String dinner,
			String supportDrinking, String eatingSupport, String otherInfo,
			String location) {
		this.cannotEat = cannotEat;
		this.avoidFood = avoidFood;
		this.assessmentDone = assessmentDone;
		this.usualDiet = usualDiet;
		this.snacks = snacks;
		this.dislikes = dislikes;
		this.breakfast = breakfast;
		this.lunch = lunch;
		this.dinner = dinner;
		this.supportDrinking = supportDrinking;
		this.eatingSupport = eatingSupport;
		this.otherInfo = otherInfo;
		this.location = location;
	}

	public String getCannotEat() {
		return cannotEat;
	}

	public void setCannotEat(String cannotEat) {
		this.cannotEat = cannotEat;
	}

	public String getAvoidFood() {
		return avoidFood;
	}

	public void setAvoidFood(String avoidFood) {
		this.avoidFood = avoidFood;
	}

	public boolean isAssessmentDone() {
		return assessmentDone;
	}

	public void setAssessmentDone(boolean assessmentDone) {
		this.assessmentDone = assessmentDone;
	}

	public String getUsualDiet() {
		return usualDiet;
	}

	public void setUsualDiet(String usualDiet) {
		this.usualDiet = usualDiet;
	}

	public String getSnacks() {
		return snacks;
	}

	public void setSnacks(String snacks) {
		this.snacks = snacks;
	}

	public String getDislikes() {
		return dislikes;
	}

	public void setDislikes(String dislikes) {
		this.dislikes = dislikes;
	}

	public String getBreakfast() {
		return breakfast;
	}

	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}

	public String getLunch() {
		return lunch;
	}

	public void setLunch(String lunch) {
		this.lunch = lunch;
	}

	public String getDinner() {
		return dinner;
	}

	public void setDinner(String dinner) {
		this.dinner = dinner;
	}

	public String getSupportDrinking() {
		return supportDrinking;
	}

	public void setSupportDrinking(String supportDrinking) {
		this.supportDrinking = supportDrinking;
	}

	public String getEatingSupport() {
		return eatingSupport;
	}

	public void setEatingSupport(String eatingSupport) {
		this.eatingSupport = eatingSupport;
	}

	public String getOtherInfo() {
		return otherInfo;
	}

	public void setOtherInfo(String otherInfo) {
		this.otherInfo = otherInfo;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	

}
