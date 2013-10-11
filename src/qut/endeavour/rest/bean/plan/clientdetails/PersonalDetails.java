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
	
	private String preferredName;
	private String dob;
	
	private String email;
	private String phoneNumber;
	private String mobileNumber;
	
	private String creationDate;
	private String reviewDate;
	
	/**
	 * Does not go in database.
	 */
//	public String photoURL;
	
	public PersonalDetails() {}

	public PersonalDetails(
			String preferredName,
			String dob,
			String email,
			String phoneNumber,
			String mobileNumber,
			String creationDate,
			String reviewDate
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

	public String getPreferredName() {
		return preferredName;
	}

	public void setPreferredName(String preferredName) {
		this.preferredName = preferredName;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}

	public String getReviewDate() {
		return reviewDate;
	}

	public void setReviewDate(String reviewDate) {
		this.reviewDate = reviewDate;
	}
	
	
	
}
