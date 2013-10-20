package qut.endeavour.rest.bean.admin;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PasswordChange {
	String oldPassword;
	String newPassword;
	
	public PasswordChange() {}

	public PasswordChange(String oldPassword, String newPassword) {
		super();
		this.oldPassword = oldPassword;
		this.newPassword = newPassword;
	}

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
	
	
	
}
