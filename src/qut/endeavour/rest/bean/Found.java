package qut.endeavour.rest.bean;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Found {
	
	private Boolean found;
	
	public Found(){}

	public Found(Boolean found) {
		super();
		this.found = found;
	}

	public Boolean getFound() {
		return found;
	}

	public void setFound(Boolean found) {
		this.found = found;
	}
	
	
	
}
