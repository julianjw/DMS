package qut.endeavour.rest.bean;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Verification {
	public static enum Verified {
		SUCCESS("success"), FAILURE("failure");
		
		private final String value;
		private Verified( String value ) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}
	}
	
	Verified value;
	
	public Verification(){}
	
	public Verification( Verified value ) {
		this.value = value;
	}
	
	@XmlElement(name="verified")
	public String getVerification() {
		return this.value.getValue();
	}
}



