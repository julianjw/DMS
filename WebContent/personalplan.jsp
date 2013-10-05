<jsp:include page="partials/head.html" flush="true" />

	<!--title -->
	Personal Plan
	
<jsp:include page="partials/nav.html" flush="true" />
	<!-- navigation -->
	<!-- 	<h3>Personal Plan Nav</h3> -->
	<a href='personalplanedit.jsp'>Edit Existing Plan</a>
	
	<div class="horizontalNav">
	<ul>
		<li id="search" class='pageNav'><a href='#search'>Personal Plan</a></li>
		<li id="client" class="pageNav"><a href='#client'>Client Details</a></li>
		<li id="health" class="pageNav"><a href='#health'>Health Details</a></li>
		<li id="support" class="pageNav"><a href='#support'>Support Required</a></li>
		<li id="communication" class="pageNav"><a href='#communication'>Communication</a></li>
		<li id="education" class="pageNav"><a href='#education'>Education and Employment</a></li>
		<li id="planning" class="pageNav"><a href='#planning'>Planning</a></li>
	</ul>
	</div>
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	<div id="searchD" ><jsp:include page="personalplan/search.html" flush="true" /></div>
	<div id="clientD" class="hidden"><jsp:include page="personalplan/client.html" flush="true" /></div>
	<div id="healthD" class="hidden"><jsp:include page="personalplan/health.html" flush="true" /></div>
	<div id="supportD" class="hidden"><jsp:include page="personalplan/support.html" flush="true" /></div>
	<div id="communicationD" class="hidden"><jsp:include page="personalplan/communication.html" flush="true" /></div>
	<div id="educationD" class="hidden"><jsp:include page="personalplan/education.html" flush="true" /></div>
 	<div id="planningD" class="hidden"><jsp:include page="personalplan/planning.html" flush="true" /></div>
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script>
function PageNavigation(dir, nav, el) {
	var clientPageDivNav = new Array("detailsD", "alertInfoD", "livingD", "formalD");
	var eduPageDivNav = new Array("educationD", "employmentD");
	var healthPageDivNav = new Array("healthD", "hManagementD", "dietD");
	var planPageDivNav = new Array("holidayD", "goalsDiv");
	var supportPageDivNav = new Array("supportD", "mobilityD", "financialD", "activitiesD", "relaxationD");
	
	switch(nav) {
		case "client":
			var navArr = clientPageDivNav.slice(0);
			break;
		case "edu":
			var navArr = eduPageDivNav.slice(0);
			break;
		case "health":
			var navArr = healthPageDivNav.slice(0);
			break;
		case "planning":
			var navArr = planPageDivNav.slice(0);
			break;
		case "support":
			var navArr = supportPageDivNav.slice(0);
			break;
	}
	
	
	for(var i=0; i<navArr.length; i++) {
		if($("#" + navArr[i]).css('display') != 'none') {
			//perform page navigation
			if(dir=="next") {
				//show the next div and previous button
				$("#" + navArr[i+1]).show();
				$(el).prev().show();
				//show the submit button and hide next button if we are on the last page
				if(i+1==navArr.length-1) {
					$(el).hide();
					$(el).next('.submitButton').show();
				}
			}else if(dir=='prev') {
				//show the next button
				$(el).next().show();
				//hide the submit button
				$(el).next().next().hide();
				//show previous div
				$("#" + navArr[i-1]).show();
				//hide the previous button if we are on the first page
				if(i-1==0) {
					$(el).hide();
				}
			}
			//hide the current div
			$("#" + navArr[i]).hide();
			break;
		}
	}
};



