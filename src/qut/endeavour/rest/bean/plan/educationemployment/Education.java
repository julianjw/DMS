package qut.endeavour.rest.bean.plan.educationemployment;


import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Education {
	private String institutionName;
	private String address;
	private String enrolledCourse;
	private String contactPerson;
	private String liaison;
	private String supportPersons;
	private String teacher;
	private String eduSupportPlan;
	private String otherSupportRequired;
	private String communityAssistance;
	private String studySupport;
	
	public Education() {}

	public Education(String institutionName, String address,
			String enrolledCourse, String contactPerson, String liaison,
			String supportPersons, String teacher, String eduSupportPlan,
			String otherSupportRequired, String communityAssistance,
			String studySupport) {
		this.institutionName = institutionName;
		this.address = address;
		this.enrolledCourse = enrolledCourse;
		this.contactPerson = contactPerson;
		this.liaison = liaison;
		this.supportPersons = supportPersons;
		this.teacher = teacher;
		this.eduSupportPlan = eduSupportPlan;
		this.otherSupportRequired = otherSupportRequired;
		this.communityAssistance = communityAssistance;
		this.studySupport = studySupport;
	}

	public String getInstitutionName() {
		return institutionName;
	}

	public void setInstitutionName(String institutionName) {
		this.institutionName = institutionName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEnrolledCourse() {
		return enrolledCourse;
	}

	public void setEnrolledCourse(String enrolledCourse) {
		this.enrolledCourse = enrolledCourse;
	}

	public String getContactPerson() {
		return contactPerson;
	}

	public void setContactPerson(String contactPerson) {
		this.contactPerson = contactPerson;
	}

	public String getLiaison() {
		return liaison;
	}

	public void setLiaison(String liaison) {
		this.liaison = liaison;
	}

	public String getSupportPersons() {
		return supportPersons;
	}

	public void setSupportPersons(String supportPersons) {
		this.supportPersons = supportPersons;
	}

	public String getTeacher() {
		return teacher;
	}

	public void setTeacher(String teacher) {
		this.teacher = teacher;
	}

	public String getEduSupportPlan() {
		return eduSupportPlan;
	}

	public void setEduSupportPlan(String eduSupportPlan) {
		this.eduSupportPlan = eduSupportPlan;
	}

	public String getOtherSupportRequired() {
		return otherSupportRequired;
	}

	public void setOtherSupportRequired(String otherSupportRequired) {
		this.otherSupportRequired = otherSupportRequired;
	}

	public String getCommunityAssistance() {
		return communityAssistance;
	}

	public void setCommunityAssistance(String communityAssistance) {
		this.communityAssistance = communityAssistance;
	}

	public String getStudySupport() {
		return studySupport;
	}

	public void setStudySupport(String studySupport) {
		this.studySupport = studySupport;
	}
	
	
}
