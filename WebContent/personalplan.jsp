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



function nextNav(current) {
	var nav = new Array("searchD", "clientD", "healthD", "supportD", "communicationD", "educationD", "planningD");	
		
	for(var i=0; i<nav.length-1; i++) {		
		if(nav[i]==current) {
			$("#"+nav[i]).hide();
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