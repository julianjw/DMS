package qut.endeavour.rest.bean;

import java.util.Map;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AuthRole {
	
	public static Map<String, Role> roles = null;
	
	public static enum Role {
		INVALID(""), CLIENT("client"), SW("sw"), RDO("r&do"), SDIM("sdim"), SOM("som"), SC("sc");
		
		private final String value;
		Role( String value ) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}
	}
	
	Role role;
	
	public AuthRole(){}
	
	/**
	 * Set role
	 * @param role
	 */
	public AuthRole( String role ) {
		if ( role.toLowerCase().equals(AuthRole.Role.CLIENT.getValue()) )
			this.role = AuthRole.Role.CLIENT; else
		if ( role.toLowerCase().equals(AuthRole.Role.SW.getValue()) )
			this.role = AuthRole.Role.SW; else
		if ( role.toLowerCase().equals(AuthRole.Role.SC.getValue()) )
			this.role = AuthRole.Role.SC; else
		if ( role.toLowerCase().equals(AuthRole.Role.SDIM.getValue()) )
			this.role = AuthRole.Role.SDIM; else
		if ( role.toLowerCase().equals(AuthRole.Role.SOM.getValue()) )
			this.role = AuthRole.Role.SOM; else
		if ( role.toLowerCase().equals(AuthRole.Role.RDO.getValue()) )
			this.role = AuthRole.Role.RDO; else
				this.role = AuthRole.Role.INVALID;
	}
	
	
	@XmlElement(name="role")
	public String getRole() {
		return this.role.getValue();
	}

}
