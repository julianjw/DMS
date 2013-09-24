<jsp:include page="partials/head.html" flush="true" />

	<!--title -->
	Personal Plan
	
<jsp:include page="partials/nav.html" flush="true" />
	<!-- navigation -->
	<!-- 	<h3>Personal Plan Nav</h3> -->
	<a href='personalplanedit.jsp'>Edit Existing Plan</a>
	
	<div class="horizontalNav">
	<ul>
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
	<button id='PageNavPrev' name='PageNavPrev' >Previous</button>	
	<button id='PageNavNext' name='PageNavNext' >Next</button>
	<button id='PageNavSubmitB' name='PageNavSubmitB'>Submit</button>
	
	<div id="clientD" class="hidden"><jsp:include page="personalplan/client.html" flush="true" /></div>
	<div id="healthD" class="hidden"><jsp:include page="personalplan/health.html" flush="true" /></div>
	<div id="supportD" class="hidden"><jsp:include page="personalplan/support.html" flush="true" /></div>
	<div id="communicationD" class="hidden"><jsp:include page="personalplan/communication.html" flush="true" /></div>
	<div id="educationD" class="hidden"><jsp:include page="personalplan/education.html" flush="true" /></div>
 	<div id="planningD" class="hidden"><jsp:include page="personalplan/planning.html" flush="true" /></div>
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script>
$(document).ready(function(){
	
	//click on the previous button
	$("#PageNavPrev").click(function(){
		PageNavigation('prev');
	});

	//click on the next button
	$("#PageNavNext").click(function(){
		PageNavigation('next');
	});

	//click on toggle class element
	$(".toggle").click(function(event){
		$(this).next().toggle();
	});
	
	var navs = new Array("clientD", "healthD", "supportD", "communicationD", "educationD", "planningD");
	
	//show the first navigation
	$("#"+navs[0]).show();
	

	//bind the navigation clicks
	$('li.pageNav').bind('click', function(){
		
		for (var i=0; i<navs.length-1;i++) {
			
			if (navs[i] != ($(this).attr('id')+"D")) {
				$("#"+navs[i]).hide();
			} else {
				$("#"+navs[i]).show();
			}
		}
		
		//$("#"+$(this).attr('id')+"D").show();
		
		//$(this).attr('id');
	});
});
</script>
</html></head>
<body>
</body>
</html>