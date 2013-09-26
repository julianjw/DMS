package qut.endeavour.rest.bean.plan;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ExistingPlanDetails {
	private String user_id;
	private String rName;
	private String dob;
	private String telephone;
	private String mobile;
	
	public ExistingPlanDetails(){}

	public ExistingPlanDetails(String user_id, String rName, String dob,
			String telephone, String mobile) {
		this.user_id = user_id;
		this.rName = rName;
		this.dob = dob;
		this.telephone = telephone;
		this.mobile = mobile;
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

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	
	
	
	
}