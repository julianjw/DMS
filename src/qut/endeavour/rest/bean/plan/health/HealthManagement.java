package qut.endeavour.rest.bean.plan.health;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class HealthManagement {
	private String medicalCondition;
	private String symptom;
	private String precurser;
	private String duration;
	private int frequency;
	private String frequencyPeriod; // week, month or year
	private String staffResponse;
	private String symptomAvoidance;
	private String seizureBrief;
	private String seizureNonBrief;
	
	public HealthManagement() {}

	/**
	 * 
	 * @param medicalCondition
	 * @param symptom
	 * @param precurser
	 * @param duration
	 * @param frequency
	 * @param frequencyPeriod
	 * @param staffResponse
	 * @param symptomAvoidance
	 * @param seizureBrief
	 * @param seizureNonBrief
	 */
	public HealthManagement(String medicalCondition, String symptom,
			String precurser, String duration, int frequency,
			String frequencyPeriod, String staffResponse,
			String symptomAvoidance, String seizureBrief, String seizureNonBrief) {
		this.medicalCondition = medicalCondition;
		this.symptom = symptom;
		this.precurser = precurser;
		this.duration = duration;
		this.frequency = frequency;
		this.frequencyPeriod = frequencyPeriod;
		this.staffResponse = staffResponse;
		this.symptomAvoidance = symptomAvoidance;
		this.seizureBrief = seizureBrief;
		this.seizureNonBrief = seizureNonBrief;
	}

	public String getMedicalCondition() {
		return medicalCondition;
	}

	public void setMedicalCondition(String medicalCondition) {
		this.medicalCondition = medicalCondition;
	}

	public String getSymptom() {
		return symptom;
	}

	public void setSymptom(String symptom) {
		this.symptom = symptom;
	}

	public String getPrecurser() {
		return precurser;
	}

	public void setPrecurser(String precurser) {
		this.precurser = precurser;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public int getFrequency() {
		return frequency;
	}

	public void setFrequency(int frequency) {
		this.frequency = frequency;
	}

	public String getFrequencyPeriod() {
		return frequencyPeriod;
	}

	public void setFrequencyPeriod(String frequencyPeriod) {
		this.frequencyPeriod = frequencyPeriod;
	}

	public String getStaffResponse() {
		return staffResponse;
	}

	public void setStaffResponse(String staffResponse) {
		this.staffResponse = staffResponse;
	}

	public String getSymptomAvoidance() {
		return symptomAvoidance;
	}

	public void setSymptomAvoidance(String symptomAvoidance) {
		this.symptomAvoidance = symptomAvoidance;
	}

	public String getSeizureBrief() {
		return seizureBrief;
	}

	public void setSeizureBrief(String seizureBrief) {
		this.seizureBrief = seizureBrief;
	}

	public String getSeizureNonBrief() {
		return seizureNonBrief;
	}

	public void setSeizureNonBrief(String seizureNonBrief) {
		this.seizureNonBrief = seizureNonBrief;
	}
	
	
	
}
