package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class GeneralSupport {
	private String CrowdSafety;
	private String StrangerDanger;
	private String MoneyHandling;
	private String Crowds;
	private String SocialNetworks;
	private String Communications;
	private String EatingOut;
	private String Beliefs;
	private String Leisure;
	private String UsingApplicances;
	private String UsingChemical;
	private String HazardRecognition;
	private String OtherSafetyInfo;
	
	/**
	 * 
	 * @param CrowdSafety
	 * @param StrangerDanger
	 * @param MoneyHandling
	 * @param Crowds
	 * @param SocialNetworks
	 * @param Communications
	 * @param EatingOut
	 * @param Beliefs
	 * @param Leisure
	 * @param UsingApplicances
	 * @param UsingChemical
	 * @param HazardRecognition
	 * @param OtherSafetyInfo
	 */
	public GeneralSupport(
			String CrowdSafety,
			String StrangerDanger,
			String MoneyHandling,
			String Crowds,
			String SocialNetworks,
			String Communications,
			String EatingOut,
			String Beliefs,
			String Leisure,
			String UsingApplicances,
			String UsingChemical,
			String HazardRecognition,
			String OtherSafetyInfo
			) {
		
		this.CrowdSafety = CrowdSafety;
		this.StrangerDanger = StrangerDanger;
		this.MoneyHandling = MoneyHandling;
		this.Crowds = Crowds;
		this.SocialNetworks = SocialNetworks;
		this.Communications = Communications;
		this.EatingOut = EatingOut;
		this.Beliefs = Beliefs;
		this.Leisure = Leisure;
		this.UsingApplicances = UsingApplicances;
		this.UsingChemical = UsingChemical;
		this.HazardRecognition = HazardRecognition;
		this.OtherSafetyInfo = OtherSafetyInfo;
		
	}
	
	
	
	public GeneralSupport() {}
	
	
	
	public String getCrowdSafety() {
		return this.CrowdSafety;
	}
	public void setCrowdSafety( String CrowdSafety ) {
		this.CrowdSafety = CrowdSafety;
	}
	
	
	
	public String getStrangerDanger() {
		return this.StrangerDanger;
	}
	public void setStrangerDanger( String StrangerDanger ) {
		this.StrangerDanger = StrangerDanger;
	}
	
	
	
	public String getMoneyHandling() {
		return this.MoneyHandling;
	}
	public void setMoneyHandling( String MoneyHandling ) {
		this.MoneyHandling = MoneyHandling;
	}
	
	
	
	public String getCrowds() {
		return this.Crowds;
	}
	public void setCrowds( String Crowds ) {
		this.Crowds = Crowds;
	}
	
	
	
	public String getSocialNetworks() {
		return this.SocialNetworks;
	}
	public void setSocialNetworks( String SocialNetworks ) {
		this.SocialNetworks = SocialNetworks;
	}
	
	
	
	public String getCommunications() {
		return this.Communications;
	}
	public void setCommunications(String Communications) {
		this.Communications = Communications;
	}
	
	
	
	public String getEatingOut() {
		return this.EatingOut;
	}
	public void setEatingOut( String EatingOut ) {
		this.EatingOut = EatingOut;
	}
	
	
	
	public String getBeliefs() {
		return this.Beliefs;
	}
	public void setBeliefs( String Beliefs ) {
		this.Beliefs = Beliefs;
	}
	
	
	
	public String getLeisure() {
		return this.Leisure;
	}
	public void setLeisure( String Leisure ) {
		this.Leisure = Leisure;
	}
	
	
	
	public String getUsingApplicances() {
		return this.UsingApplicances;
	}
	public void setUsingApplicances( String UsingApplicances ) {
		this.UsingApplicances = UsingApplicances;
	}
	
	
	
	public String getUsingChemical() {
		return this.UsingChemical;
	}
	public void setUsingChemical( String UsingChemical ) {
		this.UsingChemical = UsingChemical;
	}
	
	
	
	public String getHazardRecognition() {
		return this.HazardRecognition;
	}
	public void setHazardRecognition(String HazardRecognition) {
		this.HazardRecognition = HazardRecognition;
	}
	
	
	
	public String getOtherSafetyInfo() {
		return this.OtherSafetyInfo;
	}
	public void setOtherSafetyInfo(String OtherSafetyInfo) {
		this.OtherSafetyInfo = OtherSafetyInfo;
	}
}
