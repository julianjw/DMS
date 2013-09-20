package qut.endeavour.rest.bean.plan.educationemployment;


import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Employment {
	private String employer;
	private String address;
	private String contactPerson;
	private String position;
	private String arrangements;
	private String transport;
	private String annualLeave;
	private String sickLeave;
	private String equipment;
	
	public Employment() {}

	/**
	 * 
	 * @param employer
	 * @param address
	 * @param contactPerson
	 * @param position
	 * @param arrangements
	 * @param transport
	 * @param annualLeave
	 * @param sickLeave
	 * @param equipment
	 */
	public Employment(String employer, String address, String contactPerson,
			String position, String arrangements, String transport,
			String annualLeave, String sickLeave, String equipment) {
		super();
		this.employer = employer;
		this.address = address;
		this.contactPerson = contactPerson;
		this.position = position;
		this.arrangements = arrangements;
		this.transport = transport;
		this.annualLeave = annualLeave;
		this.sickLeave = sickLeave;
		this.equipment = equipment;
	}

	public String getEmployer() {
		return employer;
	}

	public void setEmployer(String employer) {
		this.employer = employer;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getContactPerson() {
		return contactPerson;
	}

	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	public String getArrangements() {
		return arrangements;
	}

	public void setArrangements(String arrangements) {
		this.arrangements = arrangements;
	}

	public String getTransport() {
		return transport;
	}

	public void setTransport(String transport) {
		this.transport = transport;
	}

	public String getAnnualLeave() {
		return annualLeave;
	}

	public void setAnnualLeave(String annualLeave) {
		this.annualLeave = annualLeave;
	}

	public String getSickLeave() {
		return sickLeave;
	}

	public void setSickLeave(String sickLeave) {
		this.sickLeave = sickLeave;
	}

	public String getEquipment() {
		return equipment;
	}

	public void setEquipment(String equipment) {
		this.equipment = equipment;
	}
	
	
	
}
