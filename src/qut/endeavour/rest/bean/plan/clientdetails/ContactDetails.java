package qut.endeavour.rest.bean.plan.clientdetails;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ContactDetails {
	private String Name;
	private String Relationship;
	private String contactDetails;
	
	/**
	 * 
	 * @param Name
	 * @param Relationship
	 * @param contactDetails
	 */
	public ContactDetails(
			String Name,
			String Relationship,
			String contactDetails
			) {
		
		this.Name = Name;
		this.Relationship = Relationship;
		this.contactDetails = contactDetails;
	}
	
	public ContactDetails() {}
	
	public String getName() {
		return this.Name;
	}
	
	public void setName( String Name ) {
		this.Name = Name;
	}
	
	public String getRelationship() {
		return this.Relationship;
	}
	
	public void setRelationship( String Relationship ) {
		this.Relationship = Relationship;
	}
	
	public String getcontactDetails() {
		return this.contactDetails;
	}
	
	public void setcontactDetails( String contactDetails ) {
		this.contactDetails = contactDetails;
	}
}
