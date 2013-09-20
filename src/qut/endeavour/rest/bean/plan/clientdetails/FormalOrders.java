package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class FormalOrders {
	public String orderFor; // varchar
	public String appointee; // varchar
	public String details;
	public String orderLocation;
	public String otherInfo;
	public String childSupportOfficer; // varchar
	public String visitorInfo;
	public String protectionOrder;
	public String commenceDate; // DATE
	public String justiceRequirements;
	public String familyContact;
	public String contactArrangement;
	public String specialConditions;
	
	public FormalOrders() {}

	public FormalOrders(String orderFor, String appointee, String details,
			String orderLocation, String otherInfo, String childSupportOfficer,
			String visitorInfo, String protectionOrder, String commenceDate,
			String justiceRequirements, String familyContact,
			String contactArrangement, String specialConditions) {
		this.orderFor = orderFor;
		this.appointee = appointee;
		this.details = details;
		this.orderLocation = orderLocation;
		this.otherInfo = otherInfo;
		this.childSupportOfficer = childSupportOfficer;
		this.visitorInfo = visitorInfo;
		this.protectionOrder = protectionOrder;
		this.commenceDate = commenceDate;
		this.justiceRequirements = justiceRequirements;
		this.familyContact = familyContact;
		this.contactArrangement = contactArrangement;
		this.specialConditions = specialConditions;
	}
	
	
}
