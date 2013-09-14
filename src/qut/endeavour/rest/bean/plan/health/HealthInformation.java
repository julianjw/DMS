package qut.endeavour.rest.bean.plan.health;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class HealthInformation {
	private String HistoryAndInfo;
	private String Conditions;
	private boolean TakeMedication;
	private boolean AssistanceWithMedication;
	private boolean SelfMedicate;
	private String AllMedicalInfo;
	private String AdditionalInfo;
	
	/**
	 * 
	 * @param HistoryAndInfo
	 * @param Conditions
	 * @param TakeMedication
	 * @param AssistanceWithMedication
	 * @param SelfMedicate
	 * @param AllMedicalInfo
	 * @param AdditionalInfo
	 */
	public HealthInformation(
			String HistoryAndInfo,
			String Conditions,
			boolean TakeMedication,
			boolean AssistanceWithMedication,
			boolean SelfMedicate,
			String AllMedicalInfo,
			String AdditionalInfo
			) {
		
		this.HistoryAndInfo = HistoryAndInfo;
		this.Conditions = Conditions;
		this.TakeMedication = TakeMedication;
		this.AssistanceWithMedication = AssistanceWithMedication;
		this.SelfMedicate = SelfMedicate;
		this.AllMedicalInfo = AllMedicalInfo;
		this.AdditionalInfo = AdditionalInfo;
	}
	
	public HealthInformation() {}
	
	public String getHistoryAndInfo() {
		return this.HistoryAndInfo;
	}
	
	public void setHistoryAndInfo( String HistoryAndInfo ) {
		this.HistoryAndInfo = HistoryAndInfo;
	}
	
	public String getConditions() {
		return this.Conditions;
	}
	
	public void setConditions( String Conditions ) {
		this.Conditions = Conditions;
	}
	
	public boolean getTakeMedication() {
		return this.TakeMedication;
	}
	
	public void setTakeMedication( boolean TakeMedication ) {
		this.TakeMedication = TakeMedication;
	}
	
	public boolean getAssistanceWithMedication() {
		return this.AssistanceWithMedication;
	}
	
	public void setAssistanceWithMedication( boolean AssistanceWithMedication ) {
		this.AssistanceWithMedication = AssistanceWithMedication;
	}
	
	public boolean getSelfMedicate() {
		return this.SelfMedicate;
	}
	
	public void setSelfMedicate( boolean SelfMedicate ) {
		this.SelfMedicate = SelfMedicate;
	}
	
	public String getAllMedicalInfo() {
		return this.AllMedicalInfo;
	}
	
	public void setAllMedicalInfo(String AllMedicalInfo) {
		this.AllMedicalInfo = AllMedicalInfo;
	}
	
	public String getAdditionalInfo() {
		return this.AdditionalInfo;
	}
	
	public void setAdditionalInfo( String AdditionalInfo ) {
		this.AdditionalInfo = AdditionalInfo;
	}
	
	
}
