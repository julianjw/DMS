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
	
	function checkBoolean(text) {
		
		if (text == "true") {
			return true;
		} else if (text == "false") {
			return false;
		}
	}
	
	function pullData(page) {
		switch(page) {
		
		case "new":
			$.removeCookie('client_id');
		
			$("#serviceID").empty();
		
			//Housekeeping data
			//$("#serviceID").val("");
			$.ajax({
				url: "./rest/user/getallclients/" + $.cookie('user_id') + "/" + $.cookie('auth_token'),
				type:"get",
				contentType: "application/json",
				success: function(d) {		
					
					for (var i=0; i<d.dmsClientUser.length; i++) {
						
						$("#serviceID").append('<option value=' + d.dmsClientUser[i].user_id + '>' + d.dmsClientUser[i].user_id + '</option>');
						
						if (i==0) {
							$("#serviceUsernameT").val(d.dmsClientUser[i].rName);
						}
					}

				},
				error: function(xhr) {
					// do something to handle error
					alert(xhr.responseText);
				}
			});
			
			//$("#serviceUsernameT").val("");
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
					//if (d.education == 1) {
					//	$("#education").prop('checked', true);
					//}
					console.log(d);
					
					$("#education").prop('checked', checkBoolean(d.education));
					//alert("hello?");
					//alert($("#learningLifestyle").prop('checked'));
					$("#learningLifestyle").prop('checked', checkBoolean(d.learnlife));
					//alert("d.learnLife = " + d.learnLife);
					//alert($("#learningLifestyle").prop('checked'));
					$("#post-school").prop('checked', checkBoolean(d.postSchool));

					//Coordination of the personal plannning process
					$("#preliminaryT").val(d.prelimMeetingDate);
					$("#recordT").val(d.discussion_record);
					
					if (d.userChoicesImplemented == "true") {
						
						$("#confirmYes").prop('checked', true);
						$("#confirmNo").prop('checked', false);
						
					} else {
						
						$("#confirmYes").prop('checked', false);
						$("#confirmNo").prop('checked', true);
					}

					//planMeeting.userChoicesImplemented = //$("").val(); //#confirmYes, #confirmNo
					$("#informedDecision").prop('checked', checkBoolean(d.infoCompleted));

					//Contact with the service user's nominated invitees and support network 
					$("#family").prop('checked', checkBoolean(d.family));
					$("#guardian").prop('checked', checkBoolean(d.guardian));
					$("#decisionMaker").prop('checked', checkBoolean(d.decisionMaker));
					$("#advocate").prop('checked', checkBoolean(d.advocate));
					$("#serviceReps").prop('checked', checkBoolean(d.serviceReps));

					//Preparation for Personal Plan Meeting
					//Check that all information that is pertinent to developing/updating a Personal Plan for an individual is available for reference during the personal planning process
					$("#PBSPlan").prop('checked', checkBoolean(d.pbsPlan));
					$("#adaptive").prop('checked', checkBoolean(d.adaptFuncAssessment));
					$("#CHAP").prop('checked', checkBoolean(d.chapWellbeingInfo));
					$("#currentPP").prop('checked', checkBoolean(d.currentPersonalPlan));
					$("#serviceActivity").prop('checked', checkBoolean(d.serviceActivityOptions));
					$("#gatherInfo").prop('checked', checkBoolean(d.otherInfo));
					$("#medicationFolder").prop('checked', checkBoolean(d.medication));
					$("#personalBudget").prop('checked', checkBoolean(d.userBudget));
					$("#reflections").prop('checked', checkBoolean(d.reflections));
						
					//Service Coordinator to ensure that the following documents are reviewed and updated as part of the personal plan process annually
					$("#photoRelease").prop('checked', checkBoolean(d.photoRelease));
					$("#clientServiceAgreement").prop('checked', checkBoolean(d.clientServiceAgree));
					$("#allSupportAgreements").prop('checked', checkBoolean(d.allSuppAgree));
					$("#CIMS").prop('checked', checkBoolean(d.cimsInfo));
					$("#medUpdatedYearly").prop('checked', checkBoolean(d.mediInfoAuth));
					$("#personalBelongings").prop('checked', checkBoolean(d.schedPersonalBelongings));
					$("#PBSMaintenance").prop('checked', checkBoolean(d.pbsMaintenancePlan));
					$("#otherT1").val(d.personalPlanComments);
					
					//personal plan meeting and outcomes
					$("#ppMeetingOutcomes").prop('checked', checkBoolean(d.personalMeetingPlanOutcomes));
					$("#ppComplete").prop('checked', checkBoolean(d.personalPlanComplete));
					$("#ppSignedOff").prop('checked', checkBoolean(d.completePlanSigned));
					$("#thanked").prop('checked', checkBoolean(d.planMeetingThanks));
					$("#otherT2").val(d.personalMeetingPlanComments);
						
					//Implementation of personal plan
					$("#choices").prop('checked', checkBoolean(d.participation));
					$("#riskAssessment").prop('checked', checkBoolean(d.riskAssessForms));
					$("#indivSupport").prop('checked', checkBoolean(d.suppProgrssNotes));
					$("#goalProgressSummary").prop('checked', checkBoolean(d.goalProgressSummary));
					$("#prepare").prop('checked', checkBoolean(d.resourcesForImplementation));
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
			if ($("#meetingDateT").val() == "") {
				pullData("new");
			}
		});
		

		
	});

	
	
	if($.cookie('user_role')=="r&do" || $.cookie('user_role')=="som" || $.cookie('user_role')=="sdim") {
		
	}else {
		window.location.replace("http://" + window.location.hostname + ":8080/EndeavourDMS/restricted.jsp");
	}
		$(document).ready(function(){
			
			$("#SaveB").click(function(){
				
				if ($("#serviceID").val() == "") {
					
					alert("You must select a client to create a meeting for.");
					
				} else {
				
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
				}
			});
		});
	</script>
	
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
</html></head>
<body>
</body>
</html>