package qut.endeavour.rest.bean.meeting;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UpcomingMeeting {
	private String rName;
	private String username;
	private String date;
	
	public UpcomingMeeting() {}

	public UpcomingMeeting(String rName, String username, String date) {
		this.rName = rName;
		this.username = username;
		this.date = date;
	}

	public String getrName() {
		return rName;
	}

	public void setrName(String rName) {
		this.rName = rName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
}
