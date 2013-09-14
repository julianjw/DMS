package qut.endeavour.rest.bean.plan;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PersonalPlan {

	private ClientDetails cd;
	private HealthDetails hd;
	/*private List<SupportRequired> sr;
	private List<Communication> com;
	private List<EducationEmployment> ee;
	private List<Planning> planning;*/
	
	
	public PersonalPlan(
			ClientDetails cd,
			HealthDetails hd/*,
			List<HealthDetails> hd,
			List<SupportRequired> sr,
			List<Communication> com,
			List<EducationEmployment> ee,
			List<Planning> planning*/
			) {
		
		this.cd = cd;
		this.hd = hd;/*
		this.sr = sr;
		this.com = com;
		this.ee = ee;
		this.planning = planning;*/
		
	}
	
	public PersonalPlan() {} // used to create bean from JSON
	
	
//	@XmlElement( name = "clientdetails")
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
	
	
}