function pullData(page) {
	switch(page) {
	
	case "new":
		$.removeCookie('client_id');
		
		//client
		$("#nameT").val("");
		$("#IDT").val("");
		$("#nicknameT").val("");
		putDate();
		$("#reviceDateT").val("");
		$("#phoneT").val("");
		$("#mobileT").val("");
		$("#emailT").val("");
		$("#dobT").val("");	
		
		$("#allergiesT").val("");
		$("#supportNeedsT").val("");
		$("#safeEatingT").val("");
		$("#guardianT").val("");
		$("#meddicalT").val("");
		$("#otherT").val("");
		$("#phobiasT").val("");
		$("#restrictiveT").val("");
		$("#safetyConcernsT").val("");		

		$("#addressT").val("");
		$("#phoneT").val("");
		$("#serviceT").val("");
		$("#sickContactT").val("");	
		
		$("#appointeeT").val("");
		$("#startDateT").val("");
		$("#contactArrangT").val("");
		$("#detailsT").val("");
		$("#famContactDeetsT").val("");
		$("#justiceT").val("");
		$("#orderForT").val("");
		$("#orderLocationT").val("");
		$("#orderOtherInfoT").val("");
		$("#protOrderT").val("");
		$("#specialConT").val("");
		$("#childSupportOfficerT").val("");
		$("#communityVisitorT").val("");
		
		
		
		//health
		$('#safeEatingCy').prop('checked', false);
		$('#safeEatingCn').prop('checked', false);

		$("#foodShouldntEatT").val("");
		$("#breakfastT").val("");
		$("#foodCantEatT").val("");
		$("#dinnerT").val("");
		$("#foodDislikeT").val("");
		$("#supportEatT").val("");
		$("#locationT").val("");
		$("#lunchT").val("");
		$("#otherT").val("");
		$("#snacksT").val("");
		$("#supportDrinkT").val("");
		$("#generalEatT").val("");
		
		$("#additionalT").val("");
		$("#medContactT").val("");
		$("#reqAssistYes").prop("checked", false);
		$("#reqAssistNo").prop("checked", false);
		$("#selfMedYes").prop("checked", false);
		$("#selfMedNo").prop("checked", false);
		$("#takeMedsYes").prop("checked", false);
		$("#takeMedsNo").prop("checked", false);	
		$("#supportT").val("");
		$("#relevantT").val("");
		
		$("#durationT").val("");
		$("#freqT").val("");
		$("#medConditionT").val("");
		$("#orderOfFreq").val("");
		$("#dinnerT").val("");
		$("#seizureT").val("");
		$("#seizure2T").val("");
		$("#carerActionT").val("");
		$("#beforeT").val("");
		$("#avoidanceT").val("");
		
		
		
		
		
		
		
		
		
		
		//communication
		$("#ICommunicateT").val("");
		$("#youCommunicateT").val("");
		$("#supportPeopleT").val("");
		$("#supportMeByT").val("");
		$("#independantDecisionsT").val("");
		$("#goodTopicsT").val("");
		$("#likesT").val("");
		$("#dislikesT").val("");
		
		
		
		//education and employment
		$("#addressT").val("");
		$("#communityAssistanceT").val("");
		$("#contactPersonT").val("");
		$("#eduSupportPlanT").val("");
		$("#enrolledCourseT").val("");
		$("#institutionNameT").val("");
		$("#liaisonT").val("");
		$("#otherSupportRequiredT").val("");
		$("#studySupportT").val("");
		$("#supportPersonsT").val("");
		$("#teacherT").val("");
		
		
		$("#addressEmploymentT").val("");
		$("#annualLeaveT").val("");
		$("#arrangementsT").val("");
		$("#contactPersonT").val("");
		$("#employerT").val("");
		$("#equipmentT").val("");
		$("#positionT").val("");
		$("#sickLeaveT").val("");
		$("#transportT").val("");
		
		break;
	
	case "clientD":
		
		//pull the name
		$.ajax({
			url: "./rest/user/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + $.cookie('client_id'),
			type:"get",
			contentType: "application/json",
			success: function(d) {		
				$("#nameT").val(d.rName);
				$("#IDT").val(d.user_id);

			},
			error: function(xhr) {
				// do something to handle error
				
			}
		});
		
		//pull details
		$.ajax({
			url: "./rest/personalplan/clientdetails/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + $.cookie('client_id'),
			type:"get",
			contentType: "application/json",
			success: function(d) {		
				
				
				$("#nicknameT").val(d.personalDetails.preferredName);
				if(d.personalDetails.creationDate=="") {
					putDate();
				}else {
					$("#createDateT").val(d.personalDetails.creationDate);
				}
				$("#reviceDateT").val(d.personalDetails.reviewDate);
				$("#phoneT").val(d.personalDetails.phoneNumber);
				$("#mobileT").val(d.personalDetails.mobileNumber);
				$("#emailT").val(d.personalDetails.email);
				$("#dobT").val(d.personalDetails.dob);
				
				
				$("#allergiesT").val(d.alertInformation.allergies);
				$("#supportNeedsT").val(d.alertInformation.complexSupportNeeds);
				$("#safeEatingT").val(d.alertInformation.eatingAlerts);
				$("#guardianT").val(d.alertInformation.guardianOrders);
				$("#meddicalT").val(d.alertInformation.medIssues);
				$("#otherT").val(d.alertInformation.otherInfo);
				$("#phobiasT").val(d.alertInformation.phobias);
				$("#restrictiveT").val(d.alertInformation.restrictive);
				$("#safetyConcernsT").val(d.alertInformation.safetyConcerns);
				

				$("#addressT").val(d.livingArangements.address);
				$("#phoneT").val(d.livingArangements.phoneNumber);
				$("#serviceT").val(d.livingArangements.service);
				$("#sickContactT").val(d.livingArangements.sickContact);
				
				
				$("#appointeeT").val(d.formalOrders.appointee);
				$("#startDateT").val(d.formalOrders.commenceDate);
				$("#contactArrangT").val(d.formalOrders.contactArrangement);
				$("#detailsT").val(d.formalOrders.details);
				$("#famContactDeetsT").val(d.formalOrders.familyContact);
				$("#justiceT").val(d.formalOrders.justiceRequirements);
				$("#orderForT").val(d.formalOrders.orderFor);
				$("#orderLocationT").val(d.formalOrders.orderLocation);
				$("#orderOtherInfoT").val(d.formalOrders.otherInfo);
				$("#protOrderT").val(d.formalOrders.protectionOrder);
				$("#specialConT").val(d.formalOrders.specialConditions);
				$("#childSupportOfficerT").val(d.formalOrders.childSupportOfficer);
				$("#communityVisitorT").val(d.formalOrders.visitorInfo);
				
			  	
			},
			error: function(xhr) {
				// do something to handle error
				
			}
		});
		break;
		
	case "healthD":
		$.ajax({
			url: "./rest/personalplan/healthdetails/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + $.cookie('client_id'),
			type:"get",
			contentType: "application/json",
			success: function(d) {		
				//safe eating
				//frequency
				if(d.dietaryRequirements.assessmentDone = true) {
					$('#safeEatingCy').prop('checked', true);
				}else {
					$('#safeEatingCn').prop('checked', true);
				}
				$("#foodShouldntEatT").val(d.dietaryRequirements.avoidFood);
				$("#breakfastT").val(d.dietaryRequirements.breakfast);
				$("#foodCantEatT").val(d.dietaryRequirements.cannotEat);
				$("#dinnerT").val(d.dietaryRequirements.dinner);
				$("#foodDislikeT").val(d.dietaryRequirements.dislikes);
				$("#supportEatT").val(d.dietaryRequirements.eatingSupport);
				$("#locationT").val(d.dietaryRequirements.location);
				$("#lunchT").val(d.dietaryRequirements.lunch);
				$("#otherT").val(d.dietaryRequirements.otherInfo);
				$("#snacksT").val(d.dietaryRequirements.snacks);
				$("#supportDrinkT").val(d.dietaryRequirements.supportDrinking);
				$("#generalEatT").val(d.dietaryRequirements.usualDiet);
				
				
				$("#additionalT").val(d.healthInformation.additionalInfo);
				$("#medContactT").val(d.healthInformation.allMedicalInfo);
				
				if(d.healthInformation.assistanceWithMedication = true) {
					$("#reqAssistYes").prop("checked", true);
				}else {
					$("#reqAssistNo").prop("checked", true);
				}
				
				if(d.healthInformation.selfMedicate = true) {
					$("#selfMedYes").prop("checked", true);
				}else {
					$("#selfMedNo").prop("checked", true);
				}
		
				if(d.healthInformation.takeMedication = true) {
					$("#takeMedsYes").prop("checked", true);
				}else {
					$("#takeMedsNo").prop("checked", true);
				}
				
				$("#supportT").val(d.healthInformation.conditions);
				$("#relevantT").val(d.healthInformation.historyAndInfo);
				
		
				$("#durationT").val(d.healthManagement.duration);
				$("#freqT").val(d.healthManagement.frequency);
				$("#medConditionT").val(d.healthManagement.medicalCondition);
				$("#orderOfFreq").val(d.healthManagement.frequencyPeriod);
				$("#dinnerT").val(d.healthManagement.precurser);
				$("#seizureT").val(d.healthManagement.seizureBrief);
				$("#seizure2T").val(d.healthManagement.seizureNonBrief);
				$("#carerActionT").val(d.healthManagement.staffResponse);
				$("#beforeT").val(d.healthManagement.symptom);
				$("#avoidanceT").val(d.healthManagement.symptomAvoidance);
			},
			error: function(xhr) {
				// do something to handle error
				
			}
		});
		break;
		
	case "supportD":
			
			break;
		
	case "communicationD":
		$.ajax({
			url: "./rest/personalplan/communication/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + $.cookie('client_id'),
			type:"get",
			contentType: "application/json",
			success: function(d) {		
				$("#ICommunicateT").val(d.comsAndDecisionMaking.iCommunicate);
				$("#youCommunicateT").val(d.comsAndDecisionMaking.youCommunicate);
				$("#supportPeopleT").val(d.comsAndDecisionMaking.supportPeople);
				$("#supportMeByT").val(d.comsAndDecisionMaking.supportMeBy);
				$("#independantDecisionsT").val(d.comsAndDecisionMaking.independantDecisions);
				$("#goodTopicsT").val(d.comsAndDecisionMaking.goodTopics);
				$("#likesT").val(d.comsAndDecisionMaking.likes);
				$("#dislikesT").val(d.comsAndDecisionMaking.dislikes);
			},
			error: function(xhr) {
				// do something to handle error
				
			}
		});
		break;
	
	case "educationD":
		$.ajax({
			url: "./rest/personalplan/educationemployment/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + $.cookie('client_id'),
			type:"get",
			contentType: "application/json",
			success: function(d) {		
				$("#addressT").val(d.education.address);
				$("#communityAssistanceT").val(d.education.communityAssistance);
				$("#contactPersonT").val(d.education.contactPerson);
				$("#eduSupportPlanT").val(d.education.eduSupportPlan);
				$("#enrolledCourseT").val(d.education.enrolledCourse);
				$("#institutionNameT").val(d.education.institutionName);
				$("#liaisonT").val(d.education.liaison);
				$("#otherSupportRequiredT").val(d.education.otherSupportRequired);
				$("#studySupportT").val(d.education.studySupport);
				$("#supportPersonsT").val(d.education.supportPersons);
				$("#teacherT").val(d.education.teacher);
				
				
				$("#addressEmploymentT").val(d.employment.address);
				$("#annualLeaveT").val(d.employment.annualLeave);
				$("#arrangementsT").val(d.employment.arrangements);
				$("#contactPersonT").val(d.employment.contactPerson);
				$("#employerT").val(d.employment.employer);
				$("#equipmentT").val(d.employment.equipment);
				$("#positionT").val(d.employment.position);
				$("#sickLeaveT").val(d.employment.sickLeave);
				$("#transportT").val(d.employment.transport);
			},
			error: function(xhr) {
				// do something to handle error
				
			}
		});
		break;
		
	
	case "planningD":
		
		break;
		
	};
}




