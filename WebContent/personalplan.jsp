<jsp:include page="partials/head.html" flush="true" />

	<!--title -->
	Personal Plan
	
<jsp:include page="partials/nav.html" flush="true" />
	<!-- navigation -->
	<!-- 	<h3>Personal Plan Nav</h3> -->
	<a href='personalplanedit.jsp'>Edit Existing Plan</a>
	
	<div class="horizontalNav">
	<ul>
		<li id="search" class='pageNav'><a href='#search'>Search</a></li>
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
	<%-- <div id="healthD" class="hidden"><jsp:include page="personalplan/health.html" flush="true" /></div>
	<div id="supportD" class="hidden"><jsp:include page="personalplan/support.html" flush="true" /></div>
	<div id="communicationD" class="hidden"><jsp:include page="personalplan/communication.html" flush="true" /></div>
	<div id="educationD" class="hidden"><jsp:include page="personalplan/education.html" flush="true" /></div>
 	<div id="planningD" class="hidden"><jsp:include page="personalplan/planning.html" flush="true" /></div> --%>
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script>
function PageNavigation(dir, navArr) {
	for(var i=0; i<navArr.length; i++) {
		if($("#" + navArr[i]).css('display') != 'none') {
			//perform page navigation
			if(dir=="next") {
				var el = $(this).prev('.prevButton');
				alert($(this));
				$("#" + navArr[i+1]).show();
				//show the submit button and hide next button if we are on the last page
				if(i+1==navArr.length-1) {
					$(this).hide();
					$(this).next('.submitButton').show();
				}
			}else if(dir=='prev') {
				$(this).next().show();
				$(this).next('.submitButton').hide();
				$("#" + navArr[i-1]).show();
				//hide the previous button if we are on the first page
				if(i-1==0) {
					$(this).hide();
				}
			}
			//hide the current div
			$("#" + navArr[i]).hide();
			break;
		}
	}
};




$(document).ready(function(){
	//page load
	//hide nav buttons
	$(".submitButton").hide();
	$(".prevButton").hide();
	
	
	//TESTING
	$.cookie('client_id', 'coolbeans');
	
	
	
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
	
});
</script>
</html></head>
<body>
</body>
</html>