package qut.endeavour.rest.bean;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AuthResponse {
	public static enum visibility {
		FOUND,
		NOT_FOUND
	}
	
	private static String FOUND = "true";
	private static String NOT_FOUND = "false";
	
	private visibility v;
	
	public AuthResponse(){}
	
	public AuthResponse( visibility v ) {
		this.v = v;
	}
	
	@XmlElement(name="verified")
	public String getResponse() {
		if ( v == visibility.FOUND ) {
			return FOUND;
		}
		return NOT_FOUND;
	}
	
	
}
