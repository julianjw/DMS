package qut.endeavour.rest.bean.plan;

import javax.xml.bind.annotation.XmlRootElement;

import qut.endeavour.rest.bean.plan.clientdetails.AlertInformation;
import qut.endeavour.rest.bean.plan.clientdetails.FormalOrders;
import qut.endeavour.rest.bean.plan.clientdetails.LivingArrangements;
import qut.endeavour.rest.bean.plan.clientdetails.PersonalDetails;

@XmlRootElement
public class ClientDetails {
	
	private PersonalDetails pd;
	private AlertInformation ai;
	private LivingArrangements la;
	private FormalOrders fo;
	
	public ClientDetails(
			PersonalDetails pd,
			AlertInformation ai,
			LivingArrangements la,
			FormalOrders fo
			){
		
		this.pd = pd;
		this.ai = ai;
		this.la = la;
		this.fo = fo;
	}
	
	public ClientDetails() {} // empty constructor
	
	public PersonalDetails getPersonalDetails() {
		return this.pd;
	}
	
	public void setPersonalDetails( PersonalDetails pd ) {
		this.pd = pd;
	}
	
	public AlertInformation getAlertInformation() {
		return ai;
	}
	
	public void setAlertInformation( AlertInformation ai ) {
		this.ai = ai;
	}
	
	public LivingArrangements getLivingArangements() {
		return this.la;
	}
	
	public void setLivingArangements( LivingArrangements la ) {
		this.la = la;
	}
	
	public FormalOrders getFormalOrders() {
		return this.fo;
	}
	
	public void setFormalOrders( FormalOrders fo ) {
		this.fo = fo;
	}

}
