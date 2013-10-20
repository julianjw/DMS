package qut.endeavour.rest.bean.admin;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DMSClientUser {
	private String user_id; /* login username */
	private String rName;
	private String dob;
	private String mobile;
	private String telephone;
	
	public DMSClientUser() {}

	public DMSClientUser(String user_id, String rName, String dob,
			String mobile, String telephone) {
		super();
		this.user_id = user_id;
		this.rName = rName;
		this.dob = dob;
		this.mobile = mobile;
		this.telephone = telephone;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getrName() {
		return rName;
	}

	public void setrName(String rName) {
		this.rName = rName;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	
	
	
}
