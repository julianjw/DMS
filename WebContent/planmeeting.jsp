<jsp:include page="partials/head.html" flush="true" />
	<!-- navigation -->
<!-- 	<h3>Personal Plan Nav</h3> -->
<div class="horizontalNav">
<ul>
	<li id="search" class='pageNav'><a href='#search' class='navTopLeft navBottomLeft'>Saved Meetings</a></li>
	<li id="meeting" class="pageNav"><a href='#meeting' class='navTopRight navBottomRight'>New Meeting</a></li>
</ul>
</div>
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	
	<div id="searchD" class="hidden"><jsp:include page="planmeeting/searchmeeting.html" flush="true" /></div>
	<div id="meetingD" class="hidden"><jsp:include page="planmeeting/meeting.html" flush="true" /></div>


	<script type='text/javascript'>
	
	function pullData(page) {
		switch(page) {
		
		case "new":
			$.removeCookie('client_id');
		
			//Housekeeping data
			$("#serviceID").val("");
			$("#serviceUsernameT").val("");
			$("#meetingDateT").val("");
			//name of service
			$("#education").prop('checked', false);
			$("#learningLifestyle").prop('checked', false);
			$("#post-school").prop('checked', false);

			//Coordination of the personal plannning process
			$("#preliminaryT").val("");
			$("#recordT").val("");
			

			$("#confirmYes").prop('checked', false);

			$("#confirmNo").prop('checked', false);

			//planMeeting.userChoicesImplemented = //$("").val(); //#confirmYes, #confirmNo
			$("#informedDecision").prop('checked', false);

			//Contact with the service user's nominated invitees and support network 
			$("#family").prop('checked', false);
			$("#guardian").prop('checked', false);
			$("#decisionMaker").prop('checked', false);
			$("#advocate").prop('checked', false);
			$("#serviceReps").prop('checked', false);

			//Preparation for Personal Plan Meeting
			//Check that all information that is pertinent to developing/updating a Personal Plan for an individual is available for reference during the personal planning process
			$("#PBSPlan").prop('checked', false);
			$("#adaptive").prop('checked', false);
			$("#CHAP").prop('checked', false);
			$("#currentPP").prop('checked', false);
			$("#serviceActivity").prop('checked', false);
			$("#gatherInfo").prop('checked', false);
			$("#medicationFolder").prop('checked', false);
			$("#personalBudget").prop('checked', false);
			$("#reflections").prop('checked', false);
				
			//Service Coordinator to ensure that the following documents are reviewed and updated as part of the personal plan process annually
			$("#photoRelease").prop('checked', false);
			$("#clientServiceAgreement").prop('checked', false);
			$("#allSupportAgreements").prop('checked', false);
			$("#CIMS").prop('checked', false);
			$("#medUpdatedYearly").prop('checked', false);
			$("#personalBelongings").prop('checked', false);
			$("#PBSMaintenance").prop('checked', false);
			$("#otherT1").val("");
			
			//personal plan meeting and outcomes
			$("#ppMeetingOutcomes").prop('checked', false);
			$("#ppComplete").prop('checked', false);
			$("#ppSignedOff").prop('checked', false);
			$("#thanked").prop('checked', false);
			$("#otherT2").val("");
				
			//Implementation of personal plan
			$("#choices").prop('checked', false);
			$("#riskAssessment").prop('checked', false);
			$("#indivSupport").prop('checked', false);
			$("#goalProgressSummary").prop('checked', false);
			$("#prepare").prop('checked', false);
			$("#otherT3").val("");
			
			break;
		
		case "meetingD":
			
			//pull the name
			$.ajax({
				url: "./rest/user/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + $.cookie('client_id'),
				type:"get",
				contentType: "application/json",
				success: function(d) {		
					$("#serviceUsernameT").val(d.rName);
					$("#serviceID").val(d.user_id);

				},
				error: function(xhr) {
					// do something to handle error
					alert(xhr.responseText);
				}
			});
			
			//get the data and display it
			$.ajax({
				url:'./rest/planmeeting/' + $.cookie('user_id') + '/' + $.cookie('auth_token') +'/' + $.cookie('client_id'),
				type:"get",
				contentType: "application/json",
				success: function(d) {		

					//display the data
					//Housekeeping data
					$("#meetingDateT").val(d.meetingDate);
					//name of service
					$("#education").prop('checked', d.education);
					$("#learningLifestyle").prop('checked', d.learnlife);
					$("#post-school").prop('checked', d.postSchool);

					//Coordination of the personal plannning process
					$("#preliminaryT").val(d.prelimMeetingDate);
					$("#recordT").val(d.discussion_record);
					
					if (d.userChoicesImplemented == true) {
						
						$("#confirmYes").prop('checked', true);
						$("#confirmNo").prop('checked', false);
						
					} else {
						
						$("#confirmYes").prop('checked', false);
						$("#confirmNo").prop('checked', true);
					}

					//planMeeting.userChoicesImplemented = //$("").val(); //#confirmYes, #confirmNo
					$("#informedDecision").prop('checked', d.infoCompleted);

					//Contact with the service user's nominated invitees and support network 
					$("#family").prop('checked', d.family);
					$("#guardian").prop('checked', d.guardian);
					$("#decisionMaker").prop('checked', d.decisionMaker);
					$("#advocate").prop('checked', d.advocate);
					$("#serviceReps").prop('checked', d.serviceReps);

					//Preparation for Personal Plan Meeting
					//Check that all information that is pertinent to developing/updating a Personal Plan for an individual is available for reference during the personal planning process
					$("#PBSPlan").prop('checked', d.pbsPlan);
					$("#adaptive").prop('checked', d.adaptFuncAssessment);
					$("#CHAP").prop('checked', d.chapWellbeingInfo);
					$("#currentPP").prop('checked', d.currentPersonalPlan);
					$("#serviceActivity").prop('checked', d.serviceActivityOptions);
					$("#gatherInfo").prop('checked', d.otherInfo);
					$("#medicationFolder").prop('checked', d.medication);
					$("#personalBudget").prop('checked', d.userBudget);
					$("#reflections").prop('checked', d.reflections);
						
					//Service Coordinator to ensure that the following documents are reviewed and updated as part of the personal plan process annually
					$("#photoRelease").prop('checked', d.photoRelease);
					$("#clientServiceAgreement").prop('checked', d.clientServiceAgree);
					$("#allSupportAgreements").prop('checked', d.allSuppAgree);
					$("#CIMS").prop('checked', d.cimsInfo);
					$("#medUpdatedYearly").prop('checked', d.mediInfoAuth);
					$("#personalBelongings").prop('checked', d.schedPersonalBelongings);
					$("#PBSMaintenance").prop('checked', d.pbsMaintenancePlan);
					$("#otherT1").val(d.personalPlanComments);
					
					//personal plan meeting and outcomes
					$("#ppMeetingOutcomes").prop('checked', d.personalMeetingPlanOutcomes);
					$("#ppComplete").prop('checked', d.personalPlanComplete);
					$("#ppSignedOff").prop('checked', d.completePlanSigned);
					$("#thanked").prop('checked', d.planMeetingThanks);
					$("#otherT2").val(d.personalMeetingPlanComments);
						
					//Implementation of personal plan
					$("#choices").prop('checked', d.participation);
					$("#riskAssessment").prop('checked', d.riskAssessForms);
					$("#indivSupport").prop('checked', d.suppProgrssNotes);
					$("#goalProgressSummary").prop('checked', d.goalProgressSummary);
					$("#prepare").prop('checked', d.resourcesForImplementation);
					$("#otherT3").val(d.implementComment);
					
				}
			});
			
			break;
		}
	}
	
	$(document).ready(function(){

		$("#searchD").show();

		//BINDS
		//click on existing risk assessments nav link
		$("#search").click(function(){
			$("#meetingD").hide();
			$("#searchD").show();
		});
		
		//click on risk assessment nav link
		$("#meeting").click(function(){
			$("#searchD").hide();
			$("#meetingD").show();
		});
		
	});

	
	
	if($.cookie('user_role')=="r&do" || $.cookie('user_role')=="som" || $.cookie('user_role')=="sdim") {
		
	}else {
		window.location.replace("http://" + window.location.hostname + ":8080/EndeavourDMS/restricted.jsp");
	}
		$(document).ready(function(){
			
			$("#SaveB").click(function(){
				var planMeeting = new Object();
				
				//Assign data to plan meeting object
				
				//Housekeeping data
 				planMeeting.meetingDate = $("#meetingDateT").val();
				//name of service
 				planMeeting.education =	$("#education").is(":checked");
 				planMeeting.learnLife = $("#learningLifestyle").is(":checked");
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
					success: function(data, jqXHR, textStatus) {
						window.location.reload(true);
					},
					error: function(){
						alert("ERROR");
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