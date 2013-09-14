package qut.endeavour.rest.bean.plan.clientdetails;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PersonalDetails {
	private String clientName;
	private String preferredName;
	private String clientId;
	private String photoURL;
	private Date creationDate;
	private Date reviewDate;
	
	public PersonalDetails(
			String cn,
			String pn,
			String cid,
			String purl,
			Date cd,
			Date rd ) {
		this.clientName = cn;
		this.preferredName = pn;
		this.clientId = cid;
		this.photoURL = purl;
		this.creationDate = cd;
		this.reviewDate = rd;
	}
	
	public PersonalDetails() {}
	
	public String getClientName() {
		return this.clientName;
	}
	
	public void setClientName( String cn ) {
		this.clientName = cn;
	}
	
	public String getPreferredName() {
		return this.preferredName;
	}
	
	public void setPreferredName( String pn ) {
		this.preferredName = pn;
	}
	
	public String getClientId() {
		return this.clientId;
	}
	
	public void setClientId( String cid ) {
		this.clientId = cid;
	}
	
	public Date getCreationDate() {
		return this.creationDate;
	}
	
	public void setCreationDate( Date cd ) {
		this.creationDate = cd;
	}
	
	public Date getReviewDate() {
		return this.reviewDate;
	}
	
	public void setReviewDate(Date rd) {
		this.reviewDate = rd;
	}
	
}
