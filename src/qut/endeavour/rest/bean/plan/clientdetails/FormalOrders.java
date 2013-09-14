package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class FormalOrders {
	private String OrderFor;
	private String Appointee;
	private String Details;
	private String OrderLocation;
	private String OtherInfo;
	private String SupportOfficerDetails;
	private String VisitorInfo;
	private String ProtOrderDetails;
	private String CommenceDate;
	private String JusticeRequirements;
	private String FamilyContactDetails;
	private String ContactArrangement;
	private String SpecialConditions;
	
	/**
	 * 
	 * @param OrderFor
	 * @param Appointee
	 * @param Details
	 * @param OrderLocation
	 * @param OtherInfo
	 * @param SupportOfficerDetails
	 * @param VisitorInfo
	 * @param ProtOrderDetails
	 * @param CommenceDate
	 * @param JusticeRequirements
	 * @param FamilyContactDetails
	 * @param ContactArrangement
	 * @param SpecialConditions
	 */
	public FormalOrders(
			String OrderFor,
			String Appointee,
			String Details,
			String OrderLocation,
			String OtherInfo,
			String SupportOfficerDetails,
			String VisitorInfo,
			String ProtOrderDetails,
			String CommenceDate,
			String JusticeRequirements,
			String FamilyContactDetails,
			String ContactArrangement,
			String SpecialConditions
			) {
		
		this.OrderFor = OrderFor;
		this.Appointee = Appointee;
		this.Details = Details;
		this.OrderLocation = OrderLocation;
		this.OtherInfo = OtherInfo;
		this.SupportOfficerDetails = SupportOfficerDetails;
		this.VisitorInfo = VisitorInfo;
		this.ProtOrderDetails = ProtOrderDetails;
		this.CommenceDate = CommenceDate;
		this.JusticeRequirements = JusticeRequirements;
		this.FamilyContactDetails = FamilyContactDetails;
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
	
	public String getSupportOfficerDetails() {
		return this.SupportOfficerDetails;
	}
	
	public void setSupportOfficerDetails(String SupportOfficerDetails) {
		this.SupportOfficerDetails = SupportOfficerDetails;
	}
	
	public String getVisitorInfo() {
		return this.VisitorInfo;
	}
	
	public void setVisitorInfo( String VisitorInfo ) {
		this.VisitorInfo = VisitorInfo;
	}
	
	public String getProtOrderDetails() {
		return this.ProtOrderDetails;
	}
	
	public void setProtOrderDetails( String ProtOrderDetails ) {
		this.ProtOrderDetails = ProtOrderDetails;
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
	
	public String getFamilyContactDetails() {
		return this.FamilyContactDetails;
	}
	
	public void setFamilyContactDetails( String FamilyContactDetails ) {
		this.FamilyContactDetails = FamilyContactDetails;
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
