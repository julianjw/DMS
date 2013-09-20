package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AlertInformation {
	public String allergies;
	public String medIssues;
	public String eatingAlerts;
	public String safetyConcerns;
	public String restrictive;
	public String guardianOrders;
	public String complexSupportNeeds;
	public String phobias;
	public String otherInfo;
	
	AlertInformation() {}

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
	
	
	
}
