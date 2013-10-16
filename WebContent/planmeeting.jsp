<jsp:include page="partials/head.html" flush="true" />
	<!--title -->
	Plan Meeting
<jsp:include page="partials/nav.html" flush="true" />
	<!-- navigation -->
<!-- 	<h3>Personal Plan Nav</h3> -->
	<a href='newmeeting.html'>New Meeting</a>
	<a href='savedmeetings.html'>Saved Meetings</a>
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	
	<table border="0">
		<tr>
		<td>
			<label id='serviceIDL' style="font-weight: bold;" >User Service ID: </label>
			<input type='text' id='serviceID' name='serviceID'  />
		</td>
		<td>
			<label id='meetingDateL' style="font-weight: bold;" >Scheduled Meeting Date</label>
			<input type='text' name='meetingDateT' id='meetingDateT' placeholder='dd/mm/yyyy' />
			<br />
		</td>
		</tr>
		<tr>
		<td>
			<label id='nameOfServiceL' style="font-weight: bold;">Name of service</label>
			<br />
			<input type="checkbox" name="education" id='education' value="true">Education <br />
			<input type="checkbox" name="learningLifestyle" id='learningLifestyle' value="true">Learning and Lifestyle <br />
			<input type="checkbox" name="post-school" id='post-school' value="true">Post-School
		</td>
		<td>
			<label id='serviceUserNameL' style="font-weight: bold;" >Service user name</label>
			<input type='text' name='serviceUsernameT' id='serviceUsernameT' />
		</td>
		</tr>
	</table>
	<br />
	<hr>
	<br />
	<h2>Coordination of the Personal Planning Process</h2>
	<br />
	<label id='preliminaryL' style="font-weight: bold;" >Preliminary meeting with service user date</label>
	<input type='text' name='preliminaryT' id='preliminaryT' placeholder='dd/mm/yyyy' />
	<br />
	<br />
	<label for='recordT' class='toggle' style="font-weight: bold;">Record of Discussion: </label>
	<div id='recordD'>
		<textarea id='recordT' name='recordT' rows="3" cols="50"></textarea>
	</div>
	<br />
	<label for='takeMeds' style="font-weight: bold;">Confirm service user's choice to participate:
	<input type="radio" name="confirm" id='confirmYes' value="true"> Yes
	<input type="radio" name="confirm" id='confirmNo' value="false"> No
	<br />
	<br />
	<label for='takeMeds' style="font-weight: bold;">Informed Decision Making for Complex Areas (QF 8022.02) completed as required:
	<input type="checkbox" name="informedDecision" id='informedDecision' value="true">Yes
	<br />
	<br />
	<label id='preliminaryL' style="font-weight: bold;">Contact with the service user's nominated invitees and support network</label> <br />
	<input type="checkbox" name="family" id='family' value="true">Family Member(s) <br />
	<input type="checkbox" name="guardian" id='guardian' value="true">Guardian(s) <br />
	<input type="checkbox" name="decisionMaker" id='decisionMaker' value="true">Substitute Decision Maker(s) <br />
	<input type="checkbox" name="advocate" id='advocate' value="true">Advocate(s) <br />
	<input type="checkbox" name="serviceReps" id='serviceReps' value="true">Representatives from other services accessed by the service user <br />
	<br />
	<hr>
	<br />
	<h2>Preparation for Personal Plan Meeting</h2>
	<br />
	<p>Check that all information that is pertinent to developing/updating a Personal Plan for an individual is available for reference during the personal planning process:</p>
	<br />
	<input type="checkbox" name="PBSPlan" id='PBSPlan' value="true">PBS Plan, including restrictive practice information (These plans are not to be reviewed at the PP meeting they are for reference as applicable). <br />
	<input type="checkbox" name="adaptive" id='adaptive' value="true">Adaptive Functioning Assessment<br />
	<input type="checkbox" name="CHAP" id='CHAP' value="true">Current CHAP and Related Health & Wellbeing information.<br />
	<input type="checkbox" name="currentPP" id='currentPP' value="true">Current Personal Plan (or any current support plans including; behaviour support, safe swallowing, medication, communication, mobility, other). <br />
	<input type="checkbox" name="serviceActivity" id='serviceActivity' value="true">Service Activity Options <br />
	<input type="checkbox" name="gatherInfo" id='gatherInfo' value="true">Gather any other information and knowledge relevant to the discussion related to the development of the Personalised Plan. <br />
	<input type="checkbox" name="medicationFolder" id='medicationFolder' value="true">Medication folder.<br />
	<input type="checkbox" name="personalBudget" id='personalBudget' value="true">Service user's personal budget <br />
	<input type="checkbox" name="reflections" id='reflections' value="true">Reflections/what we have discovered resource.<br />
	<br />
	<br />

	<p>Service Coordinator to ensure that the following documents are reviewed and updated as part of the personal plan process annually:</p>
	<input type="checkbox" name="photoRelease" id='photoRelease' value="true">Photo Release Form <br />
	<input type="checkbox" name="clientServiceAgreement" id='clientServiceAgreement' value="true">Client Service Agreement (once only) <br />
	<input type="checkbox" name="allSupportAgreements" id='allSupportAgreements' value="true">All Support Agreements <br />
	<input type="checkbox" name="CIMS" id='CIMS' value="true">CIMS Information <br />
	<input type="checkbox" name="medUpdatedYearly" id='medUpdatedYearly' value="true">Medication Folder and all forms, particularly the Medication Information Authorisation Form required to be updated annually <br />
	<input type="checkbox" name="personalBelongings" id='personalBelongings' value="true">Service User Schedule of Individual Personal Belongings <br />
	<input type="checkbox" name="PBSMaintenance" id='PBSMaintenance' value="true">PBS Maintenance plan. <br />
	<label for='otherT1' class='toggle'>Additional Comments:</label>
	<div id='otherD1'>
		<textarea id='otherT1' name='otherT1' rows="3" cols="50"></textarea>
	</div>
	<br />
	<hr>
	<br />
	<h2>Personal Plan Meeting and Outcomes</h2>
	<input type="checkbox" name="ppMeetingOutcomes" id='ppMeetingOutcomes' value="true">Personal Plan Meeting and Outcomes <br />
	<input type="checkbox" name="ppComplete" id='ppComplete' value="true">Personal Plan completed in full. <br />
	<input type="checkbox" name="ppSignedOff" id='ppSignedOff' value="true">Completed Personal Plan signed and distributed as required. <br />
	<input type="checkbox" name="thanked" id='thanked' value="true">All participants thanked for their input at the end of meeting. <br />
	<label for='otherT2' class='toggle'>Additional Comments:</label>
	<div id='otherD2'>
		<textarea id='otherT2' name='otherT2' rows="3" cols="50"></textarea>
	</div>
	<br />
	<hr>
	<br />
	<h2>Implementation of Personal Plan</h2>
	<input type="checkbox" name="choices" id='choices' value="true">Service user activity choices and preferences incorporated into the service. <br />
	<input type="checkbox" name="riskAssessment" id='riskAssessment' value="true">Risk Assessment Form/s completed as required. <br />
	<input type="checkbox" name="indivSupport" id='indivSupport' value="true">Individual Support / Progress notes prepared. <br />
	<input type="checkbox" name="goalProgressSummary" id='goalProgressSummary' value="true">Goal Progress Summary to be completed quarterly. <br />
	<input type="checkbox" name="prepare" id='prepare' value="true">Prepare Resources to support Implementation (as required).<br />
	<label for='otherT3' class='toggle'>Additional Comments:</label>
	<div id='otherD3'>
		<textarea id='otherT3' name='otherT3' rows="3" cols="50"></textarea>
	</div>

	<button id='SaveB'></button>


	<script type='text/javascript'>
		$(document).ready(function(){
			$("#SaveB").click(function(){
				var planMeeting = new Object();
				
				//Assign data to plan meeting object
				
				//Housekeeping data
 				planMeeting.meetingDate = $("#meetingDateT").val();
				//name of service
 				planMeeting.education =	$("#education").is(":checked");
 				planMeeting.learnLife = $("#learnLifestyle").is(":checked");
 				planMeeting.postSchool = $("#post-school").is(":checked");
	
				//Coordination of the personal plannning process
 				planMeeting.prelimMeetingDate =	$("#preliminaryT").val();
 				planMeeting.discussion_record =	$("#recordT").val();
 				
 				if ($("#confirmYes").is(":checked")) {
 					planMeeting.userChoicesImplemented = $("#confirmYes").val();
 				} else {
 					planMeeting.userChoicesImplemented = $("#confirmNo").val();
 				}
 				//planMeeting.userChoicesImplemented = //$("").val(); //#confirmYes, #confirmNo
 				planMeeting.infoCompleted = $("#informedDecision").is(":checked");
	
				//Contact with the service user's nominated invitees and support network 
				planMeeting.family = $("#family").is(":checked");
				planMeeting.guardian = $("#guardian").is(":checked");
				planMeeting.decisionMaker = $("#decisionMaker").is(":checked");
				planMeeting.advocate = $("#advocate").is(":checked");
				planMeeting.serviceReps = $("#serviceReps").is(":checked");

				//Preparation for Personal Plan Meeting
				//Check that all information that is pertinent to developing/updating a Personal Plan for an individual is available for reference during the personal planning process
				planMeeting.pbsPlan = $("#PBSPlan").is(":checked");
				planMeeting.adaptFuncAssessment = $("#adaptive").is(":checked");
				planMeeting.chapWellbeingInfo = $("#CHAP").is(":checked");
				planMeeting.currentPersonalPlan = $("#currentPP").is(":checked");
				planMeeting.serviceActivityOptions = $("#serviceActivity").is(":checked");
				planMeeting.otherInfo =	$("#gatherInfo").is(":checked");
				planMeeting.medication = $("#medicationFolder").is(":checked");
				planMeeting.userBudget = $("#personalBudget").is(":checked");
				planMeeting.reflections = $("#reflections").is(":checked");
					
				//Service Coordinator to ensure that the following documents are reviewed and updated as part of the personal plan process annually
				planMeeting.photoRelease = $("#photoRelease").is(":checked");
				planMeeting.clientServiceAgree = $("#clientServiceAgreement").is(":checked");
				planMeeting.allSuppAgree = 	$("#allSupportAgreements").is(":checked");
				planMeeting.cimsInfo = $("#CIMS").is(":checked");
				planMeeting.mediInfoAuth =	$("#medUpdatedYearly").is(":checked");
				planMeeting.schedPersonalBelongings = $("#personalBelongings").is(":checked");
				planMeeting.pbsMaintenancePlan = $("#PBSMaintenance").is(":checked");
				planMeeting.personalPlanComments = $("#otherT1").val();
				
				//personal plan meeting and outcomes
				planMeeting.personalMeetingPlanOutcomes = $("#ppMeetingOutcomes").is(":checked");
				planMeeting.personalPlanComplete =	$("#ppComplete").is(":checked");
				planMeeting.completePlanSigned = $("#ppSignedOff").is(":checked");
				planMeeting.planMeetingThanks = $("#thanked").is(":checked");
				planMeeting.personalMeetingPlanComments = $("#otherT2").val();
					
				//Implementation of personal plan
				planMeeting.participation = $("#choices").is(":checked");
				planMeeting.riskAssessForms = $("#riskAssessment").is(":checked");
				planMeeting.suppProgrssNotes = $("#indivSupport").is(":checked");
				planMeeting.goalProgressSummary = $("#goalProgressSummary").is(":checked");
				planMeeting.resourcesForImplementation = $("#prepare").is(":checked");
				planMeeting.implementComment = $("#otherT3").val();
				
				var jsonText = JSON.stringify(planMeeting);

				$.ajax({
					url:'./rest/planmeeting/' + $.cookie('user_id') + '/' + $.cookie('auth_token') +'/' + $("#serviceID").val(),
					type: 'POST',
					contentType: 'application/json',
					data: jsonText,
					complete: function(jqXHR, textStatus) {
						alert(textStatus);
						alert(jqXHR.responseText);
					}
				});
			});
		});
	</script>
	
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
</html></head>
<body>
</body>
</html>