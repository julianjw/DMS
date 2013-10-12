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
	private String familyMembers;
	private String sickContact;
	private String importantPerson;
	
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
	public LivingArrangements(
			String service,
			String street,
			String houseNumber,
			String suburb,
			int postCode,
			String city,
			String familyMembers,
			String sickContact,
			String importantPerson
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

	public String getFamilyMembers() {
		return familyMembers;
	}

	public void setFamilyMembers(String familyMembers) {
		this.familyMembers = familyMembers;
	}

	public String getSickContact() {
		return sickContact;
	}

	public void setSickContact(String sickContact) {
		this.sickContact = sickContact;
	}

	public String getImportantPerson() {
		return importantPerson;
	}

	public void setImportantPerson(String importantPerson) {
		this.importantPerson = importantPerson;
	}
	
	
}
