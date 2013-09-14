package qut.endeavour.rest.bean.plan.clientdetails;


import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Steven
 *
 */
@XmlRootElement
public class PersonalDetails {
	private String clientName;
	private String preferredName;
	private String clientId;
	private String address;
	private String photoURL;
	private String creationDate;
	private String reviewDate;
	
	/**
	 * 
	 * @param clientName
	 * @param preferredName
	 * @param clientId
	 * @param address
	 * @param photoURL
	 * @param creationDate
	 * @param reviewDate
	 */
	public PersonalDetails(
			String clientName,
			String preferredName,
			String clientId,
			String address,
			String photoURL,
			String creationDate,
			String reviewDate ) {
		this.clientName = clientName;
		this.preferredName = preferredName;
		this.clientId = clientId;
		this.address = address;
		this.photoURL = photoURL;
		this.creationDate = creationDate;
		this.reviewDate = reviewDate;
	}
	
	public PersonalDetails() {}
	
	public String getClientName() {
		return this.clientName;
	}
	
	public void setClientName( String clientName ) {
		this.clientName = clientName;
	}
	
	public String getPreferredName() {
		return this.preferredName;
	}
	
	public void setPreferredName( String preferredName ) {
		this.preferredName = preferredName;
	}
	
	
	
	public String getClientId() {
		return this.clientId;
	}
	public void setClientId( String clientId ) {
		this.clientId = clientId;
	}
	
	
	
	public String getAddress() {
		return this.address;
	}
	public void setAddress( String address ) {
		this.address = address;
	}
	
	
	
	public String getPhotoUrl() {
		return this.photoURL;
	}
	
	public void setPhotoUrl( String photoURL ) {
		this.photoURL = photoURL;
	}
	
	public String getCreationDate() {
		return this.creationDate;
	}
	
	public void setCreationDate( String creationDate ) {
		this.creationDate = creationDate;
	}
	
	public String getReviewDate() {
		return this.reviewDate;
	}
	
	public void setReviewDate(String reviewDate) {
		this.reviewDate = reviewDate;
	}
	
}
