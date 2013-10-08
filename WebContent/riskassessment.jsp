<jsp:include page="partials/head.html" flush="true" />
	<!--title -->
	Risk Assessment
<jsp:include page="partials/nav.html" flush="true" />
	<!-- navigation -->
<div class="horizontalNav">
<ul>
	<li id="search" class='pageNav'><a href='#search'>Existing Risk Assessments</a></li>
	<li id="risk" class="pageNav"><a href='#risk'>Risk Assessment</a></li>
</ul>
</div>
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	<div id="searchD" ><jsp:include page="riskassessment/search.html" flush="true" /></div>
	<div id="riskD" class="hidden"><jsp:include page="riskassessment/risk.html" flush="true" /></div>
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script type='text/javascript'>

function pullData(page) {
	switch(page) {
	case "new":
		
		break;
	
	case "riskD":
		
		break;
	
	}	
	
}
$(document).ready(function(){
	//page load	
	
	//click on existing risk assessments nav link
	$("#search").click(function(){
		$("#riskD").hide();
		$("#searchD").show();
	});
	
	//click on risk assessment nav link
	$("#risk").click(function(){
		$("#searchD").hide();
		$("#riskD").show();
	});
	
	
	//click on toggle class element
	$(".toggle").click(function(event){
		$(this).next().toggle();
	});
	
	
});


</script>
</html>