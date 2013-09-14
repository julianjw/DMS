package qut.endeavour.rest.bean.plan.educationemployment;


import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Education {
	private String InstitutionName;
	private String Address;
	private String EnrolledCourse;
	private String ContactPerson;
	private String Liaison;
	private String SupportPersons;
	private String Teacher;
	private String EduSupportPlan;
	private String OtherSupportRequired;
	private String CommunityAssistance;
	private String StudySupport;
	
	
	/**
	 * 
	 * @param InstitutionName
	 * @param Address
	 * @param EnrolledCourse
	 * @param ContactPerson
	 * @param Liaison
	 * @param SupportPersons
	 * @param Teacher
	 * @param EduSupportPlan
	 * @param OtherSupportRequired
	 * @param CommunityAssistance
	 * @param StudySupport
	 */
	public Education(
			String InstitutionName,
			String Address,
			String EnrolledCourse,
			String ContactPerson,
			String Liaison,
			String SupportPersons,
			String Teacher,
			String EduSupportPlan,
			String OtherSupportRequired,
			String CommunityAssistance,
			String StudySupport
			) {
		
		this.InstitutionName = InstitutionName;
		this.Address = Address;
		this.EnrolledCourse = EnrolledCourse;
		this.ContactPerson = ContactPerson;
		this.Liaison = Liaison;
		this.SupportPersons = SupportPersons;
		this.Teacher = Teacher;
		this.EduSupportPlan = EduSupportPlan;
		this.OtherSupportRequired = OtherSupportRequired;
		this.CommunityAssistance = CommunityAssistance;
		this.StudySupport = StudySupport;
		
	}
	
	
	
	public Education() {}
	
	
	
	public String getInstitutionName() {
		return this.InstitutionName;
	}
	public void setInstitutionName( String InstitutionName ) {
		this.InstitutionName = InstitutionName;
	}
	
	
	
	public String getAddress() {
		return this.Address;
	}
	public void setAddress( String Address ) {
		this.Address = Address;
	}
	
	
	
	public String getEnrolledCourse() {
		return this.EnrolledCourse;
	}
	public void setEnrolledCourse( String EnrolledCourse ) {
		this.EnrolledCourse = EnrolledCourse;
	}
	
	
	
	public String getContactPerson() {
		return this.ContactPerson;
	}
	public void setContactPerson( String ContactPerson ) {
		this.ContactPerson = ContactPerson;
	}
	
	
	
	public String getLiaison() {
		return this.Liaison;
	}
	public void setLiaison( String Liaison ) {
		this.Liaison = Liaison;
	}
	
	
	
	public String getSupportPersons() {
		return this.SupportPersons;
	}
	public void setSupportPersons(String SupportPersons) {
		this.SupportPersons = SupportPersons;
	}
	
	
	
	public String getTeacher() {
		return this.Teacher;
	}
	public void setTeacher( String Teacher ) {
		this.Teacher = Teacher;
	}
	
	
	
	public String getEduSupportPlan() {
		return this.EduSupportPlan;
	}
	public void setEduSupportPlan( String EduSupportPlan ) {
		this.EduSupportPlan = EduSupportPlan;
	}
	
	
	
	public String getOtherSupportRequired() {
		return this.OtherSupportRequired;
	}
	public void setOtherSupportRequired( String OtherSupportRequired ) {
		this.OtherSupportRequired = OtherSupportRequired;
	}
	
	
	
	public String getCommunityAssistance() {
		return this.CommunityAssistance;
	}
	public void setCommunityAssistance( String CommunityAssistance ) {
		this.CommunityAssistance = CommunityAssistance;
	}
	
	
	
	public String getStudySupport() {
		return this.StudySupport;
	}
	public void setStudySupport( String StudySupport ) {
		this.StudySupport = StudySupport;
	}
}
