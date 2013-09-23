package qut.endeavour.rest.bean.plan;

import javax.xml.bind.annotation.XmlRootElement;

import qut.endeavour.rest.bean.plan.health.HealthDietary;
import qut.endeavour.rest.bean.plan.health.HealthInformation;
import qut.endeavour.rest.bean.plan.health.HealthManagement;

@XmlRootElement
public class HealthDetails {
	private HealthInformation healthInformation;
	private HealthManagement healthManagement;
	private HealthDietary dietaryRequirements;
	
	/**
	 * 
	 * @param healthInformation
	 * @param healthManagement
	 * @param dietaryRequirements
	 */
	public HealthDetails(
			HealthInformation healthInformation,
			HealthManagement healthManagement,
			HealthDietary dietaryRequirements
			){
		
		this.healthInformation = healthInformation;
		this.healthManagement = healthManagement;
		this.dietaryRequirements = dietaryRequirements;
	}
	
	public HealthDetails() {} // empty constructor
	
	
	public HealthInformation getHealthInformation() {
		return this.healthInformation;
	}
	public void setHealthInformation( HealthInformation healthInformation ) {
		this.healthInformation = healthInformation;
	}
	
	public HealthManagement getHealthManagement() {
		return healthManagement;
	}
	public void setHealthManagement( HealthManagement healthManagement ) {
		this.healthManagement = healthManagement;
	}
	
	public HealthDietary getDietaryRequirements() {
		return this.dietaryRequirements;
	}
	public void setDietaryRequirements( HealthDietary dietaryRequirements ) {
		this.dietaryRequirements = dietaryRequirements;
	}
}
