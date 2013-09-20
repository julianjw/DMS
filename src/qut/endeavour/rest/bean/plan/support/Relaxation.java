package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Relaxation {
	private String activities;
	private String music;
	private String movie;
	private String tVShow;
	private String otherActivities;
	
	public Relaxation() {}

	public Relaxation(String activities, String music, String movie,
			String tVShow, String otherActivities) {
		super();
		this.activities = activities;
		this.music = music;
		this.movie = movie;
		this.tVShow = tVShow;
		this.otherActivities = otherActivities;
	}

	public String getActivities() {
		return activities;
	}

	public void setActivities(String activities) {
		this.activities = activities;
	}

	public String getMusic() {
		return music;
	}

	public void setMusic(String music) {
		this.music = music;
	}

	public String getMovie() {
		return movie;
	}

	public void setMovie(String movie) {
		this.movie = movie;
	}

	public String gettVShow() {
		return tVShow;
	}

	public void settVShow(String tVShow) {
		this.tVShow = tVShow;
	}

	public String getOtherActivities() {
		return otherActivities;
	}

	public void setOtherActivities(String otherActivities) {
		this.otherActivities = otherActivities;
	}
	
	
}
