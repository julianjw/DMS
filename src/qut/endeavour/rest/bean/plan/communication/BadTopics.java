package qut.endeavour.rest.bean.plan.communication;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class BadTopics {
	private String topic;
	private String translation;
	
	/**
	 * 
	 * @param topic
	 * @param translation
	 */
	public BadTopics(
			String topic,
			String translation
			){
		this.topic = topic;
		this.translation = translation;
	}
	
	public BadTopics(){}
	
	
	public String getTopic() {
		return this.topic;
	}
	public void setTopic( String topic ) {
		this.topic = topic;
	}
	
	
	public String getTranslation() {
		return this.translation;
	}
	public void setTranslation( String translation ) {
		this.translation = translation;
	}
}
