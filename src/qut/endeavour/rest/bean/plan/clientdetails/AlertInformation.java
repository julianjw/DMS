package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AlertInformation {
	private String allergies;
	private String medIssues;
	private String eatingAlerts;
	private String restrictive;
	private String guardian;
	private String complexSupportNeeds;
	private String phobias;
	private String other;
	
	/**
	 * 
	 * @param allergies
	 * @param medIssues
	 * @param eatingAlerts
	 * @param restrictive
	 * @param guardian
	 * @param complexSupportNeeds
	 * @param phobias
	 * @param other
	 */
	public AlertInformation(
			String allergies,
			String medIssues,
			String eatingAlerts,
			String restrictive,
			String guardian,
			String complexSupportNeeds,
			String phobias,
			String other
			
			) {
		this.allergies = allergies;
		this.medIssues = medIssues;
		this.eatingAlerts = eatingAlerts;
		this.restrictive = restrictive;
		this.guardian = guardian;
		this.complexSupportNeeds = complexSupportNeeds;
		this.phobias = phobias;
		this.other = other;
	}
	
	public AlertInformation() {}
	
	public String getAllergies() {
		return this.allergies;
	}
	
	public void setAllergies( String allergies ) {
		this.allergies = allergies;
	}
	
	public String getMedIssues() {
		return this.medIssues;
	}
	
	public void setMedIssues( String medIssues ) {
		this.medIssues = medIssues;
	}
	
	public String getEatingAlerts() {
		return this.eatingAlerts;
	}
	
	public void setEatingAlerts( String eatingAlerts ) {
		this.eatingAlerts = eatingAlerts;
	}
	
	public String getRestrictive() {
		return this.restrictive;
	}
	
	public void setRestrictive( String restrictive ) {
		this.restrictive = restrictive;
	}
	
	public String getGuardian() {
		return this.guardian;
	}
	
	public void setGuardian( String guardian ) {
		this.guardian = guardian;
	}
	
	public String getComplexSupportNeeds() {
		return this.complexSupportNeeds;
	}
	
	public void setComplexSupportNeeds(String complexSupportNeeds) {
		this.complexSupportNeeds = complexSupportNeeds;
	}
	
	public String getPhobias() {
		return this.phobias;
	}
	
	public void setPhobias(String phobias) {
		this.phobias = phobias;
	}
	
	public String getOther() {
		return this.other;
	}
	
	public void setOther(String other) {
		this.other = other;
	}
}
