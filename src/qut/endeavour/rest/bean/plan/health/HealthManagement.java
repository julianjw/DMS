package qut.endeavour.rest.bean.plan.health;

public class HealthManagement {
	private String MedicalCondition;
	private String Symptom;
	private String Precurser;
	private String Duration;
	private int Frequency;
	private String OrderOfFrequency;
	private String StaffResponse;
	private String SymptomAvoidance;
	private String SeizureBrief;
	private String SeizureNonBrief;
	
	/**
	 * 
	 * @param MedicalCondition
	 * @param Symptom
	 * @param Precurser
	 * @param Duration
	 * @param Frequency
	 * @param OrderOfFrequency
	 * @param StaffResponse
	 * @param SymptomAvoidance
	 * @param SeizureBrief
	 * @param SeizureNonBrief
	 */
	public HealthManagement(
			String MedicalCondition,
			String Symptom,
			String Precurser,
			String Duration,
			int Frequency,
			String OrderOfFrequency,
			String StaffResponse,
			String SymptomAvoidance,
			String SeizureBrief,
			String SeizureNonBrief
			) {
		
		this.MedicalCondition = MedicalCondition;
		this.Symptom = Symptom;
		this.Precurser = Precurser;
		this.Duration = Duration;
		this.Frequency = Frequency;
		this.OrderOfFrequency = OrderOfFrequency;
		this.StaffResponse = StaffResponse;
		this.SymptomAvoidance = SymptomAvoidance;
		this.SeizureBrief = SeizureBrief;
		this.SeizureNonBrief = SeizureNonBrief;
	}
	
	public HealthManagement() {}
	
	
	
	public String getMedicalCondition() {
		return this.MedicalCondition;
	}
	public void setMedicalCondition( String MedicalCondition ) {
		this.MedicalCondition = MedicalCondition;
	}
	
	
	
	public String getSymptom() {
		return this.Symptom;
	}
	public void setSymptom( String Symptom ) {
		this.Symptom = Symptom;
	}
	
	
	
	public String getPrecurser() {
		return this.Precurser;
	}
	public void setPrecurser( String Precurser ) {
		this.Precurser = Precurser;
	}
	
	
	
	public String getDuration() {
		return this.Duration;
	}
	public void setDuration( String Duration ) {
		this.Duration = Duration;
	}
	
	
	
	public int getFrequency() {
		return this.Frequency;
	}
	public void setFrequency(int Frequency) {
		this.Frequency = Frequency;
	}
	
	
	
	public String getOrderOfFrequency() {
		return this.OrderOfFrequency;
	}
	public void setOrderOfFrequency( String OrderOfFrequency ) {
		this.OrderOfFrequency = OrderOfFrequency;
	}
	
	
	
	public String getStaffResponse() {
		return this.StaffResponse;
	}
	public void setStaffResponse( String StaffResponse ) {
		this.StaffResponse = StaffResponse;
	}
	
	
	
	public String getSymptomAvoidance() {
		return this.SymptomAvoidance;
	}
	public void setSymptomAvoidance( String SymptomAvoidance ) {
		this.SymptomAvoidance = SymptomAvoidance;
	}
	
	
	
	public String getSeizureBrief() {
		return this.SeizureBrief;
	}
	public void setSeizureBrief( String SeizureBrief ) {
		this.SeizureBrief = SeizureBrief;
	}
	
	
	
	public String getSeizureNonBrief() {
		return this.SeizureNonBrief;
	}
	public void setSeizureNonBrief( String SeizureNonBrief ) {
		this.SeizureNonBrief = SeizureNonBrief;
	}
	
}
