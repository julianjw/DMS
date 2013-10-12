package qut.endeavour.rest.storage;

import java.util.ArrayList;
import java.util.List;

public class DatabaseNames {
	
	
	/*
	public final static List<String> FLDS_LIVING_ARRANGEMENTS = new ArrayList<String>() {{
		add("s*");
		add("s*");
		add("s*");
		add("s*");
		add("s*");
		add("s*");
		add("s*");
		add("s*");
		add("s*");
		add("s*");
		add("s*");
		add("s*");
	}};
 */
	
	
	
	/* ***** BEGIN PERSONAL PLAN ***** */
	// CLIENT DETAILS

	/**
	 * ALL TABLE NAMES MUST BE WRITTEN AS [TYPE]*[TABLENAME]
	 * Type is the type in the database
	 * 		"s" text
	 * 		"d" date
	 * 		"i" number
	 * 		"b" boolean
	 * 
	 */
	public final static String TBL_PERSONAL_DETAILS = "client_personal_details";
	public final static List<String> FLDS_PERSONAL_DETAILS = new ArrayList<String>() {{
		add("s*nickname");
		add("d*dob");
		add("s*phoneno");
		add("s*mobileno");
		add("s*email");
		add("d*creation_date");
		add("d*review_date");
	//	add("s*photo");
	}};
	
	
	public final static String TBL_ALERT_INFO = "client_alerts";
	public final static List<String> FLDS_ALERT_INFO = new ArrayList<String>() {{
		add("s*allergies");
		add("s*med_issues");
		add("s*eating_alerts");
		add("s*safety_concerns");
		add("s*restrict_practices");
		add("s*adult_guard_child_protection");
		add("s*complex_supp_needs");
		add("s*phobias");
		add("s*other");
	}};
	
	public final static String TBL_FORMAL_ORDERS = "client_formal_orders";
	public final static List<String> FLDS_FORMAL_ORDERS = new ArrayList<String>() {{
		add("s*order_for");
		add("s*appointee");
		add("s*details");
		add("s*order_location");
		add("s*order_info");
		add("s*child_supp_officer");
		add("s*community_visitor_info");
		add("s*protection_order");
		add("d*commencement_date");
		add("s*justice_requirements");
		add("s*family_contact");
		add("s*contact_arrangement");
		add("s*special_conditions");
	}};
	
	
	public final static String TBL_LIVING_ARRANGEMENTS = "client_living_arrangements";
	public final static List<String> FLDS_LIVING_ARRANGEMENTS = new ArrayList<String>() {{
		add("s*service");
		add("s*street");
		add("s*houseno");
		add("s*suburb");
		add("i*post_code");
		add("s*city");
		add("s*family_contact"); // family members
		add("s*sick_contact"); // sick contact
		add("s*other_important_people"); // important people
	}};
	
	// This table is part of the LivingArrangements
	public final static String TBL_CLIENT_CONTACTS = "client_contacts";
	public final static List<String> FLDS_CLIENT_CONTACTS = new ArrayList<String>() {{
		add("s*name");
		add("s*relationship");
		add("s*contact_arrangements");
		add("i*contact_type_id");
	}};
	
		// HEALTH
	public final static String TBL_DIETARY = "health_dietary";
	public final static List<String> FLDS_DIETARY = new ArrayList<String>() {{
		add("s*cannot_eat");
		add("s*avoid");
		add("b*assessment_done");
		add("s*general_food");
		add("s*fave_snacks");
		add("s*dislikes");
		add("s*breakfast");
		add("s*lunch");
		add("s*dinner");
		add("s*drink_supp");
		add("s*eat_supp");
		add("s*other");
		add("s*location");
	}};
	
	public final static String TBL_DISABILITY = "health_disability";
	public final static List<String> FLDS_DISABILITY = new ArrayList<String>() {{
		add("s*info_history_disability");
		add("s*health_cond_supp");
		add("b*meds");
		add("b*assist_req");
		add("b*self_med");
		add("s*med_contact_info");
		add("s*supp_add_healthy");
	}};
	
	public final static String TBL_MANAGEMENT = "health_management";
	public final static List<String> FLDS_MANAGEMENT = new ArrayList<String>() {{
		add("s*medical_cond");
		add("s*symptom");
		add("s*precursor");
		add("s*time_length");
		add("i*frequency");
		add("i*frequency_period_id");
		add("s*staff_response");
		add("s*symptom_avoidance");
		add("s*seizure_brief");
		add("s*seizure_non_brief");
	}};
	
		// SUPPORT
	public final static String TBL_SUPPORT_GENERAL = "support_general";
	public final static List<String> FLDS_SUPPORT_GENERAL = new ArrayList<String>() {{
		add("s*crowd_safety");
		add("s*stranger_danger");
		add("s*money_handling");
		add("s*crowds");
		add("s*maintain_social_net");
		add("s*tele_internet");
		add("s*eating_out");
		add("s*cultural_spirit_bel");
		add("s*leisure_equipment");
		add("s*appliances");
		add("s*chemicals");
		add("s*recog_hazard");
		add("s*other");
	}};
	
	public final static String TBL_MOBILITY_TRANSPORT = "support_mobility_transport";
	public final static List<String> FLDS_MOBILITY_TRANSPORT = new ArrayList<String>() {{
		add("s*lift_stairs_esc");
		add("s*uneven_surfaces");
		add("s*height");
		add("s*mob_aids_supp");
		add("s*road_safety");
		add("s*pub_trans");
		add("s*seating_travel");
		add("s*other_supp_travel");
	}};
	
