package qut.endeavour.rest.bean.risk;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ClientRisk {

	private Integer risk_id;
	private String service;
	private String area;
	private String date;
	
	public ClientRisk() {}

	public ClientRisk(Integer risk_id, String service, String area, String date) {
		super();
		this.risk_id = risk_id;
		this.service = service;
		this.area = area;
		this.date = date;
	}

	public Integer getRisk_id() {
		return risk_id;
	}

	public void setRisk_id(Integer risk_id) {
		this.risk_id = risk_id;
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

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
}
