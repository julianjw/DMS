package qut.endeavour.rest.bean.admin;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Authentication {
	private String username;
	private String token;
	
	public Authentication(){}

	public Authentication(String username, String token) {
		super();
		this.username = username;
		this.token = token;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}
