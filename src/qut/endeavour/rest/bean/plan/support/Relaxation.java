package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Relaxation {
	private String Activities;
	private String Music;
	private String Movie;
	private String TVShow;
	private String OtherActivities;
	
	/**
	 * 
	 * @param Activities
	 * @param Music
	 * @param Movie
	 * @param TVShow
	 * @param OtherActivities
	 */
	public Relaxation(
			String Activities,
			String Music,
			String Movie,
			String TVShow,
			String OtherActivities
			) {
		
		this.Activities = Activities;
		this.Music = Music;
		this.Movie = Movie;
		this.TVShow = TVShow;
		this.OtherActivities = OtherActivities;
		
	}
	
	
	
	public Relaxation() {}
	
	
	
	public String getActivities() {
		return this.Activities;
	}
	public void setActivities( String Activities ) {
		this.Activities = Activities;
	}
	
	
	
	public String getMusic() {
		return this.Music;
	}
	public void setMusic( String Music ) {
		this.Music = Music;
	}
	
	
	
	public String getMovie() {
		return this.Movie;
	}
	public void setMovie( String Movie ) {
		this.Movie = Movie;
	}
	
	
	
	public String getTVShow() {
		return this.TVShow;
	}
	public void setTVShow( String TVShow ) {
		this.TVShow = TVShow;
	}
	
	
	
	public String getOtherActivities() {
		return this.OtherActivities;
	}
	public void setOtherActivities( String OtherActivities ) {
		this.OtherActivities = OtherActivities;
	}
}
