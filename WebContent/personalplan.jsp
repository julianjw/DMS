<jsp:include page="partials/head.html" flush="true" />
	<!-- navigation -->
<!-- 	<h3>Personal Plan Nav</h3> -->
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
<jsp:include page="partials/nav.html" flush="true" />
	<!--title -->
	Personal Plan
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->

	<div id="clientD" class="hidden"><jsp:include page="client.html" flush="true" /></div>
	<div id="healthD" class="hidden"><jsp:include page="health.html" flush="true" /></div>
	<div id="supportD" class="hidden"><jsp:include page="support.html" flush="true" /></div>
	<div id="communicationD" class="hidden"><jsp:include page="communication.html" flush="true" /></div>
	<div id="educationD" class="hidden"><jsp:include page="education.html" flush="true" /></div>
<%-- 	<div id="planningD" class="hidden"><jsp:include page="planning.html" flush="true" /></div> --%>
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script>
$(document).ready(function(){
	
	var navs = new Array("clientD", "healthD", "supportD", "communicationD", "educationD", "planningD");
	
	$("#"+navs[0]).show();

	
	$('li.pageNav').bind('click', function(){
		
		for (var i=0; i<navs.length;i++) {
			
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