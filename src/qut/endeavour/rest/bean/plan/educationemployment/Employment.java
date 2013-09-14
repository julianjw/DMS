package qut.endeavour.rest.bean.plan.educationemployment;


import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Employment {
	private String Employer;
	private String Address;
	private String ContactPerson;
	private String Position;
	private String Arrangements;
	private String Transport;
	private String AnnualLeave;
	private String SickLeave;
	private String Equipment;
	
	
	/**
	 * 
	 * @param Employer
	 * @param Address
	 */
	public Employment(
			String Employer,
			String Address,
			String ContactPerson,
			String Position,
			String Arrangements,
			String Transport,
			String AnnualLeave,
			String SickLeave,
			String Equipment
			) {
		
		this.Employer = Employer;
		this.Address = Address;
		this.ContactPerson = ContactPerson;
		this.Position = Position;
		this.Arrangements = Arrangements;
		this.Transport = Transport;
		this.AnnualLeave = AnnualLeave;
		this.SickLeave = SickLeave;
		this.Equipment = Equipment;
		
	}
	
	
	
	public Employment() {}
	
	
	
	public String getEmployer() {
		return this.Employer;
	}
	public void setEmployer( String Employer ) {
		this.Employer = Employer;
	}
	
	
	
	public String getAddress() {
		return this.Address;
	}
	public void setAddress( String Address ) {
		this.Address = Address;
	}
	
	
	
	public String getContactPerson() {
		return this.ContactPerson;
	}
	public void setContactPerson( String ContactPerson ) {
		this.ContactPerson = ContactPerson;
	}
	
	
	
	public String getPosition() {
		return this.Position;
	}
	public void setPosition(String Position) {
		this.Position = Position;
	}
	
	
	
	public String getArrangements() {
		return this.Arrangements;
	}
	public void setArrangements( String Arrangements ) {
		this.Arrangements = Arrangements;
	}
	
	
	
	public String getTransport() {
		return this.Transport;
	}
	public void setTransport( String Transport ) {
		this.Transport = Transport;
	}
	
	
	
	public String getAnnualLeave() {
		return this.AnnualLeave;
	}
	public void setAnnualLeave( String AnnualLeave ) {
		this.AnnualLeave = AnnualLeave;
	}
	
	
	
	public String getSickLeave() {
		return this.SickLeave;
	}
	public void setSickLeave( String SickLeave ) {
		this.SickLeave = SickLeave;
	}
	
	
	
	public String getEquipment() {
		return this.Equipment;
	}
	public void setEquipment( String Equipment ) {
		this.Equipment = Equipment;
	}
}
