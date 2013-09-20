package qut.endeavour.rest.bean;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AuthRole {
	public static enum Role {
		INVALID(""), CLIENT("client"), SW("sw"), RDO("r&do"), SDIM("sdim"), SOM("som"), SC("sc");
		
		private final String value;
		private Role( String value ) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}
	}
	
	Role r;
	
	public AuthRole(){}
	
	public AuthRole( Role r ) {
		this.r = r;
	}
	
	@XmlElement(name="role")
	public String getRole() {
		return this.r.getValue();
	}
}
