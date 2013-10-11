package qut.endeavour.rest.bean.plan.clientdetails;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class LivingArrangements {

	private String service;
	private String houseNumber;
	private String street;
	private String suburb;
	private int postCode;
	private String city;
	
	private List<ContactDetails> familyMembers;
	private List<ContactDetails> sickContact;
	private List<ContactDetails> importantPerson;
	
	public LivingArrangements() {}
	
	/**
	 * @param service
	 * @param houseNumber
	 * @param street
	 * @param suburb
	 * @param postCode
	 * @param city
	 * @param familyMembers
	 * @param sickContact
	 * @param importantPerson
	 */
	public LivingArrangements(String service, String houseNumber,
			String street, String suburb, int postCode, String city,
			List<ContactDetails> familyMembers,
			List<ContactDetails> sickContact,
			List<ContactDetails> importantPerson
			) {
		
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

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getHouseNumber() {
		return houseNumber;
	}

	public void setHouseNumber(String houseNumber) {
		this.houseNumber = houseNumber;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getSuburb() {
		return suburb;
	}

	public void setSuburb(String suburb) {
		this.suburb = suburb;
	}

	public int getPostCode() {
		return postCode;
	}

	public void setPostCode(int postCode) {
		this.postCode = postCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public List<ContactDetails> getFamilyMembers() {
		return familyMembers;
	}

	public void setFamilyMembers(List<ContactDetails> familyMembers) {
		this.familyMembers = familyMembers;
	}

	public List<ContactDetails> getSickContact() {
		return sickContact;
	}

	public void setSickContact(List<ContactDetails> sickContact) {
		this.sickContact = sickContact;
	}

	public List<ContactDetails> getImportantPerson() {
		return importantPerson;
	}

	public void setImportantPerson(List<ContactDetails> importantPerson) {
		this.importantPerson = importantPerson;
	}
	
	
}
