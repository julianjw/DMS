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
	
	public String preferredName;
	public String dob;
	
	public String email;
	public String phoneNumber;
	public String mobileNumber;
	
	
	public String creationDate;
	public String reviewDate;
	
	/**
	 * Does not go in database.
	 */
//	public String photoURL;
	
	public PersonalDetails() {}

	public PersonalDetails(String preferredName,
			String dob, String email, String phoneNumber,
			String mobileNumber, String creationDate, String reviewDate
			) {
		this.preferredName = preferredName;
		this.dob = dob;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.mobileNumber = mobileNumber;
		this.creationDate = creationDate;
		this.reviewDate = reviewDate;
//		this.photoURL = photoURL;
	}
}
