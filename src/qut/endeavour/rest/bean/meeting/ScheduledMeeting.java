package qut.endeavour.rest.bean.meeting;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ScheduledMeeting {
	private boolean education;	//education
	private boolean learnLife;	// learn_life
	private boolean postSchool;	//post_school
	private String meetingDate;	// d*meeting_date
	private String prelimMeetingDate; // d*prelim_meeting_date
	private String discussion_record; //discussion_record
	private boolean participation; // participation
	private boolean infoCompleted; // info_completed
	private boolean family; // family
	private boolean guardian; // guardian
	private boolean decisionMaker; //decision_maker
	private boolean advocate; //advocate
	private boolean serviceReps; // service_reps
	private boolean pbsPlan; //pbs_plan
	private boolean adaptFuncAssessment; // adapt_func_assessment
	private boolean chapWellbeingInfo; //chap_wellbeing_info
	private boolean currentPersonalPlan; //current_personal_plan
	private boolean serviceActivityOptions; //service_activity_options
	private boolean otherInfo; //other_info
	private boolean medication; //medication
	private boolean userBudget; // user_budget
	private boolean reflections; // reflections
	private boolean photoRelease; // photo_release
	private boolean clientServiceAgree; // client_service_agree
	private boolean allSuppAgree; //all_supp_agree
	private boolean cimsInfo; // cims_info
	private boolean mediInfoAuth; // medi_info_auth
	private boolean schedPersonalBelongings; // sched_personal_belongings
	private boolean pbsMaintenancePlan; //pbs_maintenance_plan
	private String personalMeetingPlanComments; //personal_meeting_plan_comments
	private boolean personalMeetingPlanOutcomes; //personal_meeting_plan_outcomes
	private boolean personalPlanComplete; //personal_plan_complete
	private boolean completePlanSigned; //complete_plan_signed
	private boolean planMeetingThanks; //plan_meeting_thanks
	private String personalPlanComments; //personal_plan_comments
	private boolean userChoicesImplemented; //userChoicesImplemented
	private boolean riskAssessForms; //risk_assess_forms
	private boolean suppProgrssNotes; //suppProgressNotes
	private boolean goalProgressSummary; // goalProgressSummary
	private boolean resourcesForImplementation; //resources_for_implementation
	private String implementComment; // implement_comment
	
	public ScheduledMeeting() {}

	public ScheduledMeeting(boolean education, boolean learnLife,
			boolean postSchool, String meetingDate, String prelimMeetingDate,
			String discussion_record, boolean participation,
			boolean infoCompleted, boolean family, boolean guardian,
			boolean decisionMaker, boolean advocate, boolean serviceReps,
			boolean pbsPlan, boolean adaptFuncAssessment,
			boolean chapWellbeingInfo, boolean currentPersonalPlan,
			boolean serviceActivityOptions, boolean otherInfo,
			boolean medication, boolean userBudget, boolean reflections,
			boolean photoRelease, boolean clientServiceAgree,
			boolean allSuppAgree, boolean cimsInfo, boolean mediInfoAuth,
			boolean schedPersonalBelongings, boolean pbsMaintenancePlan,
			String personalMeetingPlanComments,
			boolean personalMeetingPlanOutcomes, boolean personalPlanComplete,
			boolean completePlanSigned, boolean planMeetingThanks,
			String personalPlanComments, boolean userChoicesImplemented,
			boolean riskAssessForms, boolean suppProgrssNotes,
			boolean goalProgressSummary, boolean resourcesForImplementation,
			String implementComment) {
		super();
		this.education = education;
		this.learnLife = learnLife;
		this.postSchool = postSchool;
		this.meetingDate = meetingDate;
		this.prelimMeetingDate = prelimMeetingDate;
		this.discussion_record = discussion_record;
		this.participation = participation;
		this.infoCompleted = infoCompleted;
		this.family = family;
		this.guardian = guardian;
		this.decisionMaker = decisionMaker;
		this.advocate = advocate;
		this.serviceReps = serviceReps;
		this.pbsPlan = pbsPlan;
		this.adaptFuncAssessment = adaptFuncAssessment;
		this.chapWellbeingInfo = chapWellbeingInfo;
		this.currentPersonalPlan = currentPersonalPlan;
		this.serviceActivityOptions = serviceActivityOptions;
		this.otherInfo = otherInfo;
		this.medication = medication;
		this.userBudget = userBudget;
		this.reflections = reflections;
		this.photoRelease = photoRelease;
		this.clientServiceAgree = clientServiceAgree;
		this.allSuppAgree = allSuppAgree;
		this.cimsInfo = cimsInfo;
		this.mediInfoAuth = mediInfoAuth;
		this.schedPersonalBelongings = schedPersonalBelongings;
		this.pbsMaintenancePlan = pbsMaintenancePlan;
		this.personalMeetingPlanComments = personalMeetingPlanComments;
		this.personalMeetingPlanOutcomes = personalMeetingPlanOutcomes;
		this.personalPlanComplete = personalPlanComplete;
		this.completePlanSigned = completePlanSigned;
		this.planMeetingThanks = planMeetingThanks;
		this.personalPlanComments = personalPlanComments;
		this.userChoicesImplemented = userChoicesImplemented;
		this.riskAssessForms = riskAssessForms;
		this.suppProgrssNotes = suppProgrssNotes;
		this.goalProgressSummary = goalProgressSummary;
		this.resourcesForImplementation = resourcesForImplementation;
		this.implementComment = implementComment;
	}

	public boolean isEducation() {
		return education;
	}

	public void setEducation(boolean education) {
		this.education = education;
	}

	public boolean isLearnLife() {
		return learnLife;
	}

	public void setLearnLife(boolean learnLife) {
		this.learnLife = learnLife;
	}

	public boolean isPostSchool() {
		return postSchool;
	}

	public void setPostSchool(boolean postSchool) {
		this.postSchool = postSchool;
	}

	public String getMeetingDate() {
		return meetingDate;
	}

	public void setMeetingDate(String meetingDate) {
		this.meetingDate = meetingDate;
	}

	public String getPrelimMeetingDate() {
		return prelimMeetingDate;
	}

	public void setPrelimMeetingDate(String prelimMeetingDate) {
		this.prelimMeetingDate = prelimMeetingDate;
	}

	public String getDiscussion_record() {
		return discussion_record;
	}

	public void setDiscussion_record(String discussion_record) {
		this.discussion_record = discussion_record;
	}

	public boolean isParticipation() {
		return participation;
	}

	public void setParticipation(boolean participation) {
		this.participation = participation;
	}

	public boolean isInfoCompleted() {
		return infoCompleted;
	}

	public void setInfoCompleted(boolean infoCompleted) {
		this.infoCompleted = infoCompleted;
	}

	public boolean isFamily() {
		return family;
	}

	public void setFamily(boolean family) {
		this.family = family;
	}

	public boolean isGuardian() {
		return guardian;
	}

	public void setGuardian(boolean guardian) {
		this.guardian = guardian;
	}

	public boolean isDecisionMaker() {
		return decisionMaker;
	}

	public void setDecisionMaker(boolean decisionMaker) {
		this.decisionMaker = decisionMaker;
	}

	public boolean isAdvocate() {
		return advocate;
	}

	public void setAdvocate(boolean advocate) {
		this.advocate = advocate;
	}

	public boolean isServiceReps() {
		return serviceReps;
	}

	public void setServiceReps(boolean serviceReps) {
		this.serviceReps = serviceReps;
	}

	public boolean isPbsPlan() {
		return pbsPlan;
	}

	public void setPbsPlan(boolean pbsPlan) {
		this.pbsPlan = pbsPlan;
	}

	public boolean isAdaptFuncAssessment() {
		return adaptFuncAssessment;
	}

	public void setAdaptFuncAssessment(boolean adaptFuncAssessment) {
		this.adaptFuncAssessment = adaptFuncAssessment;
	}

	public boolean isChapWellbeingInfo() {
		return chapWellbeingInfo;
	}

	public void setChapWellbeingInfo(boolean chapWellbeingInfo) {
		this.chapWellbeingInfo = chapWellbeingInfo;
	}

	public boolean isCurrentPersonalPlan() {
		return currentPersonalPlan;
	}

	public void setCurrentPersonalPlan(boolean currentPersonalPlan) {
		this.currentPersonalPlan = currentPersonalPlan;
	}

	public boolean isServiceActivityOptions() {
		return serviceActivityOptions;
	}

	public void setServiceActivityOptions(boolean serviceActivityOptions) {
		this.serviceActivityOptions = serviceActivityOptions;
	}

	public boolean isOtherInfo() {
		return otherInfo;
	}

	public void setOtherInfo(boolean otherInfo) {
		this.otherInfo = otherInfo;
	}

	public boolean isMedication() {
		return medication;
	}

	public void setMedication(boolean medication) {
		this.medication = medication;
	}

	public boolean isUserBudget() {
		return userBudget;
	}

	public void setUserBudget(boolean userBudget) {
		this.userBudget = userBudget;
	}

	public boolean isReflections() {
		return reflections;
	}

	public void setReflections(boolean reflections) {
		this.reflections = reflections;
	}

	public boolean isPhotoRelease() {
		return photoRelease;
	}

	public void setPhotoRelease(boolean photoRelease) {
		this.photoRelease = photoRelease;
	}

	public boolean isClientServiceAgree() {
		return clientServiceAgree;
	}

	public void setClientServiceAgree(boolean clientServiceAgree) {
		this.clientServiceAgree = clientServiceAgree;
	}

	public boolean isAllSuppAgree() {
		return allSuppAgree;
	}

	public void setAllSuppAgree(boolean allSuppAgree) {
		this.allSuppAgree = allSuppAgree;
	}

	public boolean isCimsInfo() {
		return cimsInfo;
	}

	public void setCimsInfo(boolean cimsInfo) {
		this.cimsInfo = cimsInfo;
	}

	public boolean isMediInfoAuth() {
		return mediInfoAuth;
	}

	public void setMediInfoAuth(boolean mediInfoAuth) {
		this.mediInfoAuth = mediInfoAuth;
	}

	public boolean isSchedPersonalBelongings() {
		return schedPersonalBelongings;
	}

	public void setSchedPersonalBelongings(boolean schedPersonalBelongings) {
		this.schedPersonalBelongings = schedPersonalBelongings;
	}

	public boolean isPbsMaintenancePlan() {
		return pbsMaintenancePlan;
	}

	public void setPbsMaintenancePlan(boolean pbsMaintenancePlan) {
		this.pbsMaintenancePlan = pbsMaintenancePlan;
	}

	public String getPersonalMeetingPlanComments() {
		return personalMeetingPlanComments;
	}

	public void setPersonalMeetingPlanComments(String personalMeetingPlanComments) {
		this.personalMeetingPlanComments = personalMeetingPlanComments;
	}

	public boolean isPersonalMeetingPlanOutcomes() {
		return personalMeetingPlanOutcomes;
	}

	public void setPersonalMeetingPlanOutcomes(boolean personalMeetingPlanOutcomes) {
		this.personalMeetingPlanOutcomes = personalMeetingPlanOutcomes;
	}

	public boolean isPersonalPlanComplete() {
		return personalPlanComplete;
	}

	public void setPersonalPlanComplete(boolean personalPlanComplete) {
		this.personalPlanComplete = personalPlanComplete;
	}

	public boolean isCompletePlanSigned() {
		return completePlanSigned;
	}

	public void setCompletePlanSigned(boolean completePlanSigned) {
		this.completePlanSigned = completePlanSigned;
	}

	public boolean isPlanMeetingThanks() {
		return planMeetingThanks;
	}

	public void setPlanMeetingThanks(boolean planMeetingThanks) {
		this.planMeetingThanks = planMeetingThanks;
	}

	public String getPersonalPlanComments() {
		return personalPlanComments;
	}

	public void setPersonalPlanComments(String personalPlanComments) {
		this.personalPlanComments = personalPlanComments;
	}

	public boolean isUserChoicesImplemented() {
		return userChoicesImplemented;
	}

	public void setUserChoicesImplemented(boolean userChoicesImplemented) {
		this.userChoicesImplemented = userChoicesImplemented;
	}

	public boolean isRiskAssessForms() {
		return riskAssessForms;
	}

	public void setRiskAssessForms(boolean riskAssessForms) {
		this.riskAssessForms = riskAssessForms;
	}

	public boolean isSuppProgrssNotes() {
		return suppProgrssNotes;
	}

	public void setSuppProgrssNotes(boolean suppProgrssNotes) {
		this.suppProgrssNotes = suppProgrssNotes;
	}

	public boolean isGoalProgressSummary() {
		return goalProgressSummary;
	}

	public void setGoalProgressSummary(boolean goalProgressSummary) {
		this.goalProgressSummary = goalProgressSummary;
	}

	public boolean isResourcesForImplementation() {
		return resourcesForImplementation;
	}

	public void setResourcesForImplementation(boolean resourcesForImplementation) {
		this.resourcesForImplementation = resourcesForImplementation;
	}

	public String getImplementComment() {
		return implementComment;
	}

	public void setImplementComment(String implementComment) {
		this.implementComment = implementComment;
	}
	
	
}
