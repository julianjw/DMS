package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AlertInformation {
	private String allergies;
	private String medIssues;
	private String eatingAlerts;
	private String safetyConcerns;
	private String restrictive;
	private String guardianOrders;
	private String complexSupportNeeds;
	private String phobias;
	private String otherInfo;
	
	public AlertInformation() {}

	/**
	 * 
	 * @param allergies
	 * @param medIssues
	 * @param eatingAlerts
	 * @param safetyConcerns
	 * @param restrictive
	 * @param guardianOrders
	 * @param complexSupportNeeds
	 * @param phobias
	 * @param otherInfo
	 */
	public AlertInformation(String allergies, String medIssues,
			String eatingAlerts, String safetyConcerns, String restrictive,
			String guardianOrders, String complexSupportNeeds, String phobias,
			String otherInfo) {
		this.allergies = allergies;
		this.medIssues = medIssues;
		this.eatingAlerts = eatingAlerts;
		this.safetyConcerns = safetyConcerns;
		this.restrictive = restrictive;
		this.guardianOrders = guardianOrders;
		this.complexSupportNeeds = complexSupportNeeds;
		this.phobias = phobias;
		this.otherInfo = otherInfo;
	}

	public String getAllergies() {
		return allergies;
	}

	public void setAllergies(String allergies) {
		this.allergies = allergies;
	}

	public String getMedIssues() {
		return medIssues;
	}

	public void setMedIssues(String medIssues) {
		this.medIssues = medIssues;
	}

	public String getEatingAlerts() {
		return eatingAlerts;
	}

	public void setEatingAlerts(String eatingAlerts) {
		this.eatingAlerts = eatingAlerts;
	}

	public String getSafetyConcerns() {
		return safetyConcerns;
	}

	public void setSafetyConcerns(String safetyConcerns) {
		this.safetyConcerns = safetyConcerns;
	}

	public String getRestrictive() {
		return restrictive;
	}

	public void setRestrictive(String restrictive) {
		this.restrictive = restrictive;
	}

	public String getGuardianOrders() {
		return guardianOrders;
	}

	public void setGuardianOrders(String guardianOrders) {
		this.guardianOrders = guardianOrders;
	}

	public String getComplexSupportNeeds() {
		return complexSupportNeeds;
	}

	public void setComplexSupportNeeds(String complexSupportNeeds) {
		this.complexSupportNeeds = complexSupportNeeds;
	}

	public String getPhobias() {
		return phobias;
	}

	public void setPhobias(String phobias) {
		this.phobias = phobias;
	}

	public String getOtherInfo() {
		return otherInfo;
	}

	public void setOtherInfo(String otherInfo) {
		this.otherInfo = otherInfo;
	}
	
	
	
}