	public final static String TBL_FINANCIAL = "support_financial";
	public final static List<String> FLDS_FINANCIAL = new ArrayList<String>() {{
		add("s*finance_admin");
		add("s*budget_expend");
		add("s*budget_constraint_goal");
		add("s*personal_items_support");
		add("s*budget_transport");
		add("s*money_handle_supp");
		add("s*budget_supp");
		add("s*budget_groceries_other");
		add("s*budget_house");
		add("s*budget_utilities");
		add("s*budget_bills");
		add("s*budget_emergency");
		add("s*budget_supp_net");
		add("s*other");
	}};
	
	public final static String TBL_ACTIVITIES = "support_activities";
	public final static List<String> FLDS_ACTIVITIES = new ArrayList<String>() {{
		add("s*sleeping");
		add("s*bed_time");
		add("s*bathing");
		add("s*dressing");
		add("s*toilet");
		add("s*menstruation");
		add("s*cooking");
		add("s*cleaning");
		add("s*monday");
		add("s*tuesday");
		add("s*wednesday");
		add("s*thursday");
		add("s*friday");
		add("s*saturday");
		add("s*sunday");
		add("s*other");
		add("s*morning");
		add("s*meal_time");
		add("s*afternoon_evening");
		add("s*sleeping_overnight");
		add("s*weekend");
		add("s*services");
	}};
	
	public final static String TBL_RELAXATION = "support_relaxation";
	public final static List<String> FLDS_RELAXATION = new ArrayList<String>() {{
		add("s*activities");
		add("s*music");
		add("s*movies");
		add("s*tv_shows");
		add("s*other");
	}};
	
	
//	public final static String TBL_SUPPORT_SERVICES = "support_services";
//	public final static List<String> FLDS_SUPPORT_SERVICES = new ArrayList<String>() {{
//		add("s*service_name");
////		add("s*service_description");
//	}};
	
		// COMMUNICATION
	public final static String TBL_COMMUNICATION = "communication";
	public final static List<String> FLDS_COMMUNICATION = new ArrayList<String>() {{
		add("s*comm_method");
		add("s*comm_pref_method");
		add("s*people_supp");
		add("s*daily_supp");
		add("s*own_decisions");
		add("s*good_topics");
		add("s*likes");
		add("s*dislikes");
		add("s*comm_bad_topics");
	}};
	
//	public final static String TBL_BAD_TOPICS = "communication_bad_topics";
//	public final static List<String> FLDS_BAD_TOPICS = new ArrayList<String>() {{
//		add("s*topics");
//		add("s*translation");
//	}};
	
		// EDUCATION AND EMPLOYMENT
	public final static String TBL_EDUCATION = "education";
	public final static List<String> FLDS_EDUCATION = new ArrayList<String>() {{
		add("s*edu_institution");
		add("s*edu_address");
		add("s*enrolled_course");
		add("s*contact_person");
		add("s*liason_guidance_officer");
		add("s*support_persons");
		add("s*lecturer");
		add("s*edu_supp_plan");
		add("s*other_supp");
		add("s*agency_assist");
		add("s*study_supp");
	}};
	
	public final static String TBL_EMPLOYMENT = "employment";
	public final static List<String> FLDS_EMPLOYMENT = new ArrayList<String>() {{
		add("s*employer");
		add("s*emp_address");
		add("s*supervisor");
		add("s*pos_held");
		add("s*work_arrangements");
		add("s*transport");
		add("s*holiday_plans");
		add("s*sick_leave");
		add("s*resources");
	}};
	
	
		// PLANNING
	public final static String TBL_GOAL = "plan_goal";
	public final static List<String> FLDS_GOAL = new ArrayList<String>() {{
		add("s*goal");
		add("s*actions");
		add("s*extra_det");
		add("s*timeframes");
		add("s*expected_outcomes");
		add("s*resources_req");
	}};
	
	public final static String TBL_HOLIDAY = "plan_holiday";
	public final static List<String> FLDS_HOLIDAY = new ArrayList<String>() {{
		add("s*holiday_det");
		add("s*actions");
		add("s*extra_det");
		add("s*timeframes");
		add("s*other");
		add("s*resources_req");
	}};
	
	/* ***** END PERSONAL PLAN ***** */
	
	/* ***** BEGIN PLAN MEETINGS ***** */
	public final static String TBL_SCHEDULE_MEETING = "scheduled_meeting";
	public final static List<String> FLDS_SCHEDULE_MEETING = new ArrayList<String>() {{
		add("b*education");
		add("b*learn_life");
		add("b*post_school");
		add("d*meeting_date");
		add("d*prelim_meeting_date");
		add("s*discussion_record");
		add("b*participation");
		add("b*info_completed");
		add("b*family");
		add("b*guardian");
		add("b*decision_maker");
		add("b*advocate");
		add("b*service_reps");
		add("b*pbs_plan");
		add("b*adapt_func_assessment");
		add("b*chap_wellbeing_info");
		add("b*current_personal_plan");
		add("b*service_activity_options");
		add("b*other_info");
		add("b*medication");
		add("b*user_budget");
		add("b*reflections");
		add("b*photo_release");
		add("b*client_service_agree");
		add("b*all_supp_agree");
		add("b*cims_info");
		add("b*medi_info_auth");
		add("b*sched_personal_belongings");
		add("b*pbs_maintenance_plan");
		add("s*personal_meeting_plan_comments");
		add("b*personal_plan_meet_outcomes");
		add("b*personal_plan_complete");
		add("b*complete_plan_signed");
		add("b*plan_meeting_thanks");
		add("s*personal_plan_comments");
		add("b*user_choices_implement");
		add("b*risk_assess_forms");
		add("b*supp_progress_notes");
		add("b*goal_progress_summary");
		add("b*resources_for_implemenation");
		add("s*implement_comment");
	}};
	
}
