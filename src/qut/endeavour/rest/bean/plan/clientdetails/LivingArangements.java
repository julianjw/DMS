package qut.endeavour.rest.bean.plan.clientdetails;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LivingArangements {
	private String Service;
	private String Address;
	private String PhoneNumber;
	private List<ContactDetails> FamilyMembers;
	private String SickContact;
	private List<ContactDetails> ImportantPerson;
	
	/**
	 * 
	 * @param Service
	 * @param Address
	 * @param PhoneNumber
	 * @param FamilyMembers
	 * @param SickContact
	 * @param ImportantPerson
	 */
	public LivingArangements(
			String Service,
			String Address,
			String PhoneNumber,
			List<ContactDetails> FamilyMembers,
			String SickContact,
			List<ContactDetails> ImportantPerson
			) {
		
		this.Service = Service;
		this.Address = Address;
		this.PhoneNumber = PhoneNumber;
		this.FamilyMembers = FamilyMembers;
		this.SickContact = SickContact;
		this.ImportantPerson = ImportantPerson;
	}
	
	public LivingArangements() {}
	
	public String getService() {
		return this.Service;
	}
	
	public void setService( String Service ) {
		this.Service = Service;
	}
	
	public String getAddress() {
		return this.Address;
	}
	
	public void setAddress( String Address ) {
		this.Address = Address;
	}
	
	public String getPhoneNumber() {
		return this.PhoneNumber;
	}
	
	public void setPhoneNumber( String PhoneNumber ) {
		this.PhoneNumber = PhoneNumber;
	}
		
	public List<ContactDetails> getFamilyMembers() {
		return this.FamilyMembers;
	}

	public void setFamilyMembers( List<ContactDetails> FamilyMembers ) {
		this.FamilyMembers = FamilyMembers;
	}
	
	public String getSickContact() {
		return this.SickContact;
	}
	
	public void setSickContact( String SickContact ) {
		this.SickContact = SickContact;
	}
	
	public List<ContactDetails> getImportantPerson() {
		return this.ImportantPerson;
	}
	
	public void setImportantPerson( List<ContactDetails> ImportantPerson) {
		this.ImportantPerson = ImportantPerson;
	}
	
}
