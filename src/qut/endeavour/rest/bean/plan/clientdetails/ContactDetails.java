package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ContactDetails {
	private String name;
	private String relationship;
	private String contactDetails;
	private String contactType;
	
	public ContactDetails() {}

	/**
	 * 
	 * @param name
	 * @param relationship
	 * @param contactDetails
	 * @param contactType
	 */
	public ContactDetails(String name, String relationship,
			String contactDetails, String contactType) {
		this.name = name;
		this.relationship = relationship;
		this.contactDetails = contactDetails;
		this.contactType = contactType;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRelationship() {
		return relationship;
	}

	public void setRelationship(String relationship) {
		this.relationship = relationship;
	}

	public String getContactDetails() {
		return contactDetails;
	}

	public void setContactDetails(String contactDetails) {
		this.contactDetails = contactDetails;
	}

	public String getContactType() {
		return contactType;
	}

	public void setContactType(String contactType) {
		this.contactType = contactType;
	}
	
	
	
}
