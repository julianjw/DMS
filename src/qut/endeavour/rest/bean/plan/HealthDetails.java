package qut.endeavour.rest.bean.plan;

import qut.endeavour.rest.bean.plan.health.DietaryRequirements;
import qut.endeavour.rest.bean.plan.health.HealthInformation;
import qut.endeavour.rest.bean.plan.health.HealthManagement;


public class HealthDetails {
	private HealthInformation healthInformation;
	private HealthManagement healthManagement;
	private DietaryRequirements dietaryRequirements;
	
	/**
	 * 
	 * @param healthInformation
	 * @param healthManagement
	 * @param dietaryRequirements
	 */
	public HealthDetails(
			HealthInformation healthInformation,
			HealthManagement healthManagement,
			DietaryRequirements dietaryRequirements
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
	
	
	
	
	public DietaryRequirements getDietaryRequirements() {
		return this.dietaryRequirements;
	}
	public void setDietaryRequirements( DietaryRequirements dietaryRequirements ) {
		this.dietaryRequirements = dietaryRequirements;
	}
}
