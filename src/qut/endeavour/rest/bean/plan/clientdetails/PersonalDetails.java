package qut.endeavour.rest.bean.plan.clientdetails;


import javax.xml.bind.annotation.XmlRootElement;

/**
 * 
 * @author Steven
 *
 */
@XmlRootElement
public class PersonalDetails {
	
	// user_id
	
	public String clientName;
	public String preferredName;
	public String username;
	
	public String email;
	public String phoneNumber;
	public String mobileNumber;
	
	public String creationDate;
	public String reviewDate;
	
	/**
	 * Does not go in database.
	 */
	public String photoURL;
	
	public PersonalDetails() {}

	public PersonalDetails(String clientName, String preferredName,
			String username, String email, String phoneNumber,
			String mobileNumber, String creationDate, String reviewDate,
			String photoURL) {
		this.clientName = clientName;
		this.preferredName = preferredName;
		this.username = username;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.mobileNumber = mobileNumber;
		this.creationDate = creationDate;
		this.reviewDate = reviewDate;
		this.photoURL = photoURL;
	}
}
