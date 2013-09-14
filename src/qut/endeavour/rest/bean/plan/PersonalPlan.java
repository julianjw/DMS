package qut.endeavour.rest.bean.plan;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PersonalPlan {

	private ClientDetails cd;
	private HealthDetails hd;
	private SupportRequired sr;
	private Communication com;
	private EducationEmployment ee;
	private Planning pl;
	
	
	public PersonalPlan(
			ClientDetails cd,
			HealthDetails hd,
			SupportRequired sr,
			Communication com,
			EducationEmployment ee,
			Planning pl
			) {
		
		this.cd = cd;
		this.hd = hd;
		this.sr = sr;
		this.com = com;
		this.ee = ee;
		this.pl = pl;
		
	}
	
	public PersonalPlan() {} // used to create bean from JSON
	
	
	public ClientDetails getClientDetails(){
		return this.cd;
	}
	public void setClientDetails(ClientDetails cd){
		this.cd = cd;
	}
	
	
	
	public HealthDetails getHealthDetails(){
		return this.hd;
	}
	public void setHealthDetails(HealthDetails hd) {
		this.hd = hd;
	}
	
	
	
	public SupportRequired getSupportRequired(){
		return this.sr;
	}
	public void setSupportRequired(SupportRequired sr) {
		this.sr = sr;
	}
	
	
	
	public Communication getCommunication(){
		return this.com;
	}
	public void setCommunication(Communication com) {
		this.com = com;
	}
	
	
	
	public EducationEmployment getEducationEmployment(){
		return this.ee;
	}
	public void setEducationEmployment(EducationEmployment ee) {
		this.ee = ee;
	}
	
	
	
	public Planning getPlanning(){
		return this.pl;
	}
	public void setPlanning(Planning pl) {
		this.pl = pl;
	}
}
