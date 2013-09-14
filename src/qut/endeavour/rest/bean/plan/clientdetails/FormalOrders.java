package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class FormalOrders {
	private String OrderFor;
	private String Appointee;
	private String Details;
	private String OrderLocation;
	private String OtherInfo;
	private String SupportOfficer;
	private String VisitorInfo;
	private String ProtOrder;
	private String CommenceDate;
	private String JusticeRequirements;
	private String FamilyContact;
	private String ContactArrangement;
	private String SpecialConditions;
	
	/**
	 * 
	 * @param OrderFor
	 * @param Appointee
	 * @param Details
	 * @param OrderLocation
	 * @param OtherInfo
	 * @param SupportOfficer
	 * @param VisitorInfo
	 * @param ProtOrder
	 * @param CommenceDate
	 * @param JusticeRequirements
	 * @param FamilyContact
	 * @param ContactArrangement
	 * @param SpecialConditions
	 */
	public FormalOrders(
			String OrderFor,
			String Appointee,
			String Details,
			String OrderLocation,
			String OtherInfo,
			String SupportOfficer,
			String VisitorInfo,
			String ProtOrder,
			String CommenceDate,
			String JusticeRequirements,
			String FamilyContact,
			String ContactArrangement,
			String SpecialConditions
			) {
		
		this.OrderFor = OrderFor;
		this.Appointee = Appointee;
		this.Details = Details;
		this.OrderLocation = OrderLocation;
		this.OtherInfo = OtherInfo;
		this.SupportOfficer = SupportOfficer;
		this.VisitorInfo = VisitorInfo;
		this.ProtOrder = ProtOrder;
		this.CommenceDate = CommenceDate;
		this.JusticeRequirements = JusticeRequirements;
		this.FamilyContact = FamilyContact;
		this.ContactArrangement = ContactArrangement;
		this.SpecialConditions = SpecialConditions;
		
	}
	
	
	
	public FormalOrders() {}
	
	
	
	public String getOrderFor() {
		return this.OrderFor;
	}
	public void setOrderFor( String OrderFor ) {
		this.OrderFor = OrderFor;
	}
	
	
	
	public String getAppointee() {
		return this.Appointee;
	}
	public void setAppointee( String Appointee ) {
		this.Appointee = Appointee;
	}
	
	
	
	public String getDetails() {
		return this.Details;
	}
	public void setDetails( String Details ) {
		this.Details = Details;
	}
	
	
	
	public String getOrderLocation() {
		return this.OrderLocation;
	}
	public void setOrderLocation( String OrderLocation ) {
		this.OrderLocation = OrderLocation;
	}
	
	
	
	public String getOtherInfo() {
		return this.OtherInfo;
	}
	public void setOtherInfo( String OtherInfo ) {
		this.OtherInfo = OtherInfo;
	}
	
	
	
	public String getSupportOfficer() {
		return this.SupportOfficer;
	}
	public void setSupportOfficer(String SupportOfficer) {
		this.SupportOfficer = SupportOfficer;
	}
	
	
	
	public String getVisitorInfo() {
		return this.VisitorInfo;
	}
	public void setVisitorInfo( String VisitorInfo ) {
		this.VisitorInfo = VisitorInfo;
	}
	
	
	
	public String getProtOrder() {
		return this.ProtOrder;
	}
	public void setProtOrder( String ProtOrder ) {
		this.ProtOrder = ProtOrder;
	}
	
	
	
	public String getCommenceDate() {
		return this.CommenceDate;
	}
	public void setCommenceDate( String CommenceDate ) {
		this.CommenceDate = CommenceDate;
	}
	
	
	
	public String getJusticeRequirements() {
		return this.JusticeRequirements;
	}
	public void setJusticeRequirements( String JusticeRequirements ) {
		this.JusticeRequirements = JusticeRequirements;
	}
	
	
	
	public String getFamilyContact() {
		return this.FamilyContact;
	}
	public void setFamilyContact( String FamilyContact ) {
		this.FamilyContact = FamilyContact;
	}
	
	
	
	public String getContactArrangement() {
		return this.ContactArrangement;
	}
	public void setContactArrangement(String ContactArrangement) {
		this.ContactArrangement = ContactArrangement;
	}
	
	
	
	public String getSpecialConditions() {
		return this.SpecialConditions;
	}
	public void setSpecialConditions(String SpecialConditions) {
		this.SpecialConditions = SpecialConditions;
	}
}
