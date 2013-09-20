package qut.endeavour.rest.bean.plan.support;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class MobilityAndTransport {
	private String liftsAndEscalators;
	private String unevenSurfaces;
	private String height;
	private String mobilityAids;
	private String roadSafetySkills;
	private String publicTransport;
	private String travelPreferences;
	private String otherTravelSupport;
	
	public MobilityAndTransport() {}

	public MobilityAndTransport(String liftsAndEscalators,
			String unevenSurfaces, String height, String mobilityAids,
			String roadSafetySkills, String publicTransport,
			String travelPreferences, String otherTravelSupport) {
		this.liftsAndEscalators = liftsAndEscalators;
		this.unevenSurfaces = unevenSurfaces;
		this.height = height;
		this.mobilityAids = mobilityAids;
		this.roadSafetySkills = roadSafetySkills;
		this.publicTransport = publicTransport;
		this.travelPreferences = travelPreferences;
		this.otherTravelSupport = otherTravelSupport;
	}

	public String getLiftsAndEscalators() {
		return liftsAndEscalators;
	}

	public void setLiftsAndEscalators(String liftsAndEscalators) {
		this.liftsAndEscalators = liftsAndEscalators;
	}

	public String getUnevenSurfaces() {
		return unevenSurfaces;
	}

	public void setUnevenSurfaces(String unevenSurfaces) {
		this.unevenSurfaces = unevenSurfaces;
	}

	public String getHeight() {
		return height;
	}

	public void setHeight(String height) {
		this.height = height;
	}

	public String getMobilityAids() {
		return mobilityAids;
	}

	public void setMobilityAids(String mobilityAids) {
		this.mobilityAids = mobilityAids;
	}

	public String getRoadSafetySkills() {
		return roadSafetySkills;
	}

	public void setRoadSafetySkills(String roadSafetySkills) {
		this.roadSafetySkills = roadSafetySkills;
	}

	public String getPublicTransport() {
		return publicTransport;
	}

	public void setPublicTransport(String publicTransport) {
		this.publicTransport = publicTransport;
	}

	public String getTravelPreferences() {
		return travelPreferences;
	}

	public void setTravelPreferences(String travelPreferences) {
		this.travelPreferences = travelPreferences;
	}

	public String getOtherTravelSupport() {
		return otherTravelSupport;
	}

	public void setOtherTravelSupport(String otherTravelSupport) {
		this.otherTravelSupport = otherTravelSupport;
	}
}
