package qut.endeavour.rest.bean.admin;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class DMSUser {
	private String user_id;
	private String name;
	private String password;
	private String role;
	
	public DMSUser ( String user_id, String name, String password, String role ) {
		this.user_id = user_id;
		this.name = name;
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
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
