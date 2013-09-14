package qut.endeavour.rest.bean.plan;

import javax.xml.bind.annotation.XmlRootElement;

import qut.endeavour.rest.bean.plan.communication.ComsAndDecisionMaking;

@XmlRootElement
public class Communication {
	private ComsAndDecisionMaking decisionMaking;
	
	/**
	 * 
	 * @param decisionMaking
	 */
	public Communication( ComsAndDecisionMaking decisionMaking ){
		this.decisionMaking = decisionMaking;
	}
	
	public Communication(){}
	
	
	public ComsAndDecisionMaking getComsAndDecisionMaking() {
		return this.decisionMaking;
	}
	public void setComsAndDecisionMaking( ComsAndDecisionMaking decisionMaking) {
		this.decisionMaking = decisionMaking;
	}
}
