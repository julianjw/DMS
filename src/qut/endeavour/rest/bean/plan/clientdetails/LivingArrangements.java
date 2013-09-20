package qut.endeavour.rest.bean.plan.clientdetails;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LivingArrangements {
	public String service;

	public String houseNumber;
	public String street;
	public String suburb;
	public int postCode;
	public String city;
	
	public List<ContactDetails> familyMembers;
	public List<ContactDetails> importantPerson;
	public ContactDetails sickContact;
	
//	public LivingArrangements() {}
	
	public LivingArrangements(String service, String houseNumber,
			String street, String suburb, int postCode, String city,
			List<ContactDetails> familyMembers,
			List<ContactDetails> importantPerson, ContactDetails sickContact) {
		this.service = service;
		this.houseNumber = houseNumber;
		this.street = street;
		this.suburb = suburb;
		this.postCode = postCode;
		this.city = city;
		this.familyMembers = familyMembers;
		this.importantPerson = importantPerson;
		this.sickContact = sickContact;
	}
	
}
