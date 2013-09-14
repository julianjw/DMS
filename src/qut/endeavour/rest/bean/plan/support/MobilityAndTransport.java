package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class MobilityAndTransport {
	private String LiftsAndEscalators;
	private String UnevenSurfaces;
	private String Height;
	private String MobilityAids;
	private String RoadSafetySkills;
	private String PublicTransport;
	private String TravelPreferences;
	private String OtherTravelSupport;
	
	/**
	 * 
	 * @param LiftsAndEscalators
	 * @param UnevenSurfaces
	 * @param Height
	 * @param MobilityAids
	 * @param RoadSafetySkills
	 * @param PublicTransport
	 * @param TravelPreferences
	 * @param OtherTravelSupport
	 */
	public MobilityAndTransport(
			String LiftsAndEscalators,
			String UnevenSurfaces,
			String Height,
			String MobilityAids,
			String RoadSafetySkills,
			String PublicTransport,
			String TravelPreferences,
			String OtherTravelSupport
			) {
		
		this.LiftsAndEscalators = LiftsAndEscalators;
		this.UnevenSurfaces = UnevenSurfaces;
		this.Height = Height;
		this.MobilityAids = MobilityAids;
		this.RoadSafetySkills = RoadSafetySkills;
		this.PublicTransport = PublicTransport;
		this.TravelPreferences = TravelPreferences;
		this.OtherTravelSupport = OtherTravelSupport;
		
	}
	
	
	
	public MobilityAndTransport() {}
	
	
	
	public String getLiftsAndEscalators() {
		return this.LiftsAndEscalators;
	}
	public void setLiftsAndEscalators( String LiftsAndEscalators ) {
		this.LiftsAndEscalators = LiftsAndEscalators;
	}
	
	
	
	public String getUnevenSurfaces() {
		return this.UnevenSurfaces;
	}
	public void setUnevenSurfaces( String UnevenSurfaces ) {
		this.UnevenSurfaces = UnevenSurfaces;
	}
	
	
	
	public String getHeight() {
		return this.Height;
	}
	public void setHeight( String Height ) {
		this.Height = Height;
	}
	
	
	
	public String getMobilityAids() {
		return this.MobilityAids;
	}
	public void setMobilityAids( String MobilityAids ) {
		this.MobilityAids = MobilityAids;
	}
	
	
	
	public String getRoadSafetySkills() {
		return this.RoadSafetySkills;
	}
	public void setRoadSafetySkills( String RoadSafetySkills ) {
		this.RoadSafetySkills = RoadSafetySkills;
	}
	
	
	
	public String getPublicTransport() {
		return this.PublicTransport;
	}
	public void setPublicTransport(String PublicTransport) {
		this.PublicTransport = PublicTransport;
	}
	
	
	
	public String getTravelPreferences() {
		return this.TravelPreferences;
	}
	public void setTravelPreferences( String TravelPreferences ) {
		this.TravelPreferences = TravelPreferences;
	}
	
	
	
	public String getOtherTravelSupport() {
		return this.OtherTravelSupport;
	}
	public void setOtherTravelSupport( String OtherTravelSupport ) {
		this.OtherTravelSupport = OtherTravelSupport;
	}
}
