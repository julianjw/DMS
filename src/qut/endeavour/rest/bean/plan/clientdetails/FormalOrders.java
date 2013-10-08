package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class FormalOrders {
	private String orderFor; // varchar
	private String appointee; // varchar
	private String details;
	private String orderLocation;
	private String otherInfo;
	private String childSupportOfficer; // varchar
	private String visitorInfo;
	private String protectionOrder;
	private String commenceDate; // DATE
	private String justiceRequirements;
	private String familyContact;
	private String contactArrangement;
	private String specialConditions;
	
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

	public String getOrderFor() {
		return orderFor;
	}

	public void setOrderFor(String orderFor) {
		this.orderFor = orderFor;
	}

	public String getAppointee() {
		return appointee;
	}

	public void setAppointee(String appointee) {
		this.appointee = appointee;
	}

	public String getDetails() {
		return details;
	}

	public void setDetails(String details) {
		this.details = details;
	}

	public String getOrderLocation() {
		return orderLocation;
	}

	public void setOrderLocation(String orderLocation) {
		this.orderLocation = orderLocation;
	}

	public String getOtherInfo() {
		return otherInfo;
	}

	public void setOtherInfo(String otherInfo) {
		this.otherInfo = otherInfo;
	}

	public String getChildSupportOfficer() {
		return childSupportOfficer;
	}

	public void setChildSupportOfficer(String childSupportOfficer) {
		this.childSupportOfficer = childSupportOfficer;
	}

	public String getVisitorInfo() {
		return visitorInfo;
	}

	public void setVisitorInfo(String visitorInfo) {
		this.visitorInfo = visitorInfo;
	}

	public String getProtectionOrder() {
		return protectionOrder;
	}

	public void setProtectionOrder(String protectionOrder) {
		this.protectionOrder = protectionOrder;
	}

	public String getCommenceDate() {
		return commenceDate;
	}

	public void setCommenceDate(String commenceDate) {
		this.commenceDate = commenceDate;
	}

	public String getJusticeRequirements() {
		return justiceRequirements;
	}

	public void setJusticeRequirements(String justiceRequirements) {
		this.justiceRequirements = justiceRequirements;
	}

	public String getFamilyContact() {
		return familyContact;
	}

	public void setFamilyContact(String familyContact) {
		this.familyContact = familyContact;
	}

	public String getContactArrangement() {
		return contactArrangement;
	}

	public void setContactArrangement(String contactArrangement) {
		this.contactArrangement = contactArrangement;
	}

	public String getSpecialConditions() {
		return specialConditions;
	}

	public void setSpecialConditions(String specialConditions) {
		this.specialConditions = specialConditions;
	}
	
	
	
}
