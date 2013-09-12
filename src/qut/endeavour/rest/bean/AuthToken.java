package qut.endeavour.rest.bean;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

/**
 * @author Steven
 * 
 * Basic token element
 *
 */
@XmlRootElement
public class AuthToken {
	private String tokenId;
	
	public AuthToken() {}
	
	public AuthToken( String tokenId ) {
		this.tokenId = tokenId;
	}
	
	/**
	 * String representation of token
	 * @return
	 */
	@XmlElement(name="tokenId")
	public String getTokenId() {
		return tokenId;
	}
	
	/**
	 * String representation of token 
	 */
	public String toString() {
		return getTokenId();
	}
}
