package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class GeneralSupport {
	private String crowdSafety;
	private String strangerDanger;
	private String moneyHandling;
	private String crowds;
	private String socialNetworks;
	private String communications;
	private String eatingOut;
	private String beliefs;
	private String leisure;
	private String usingApplicances;
	private String usingChemical;
	private String hazardRecognition;
	private String otherSafetyInfo;
	
	public GeneralSupport() {}

	public GeneralSupport(String crowdSafety, String strangerDanger,
			String moneyHandling, String crowds, String socialNetworks,
			String communications, String eatingOut, String beliefs,
			String leisure, String usingApplicances, String usingChemical,
			String hazardRecognition, String otherSafetyInfo) {
		this.crowdSafety = crowdSafety;
		this.strangerDanger = strangerDanger;
		this.moneyHandling = moneyHandling;
		this.crowds = crowds;
		this.socialNetworks = socialNetworks;
		this.communications = communications;
		this.eatingOut = eatingOut;
		this.beliefs = beliefs;
		this.leisure = leisure;
		this.usingApplicances = usingApplicances;
		this.usingChemical = usingChemical;
		this.hazardRecognition = hazardRecognition;
		this.otherSafetyInfo = otherSafetyInfo;
	}

	public String getCrowdSafety() {
		return crowdSafety;
	}

	public void setCrowdSafety(String crowdSafety) {
		this.crowdSafety = crowdSafety;
	}

	public String getStrangerDanger() {
		return strangerDanger;
	}

	public void setStrangerDanger(String strangerDanger) {
		this.strangerDanger = strangerDanger;
	}

	public String getMoneyHandling() {
		return moneyHandling;
	}

	public void setMoneyHandling(String moneyHandling) {
		this.moneyHandling = moneyHandling;
	}

	public String getCrowds() {
		return crowds;
	}

	public void setCrowds(String crowds) {
		this.crowds = crowds;
	}

	public String getSocialNetworks() {
		return socialNetworks;
	}

	public void setSocialNetworks(String socialNetworks) {
		this.socialNetworks = socialNetworks;
	}

	public String getCommunications() {
		return communications;
	}

	public void setCommunications(String communications) {
		this.communications = communications;
	}

	public String getEatingOut() {
		return eatingOut;
	}

	public void setEatingOut(String eatingOut) {
		this.eatingOut = eatingOut;
	}

	public String getBeliefs() {
		return beliefs;
	}

	public void setBeliefs(String beliefs) {
		this.beliefs = beliefs;
	}

	public String getLeisure() {
		return leisure;
	}

	public void setLeisure(String leisure) {
		this.leisure = leisure;
	}

	public String getUsingApplicances() {
		return usingApplicances;
	}

	public void setUsingApplicances(String usingApplicances) {
		this.usingApplicances = usingApplicances;
	}

	public String getUsingChemical() {
		return usingChemical;
	}

	public void setUsingChemical(String usingChemical) {
		this.usingChemical = usingChemical;
	}

	public String getHazardRecognition() {
		return hazardRecognition;
	}

	public void setHazardRecognition(String hazardRecognition) {
		this.hazardRecognition = hazardRecognition;
	}

	public String getOtherSafetyInfo() {
		return otherSafetyInfo;
	}

	public void setOtherSafetyInfo(String otherSafetyInfo) {
		this.otherSafetyInfo = otherSafetyInfo;
	}
	
	
}
