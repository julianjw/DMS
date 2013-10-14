package qut.endeavour.rest.bean.risk;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RiskAssessment {

	private Integer risk_id;
	private String user_id;
	private String service;
	private String area;
	private String risk_assess_date;
	private String risk_description;
	private Integer probability;
	private Integer exposure;
	private Integer consequences;
	private String risk_controls;
	private String target_date;
	private boolean proceed;
	private String service_manager;
	private String sm_sign_date;
	private String delegated_manager;
	private String dm_sign_date;
	
	
	public RiskAssessment(){}

	/**
	 * 
	 * @param risk_id
	 * @param service
	 * @param area
	 * @param risk_assess_date
	 * @param risk_description
	 * @param probability
	 * @param exposure
	 * @param consequences
	 * @param risk_controls
	 * @param target_date
	 * @param proceed
	 * @param service_manager
	 * @param sm_sign_date
	 * @param delegated_manager
	 * @param dm_sign_date
	 */
	public RiskAssessment(Integer risk_id, String user_id, String service, String area,
			String risk_assess_date, String risk_description, Integer probability,
			Integer exposure, Integer consequences, String risk_controls,
			String target_date, boolean proceed, String service_manager,
			String sm_sign_date, String delegated_manager, String dm_sign_date) {
		super();
		this.risk_id = risk_id;
		this.user_id = user_id;
		this.service = service;
		this.area = area;
		this.risk_assess_date = risk_assess_date;
		this.risk_description = risk_description;
		this.probability = probability;
		this.exposure = exposure;
		this.consequences = consequences;
		this.risk_controls = risk_controls;
		this.target_date = target_date;
		this.proceed = proceed;
		this.service_manager = service_manager;
		this.sm_sign_date = sm_sign_date;
		this.delegated_manager = delegated_manager;
		this.dm_sign_date = dm_sign_date;
	}

	public Integer getRisk_id() {
		return risk_id;
	}

	public void setRisk_id(Integer risk_id) {
		this.risk_id = risk_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getService() {
		return service;
	}

	public void setService(String service) {
		this.service = service;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getRisk_assess_date() {
		return risk_assess_date;
	}

	public void setRisk_assess_date(String risk_assess_date) {
		this.risk_assess_date = risk_assess_date;
	}

	public String getRisk_description() {
		return risk_description;
	}

	public void setRisk_description(String risk_description) {
		this.risk_description = risk_description;
	}

	public Integer getProbability() {
		return probability;
	}

	public void setProbability(Integer probability) {
		this.probability = probability;
	}

	public Integer getExposure() {
		return exposure;
	}

	public void setExposure(Integer exposure) {
		this.exposure = exposure;
	}

	public Integer getConsequences() {
		return consequences;
	}

	public void setConsequences(Integer consequences) {
		this.consequences = consequences;
	}

	public String getRisk_controls() {
		return risk_controls;
	}

	public void setRisk_controls(String risk_controls) {
		this.risk_controls = risk_controls;
	}

	public String getTarget_date() {
		return target_date;
	}

	public void setTarget_date(String target_date) {
		this.target_date = target_date;
	}

	public boolean isProceed() {
		return proceed;
	}

	public void setProceed(boolean proceed) {
		this.proceed = proceed;
	}

	public String getService_manager() {
		return service_manager;
	}

	public void setService_manager(String service_manager) {
		this.service_manager = service_manager;
	}

	public String getSm_sign_date() {
		return sm_sign_date;
	}

	public void setSm_sign_date(String sm_sign_date) {
		this.sm_sign_date = sm_sign_date;
	}

	public String getDelegated_manager() {
		return delegated_manager;
	}

	public void setDelegated_manager(String delegated_manager) {
		this.delegated_manager = delegated_manager;
	}

	public String getDm_sign_date() {
		return dm_sign_date;
	}

	public void setDm_sign_date(String dm_sign_date) {
		this.dm_sign_date = dm_sign_date;
	}

	
	
}
