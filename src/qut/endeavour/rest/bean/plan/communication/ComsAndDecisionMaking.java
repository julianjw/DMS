package qut.endeavour.rest.bean.plan.communication;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ComsAndDecisionMaking {
	private String ICommunicate;
	private String YouCommunicate;
	private String SupportPeople;
	private String SupportMeBy;
	private String IndependantDecisions;
	private String GoodTopics;
	private String Likes;
	private String Dislikes;
	private List<BadTopics> DoNotTalkAbout;
	
	
	public ComsAndDecisionMaking(
			String ICommunicate,
			String YouCommunicate,
			String SupportPeople,
			String SupportMeBy,
			String IndependantDecisions,
			String GoodTopics,
			String Likes,
			String Dislikes,
			List<BadTopics> DoNotTalkAbout
			) {
		
		this.ICommunicate = ICommunicate;
		this.YouCommunicate = YouCommunicate;
		this.SupportPeople = SupportPeople;
		this.SupportMeBy = SupportMeBy;
		this.IndependantDecisions = IndependantDecisions;
		this.GoodTopics = GoodTopics;
		this.Likes = Likes;
		this.Dislikes = Dislikes;
		this.DoNotTalkAbout = DoNotTalkAbout;
		
	}
	
	
	
	public ComsAndDecisionMaking() {}
	
	
	
	public String getICommunicate() {
		return this.ICommunicate;
	}
	public void setICommunicate( String ICommunicate ) {
		this.ICommunicate = ICommunicate;
	}
	
	
	
	public String getYouCommunicate() {
		return this.YouCommunicate;
	}
	public void setYouCommunicate( String YouCommunicate ) {
		this.YouCommunicate = YouCommunicate;
	}
	
	
	
	public String getSupportPeople() {
		return this.SupportPeople;
	}
	public void setSupportPeople( String SupportPeople ) {
		this.SupportPeople = SupportPeople;
	}
	
	
	
	public String getSupportMeBy() {
		return this.SupportMeBy;
	}
	public void setSupportMeBy( String SupportMeBy ) {
		this.SupportMeBy = SupportMeBy;
	}
	
	
	
	public String getIndependantDecisions() {
		return this.IndependantDecisions;
	}
	public void setIndependantDecisions( String IndependantDecisions ) {
		this.IndependantDecisions = IndependantDecisions;
	}
	
	
	
	public String getGoodTopics() {
		return this.GoodTopics;
	}
	public void setGoodTopics(String GoodTopics) {
		this.GoodTopics = GoodTopics;
	}
	
	
	
	public String getLikes() {
		return this.Likes;
	}
	public void setLikes( String Likes ) {
		this.Likes = Likes;
	}
	
	
	
	public String getDislikes() {
		return this.Dislikes;
	}
	public void setDislikes( String Dislikes ) {
		this.Dislikes = Dislikes;
	}
	
	
	
	public List<BadTopics> getDoNotTalkAbout() {
		return this.DoNotTalkAbout;
	}
	public void setDoNotTalkAbout( List<BadTopics> DoNotTalkAbout ) {
		this.DoNotTalkAbout = DoNotTalkAbout;
	}
	
}
