package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ContactDetails {
	public String name;
	public String relationship;
	public String contactDetails;
	public String contactType;
	
	public ContactDetails() {}

	public ContactDetails(String name, String relationship,
			String contactDetails, String contactType) {
		this.name = name;
		this.relationship = relationship;
		this.contactDetails = contactDetails;
		this.contactType = contactType;
	}
	
	
}
