package qut.endeavour.rest.bean.plan.health;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class HealthInformation {
	private String historyAndInfo;
	private String conditions;
	private boolean takeMedication;
	private boolean assistanceWithMedication;
	private boolean selfMedicate;
	private String allMedicalInfo;
	private String additionalInfo;
	
	
	public HealthInformation() {}


	public HealthInformation(String historyAndInfo, String conditions,
			boolean takeMedication, boolean assistanceWithMedication,
			boolean selfMedicate, String allMedicalInfo, String additionalInfo) {
		this.historyAndInfo = historyAndInfo;
		this.conditions = conditions;
		this.takeMedication = takeMedication;
		this.assistanceWithMedication = assistanceWithMedication;
		this.selfMedicate = selfMedicate;
		this.allMedicalInfo = allMedicalInfo;
		this.additionalInfo = additionalInfo;
	}


	public String getHistoryAndInfo() {
		return historyAndInfo;
	}


	public void setHistoryAndInfo(String historyAndInfo) {
		this.historyAndInfo = historyAndInfo;
	}


	public String getConditions() {
		return conditions;
	}


	public void setConditions(String conditions) {
		this.conditions = conditions;
	}


	public boolean isTakeMedication() {
		return takeMedication;
	}


	public void setTakeMedication(boolean takeMedication) {
		this.takeMedication = takeMedication;
	}


	public boolean isAssistanceWithMedication() {
		return assistanceWithMedication;
	}


	public void setAssistanceWithMedication(boolean assistanceWithMedication) {
		this.assistanceWithMedication = assistanceWithMedication;
	}


	public boolean isSelfMedicate() {
		return selfMedicate;
	}


	public void setSelfMedicate(boolean selfMedicate) {
		this.selfMedicate = selfMedicate;
	}


	public String getAllMedicalInfo() {
		return allMedicalInfo;
	}


	public void setAllMedicalInfo(String allMedicalInfo) {
		this.allMedicalInfo = allMedicalInfo;
	}


	public String getAdditionalInfo() {
		return additionalInfo;
	}


	public void setAdditionalInfo(String additionalInfo) {
		this.additionalInfo = additionalInfo;
	}

	
	
}