function nextNav(current) {
	var nav = new Array("searchD", "clientD", "healthD", "supportD", "communicationD", "educationD", "planningD");	
		
	for(var i=0; i<nav.length-1; i++) {		
		if(nav[i]==current) {
			$("#"+nav[i]).hide();
			pullData(nav[i+1]);
			$("#"+nav[i+1]).show();
		}
	}
}



$(document).ready(function(){
	//page load
	//hide nav buttons
	$(".submitButton").hide();
	$(".prevButton").hide();
	
	
	var navs = new Array("searchD", "clientD", "healthD", "supportD", "communicationD", "educationD", "planningD");	
	//bind the navigation clicks
	$('li.pageNav').bind('click', function(){
		for (var i=0; i<navs.length-1;i++) {
			if (navs[i] != ($(this).attr('id')+"D")) {
				$("#"+navs[i]).hide();
			} else {
				pullData(navs[i]);
				$("#"+navs[i]).show();
			}
		}
	});
	
	
	//click on toggle class element
	$(".toggle").click(function(event){
		$(this).next().toggle();
	});
	
	
	//click on the new PP button
	$("#createNewPPButton").click(function(){
		$("#searchD").hide();
		$("#clientD").show();
	});
	
});
</script>
</html></head>
<body>
</body>
</html>