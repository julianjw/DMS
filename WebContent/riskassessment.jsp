<jsp:include page="partials/head.html" flush="true" />
	
	<!-- navigation -->
<div class="horizontalNav">
<ul>
	<li id="search" class='pageNav'><a href='#search' class='navTopLeft navBottomLeft'>Existing Risk Assessments</a></li>
	<li id="risk" class="pageNav"><a href='#risk' class='navTopRight navBottomRight'>Risk Assessment</a></li>
</ul>
</div>
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	<div id='prevSeshMsgD'>
		<h3 id='prevSeshMsg'></h3>
		<br/>
		<button id='prevSeshYes' class='prevSeshConfirm'>YES</button>
		<button id='prevSeshNo' class='prevSeshConfirm'>NO</button>
	</div>
	<div id="searchD" class="hidden"><jsp:include page="riskassessment/search.html" flush="true" /></div>
	<div id="riskD" class="hidden"><jsp:include page="riskassessment/risk.html" flush="true" /></div>
<jsp:include page="partials/footer.html" flush="true" />


<!-- Page specific scripts -->
<script type='text/javascript'>

if($.cookie('user_role')!="client") {
	
}else {
	window.location.replace("http://" + window.location.hostname + ":8080/EndeavourDMS/restricted.jsp");
}

function pullData(page) {
	switch(page) {
	case "new":
		$("#serviceT").val("");
		$("#areaT").val("");
		$("#dateT").val("");
		$("#locationDescT").val("");
		$("#probabilityT").val("");
		$("#exposureT").val("");
		$("#consequenceT").val("");
		$("#riskControlsT").val("");
		$("#serviceManagerT").val("");
		$("#serviceManagerDateT").val("");
		$("#delegatedManagerT").val("");
		$("#delegatedManagerDateT").val("");
		$("#targetDateT").val("");
		$("#authYes").prop("checked", false);
		$("#authNo").prop("checked", true);
		break;
	
	case "riskD":
		$.ajax({
			url: "./rest/risk/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + $.cookie('risk_id'),
			type:"get",
			contentType: "application/json",
			success: function(d) {		
				$("#serviceT").val(d.service);
				$("#areaT").val(d.area);
				$("#dateT").val(d.risk_assess_date);
				$("#locationDescT").val(d.risk_description);
				$("#probabilityT").val(d.probability);
				$("#exposureT").val(d.exposure);
				$("#consequenceT").val(d.consequences);
				$("#riskControlsT").val(d.risk_controls);
				$("#serviceManagerT").val(d.service_manager);
				$("#serviceManagerDateT").val(d.sm_sign_date);
				$("#delegatedManagerT").val(d.delegated_manager);
				$("#delegatedManagerDateT").val(d.dm_sign_date);
				$("#targetDateT").val(d.target_date);
				if(d.proceed=="true") {
					$("#authYes").prop("checked", true);
				}else {
					$("#authNo").prop("checked", true);
				}
			},
			error: function(xhr) {
				// do something to handle error
			
			}
		});
		break;
	}	
	
}
$(document).ready(function(){
	//page load	
	//check if there is a client id
	if($.cookie('client_id')) {
		//pull the name
		$.ajax({
			url: "./rest/user/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + $.cookie('client_id'),
			type:"get",
			contentType: "application/json",
			success: function(d) {		
				$("#prevSeshMsg").html("");
				$("#prevSeshMsg").html("Continue working with " + d.rName + "?");
			},
			error: function(xhr) {
				// do something to handle error
				
			}
		});	
	}else{
		$("#prevSeshMsgD").hide();
		$("#searchD").show();
		$("#clientSearchD").show();
	}
	
	
	
	
	
	//BINDS
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
	
	//prev sesh confirmation buttons
	//yes
	$("#prevSeshYes").click(function(){
		$("#prevSeshMsgD").hide();
		$("#clientSearchD").hide();
		$("#searchD").show();
		selectClient();
		$("#riskSearchD").show();
	});
	//no
	$("#prevSeshNo").click(function(){
		$.removeCookie('client_id');
		$("#prevSeshMsgD").hide();
		$("#riskSearchD").hide();
		$("#searchD").show();
		$("#clientSearchD").show();
	});
	
	
	//click on toggle class element
	$(".toggle").click(function(event){
		$(this).next().toggle();
	});
	
	
});


</script>
</html>