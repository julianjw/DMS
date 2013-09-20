package qut.endeavour.rest.bean.plan.communication;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ComsAndDecisionMaking {
	private String iCommunicate;
	private String youCommunicate;
	private String supportPeople;
	private String supportMeBy;
	private String independantDecisions;
	private String goodTopics;
	private String likes;
	private String dislikes;
	private List<BadTopics> doNotTalkAbout;
	
	public ComsAndDecisionMaking(){}

	public ComsAndDecisionMaking(String iCommunicate, String youCommunicate,
			String supportPeople, String supportMeBy,
			String independantDecisions, String goodTopics, String likes,
			String dislikes, List<BadTopics> doNotTalkAbout) {
		this.iCommunicate = iCommunicate;
		this.youCommunicate = youCommunicate;
		this.supportPeople = supportPeople;
		this.supportMeBy = supportMeBy;
		this.independantDecisions = independantDecisions;
		this.goodTopics = goodTopics;
		this.likes = likes;
		this.dislikes = dislikes;
		this.doNotTalkAbout = doNotTalkAbout;
	}

	public String getiCommunicate() {
		return iCommunicate;
	}

	public void setiCommunicate(String iCommunicate) {
		this.iCommunicate = iCommunicate;
	}

	public String getYouCommunicate() {
		return youCommunicate;
	}

	public void setYouCommunicate(String youCommunicate) {
		this.youCommunicate = youCommunicate;
	}

	public String getSupportPeople() {
		return supportPeople;
	}

	public void setSupportPeople(String supportPeople) {
		this.supportPeople = supportPeople;
	}

	public String getSupportMeBy() {
		return supportMeBy;
	}

	public void setSupportMeBy(String supportMeBy) {
		this.supportMeBy = supportMeBy;
	}

	public String getIndependantDecisions() {
		return independantDecisions;
	}

	public void setIndependantDecisions(String independantDecisions) {
		this.independantDecisions = independantDecisions;
	}

	public String getGoodTopics() {
		return goodTopics;
	}

	public void setGoodTopics(String goodTopics) {
		this.goodTopics = goodTopics;
	}

	public String getLikes() {
		return likes;
	}

	public void setLikes(String likes) {
		this.likes = likes;
	}

	public String getDislikes() {
		return dislikes;
	}

	public void setDislikes(String dislikes) {
		this.dislikes = dislikes;
	}

	public List<BadTopics> getDoNotTalkAbout() {
		return doNotTalkAbout;
	}

	public void setDoNotTalkAbout(List<BadTopics> doNotTalkAbout) {
		this.doNotTalkAbout = doNotTalkAbout;
	}
	
	
	
}
