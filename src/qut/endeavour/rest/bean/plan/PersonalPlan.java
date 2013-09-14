package qut.endeavour.rest.bean.plan;

import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class PersonalPlan {

	private ClientDetails cd;
	/*private List<HealthDetails> hd;
	private List<SupportRequired> sr;
	private List<Communication> com;
	private List<EducationEmployment> ee;
	private List<Planning> planning;*/
	
	
	public PersonalPlan(
			ClientDetails cd/*,
			List<HealthDetails> hd,
			List<SupportRequired> sr,
			List<Communication> com,
			List<EducationEmployment> ee,
			List<Planning> planning*/
			) {
		
		this.cd = cd;/*
		this.hd = hd;
		this.sr = sr;
		this.com = com;
		this.ee = ee;
		this.planning = planning;*/
		
	}
	
	public PersonalPlan() {} // used to create bean from JSON
	
	
	@XmlElement( name = "clientdetails")
	public ClientDetails getClientDetails(){
		return this.cd;
	}
	
	public void setClientDetails(ClientDetails cd){
		this.cd = cd;
	}
	
	/*
	@XmlElement
	public List<HealthDetails> getHealthDetails(){
		return this.hd;
	}
	
	@XmlElement
	public List<SupportRequired> getSupportRequired(){
		return this.sr;
	}
	
	@XmlElement
	public List<Communication> getCommunication(){
		return this.com;
	}
	
	@XmlElement
	public List<EducationEmployment> getEducationEmployment(){
		return this.ee;
	}
	
	@XmlElement
	public List<Planning> getPlanning(){
		return this.planning;
	}*/
	
}
