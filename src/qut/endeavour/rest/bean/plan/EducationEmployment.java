package qut.endeavour.rest.bean.plan;

import javax.xml.bind.annotation.XmlRootElement;

import qut.endeavour.rest.bean.plan.educationemployment.Education;
import qut.endeavour.rest.bean.plan.educationemployment.Employment;

@XmlRootElement
public class EducationEmployment {

	private Education education;
	private Employment employment;
	
	/**
	 * 
	 * @param education
	 * @param employment
	 */
	public EducationEmployment(
			Education education,
			Employment employment
			) {
		this.education = education;
		this.employment = employment;
	}

	
	public EducationEmployment(){}
	
	
	public Education getEducation() {
		return this.education;
	}
	public void setEducation( Education education ){
		this.education = education;
	}
	
	
	public Employment getEmployment(){
		return this.employment;
	}
	public void setEmployment( Employment employment ){
		this.employment = employment;
	}
	
}
