package qut.endeavour.rest.bean.admin;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="user")
public class DMSUser {
	private String user_id; /* login username */
	private String rName;
	private String password;
	private String role;
	
	/**
	 * 
	 * @param user_id
	 * @param rName
	 * @param password
	 * @param role
	 */
	public DMSUser ( String user_id, String rName, String password, String role ) {
		this.user_id = user_id;
		this.rName = rName;
		this.password = password;
		this.role = role;
	}
	
	public DMSUser(){}
	
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

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
