<jsp:include page="partials/head.html" flush="true" />
	<!-- navigation -->
<!-- 	<h3>Personal Plan Nav</h3> -->
	<a href='newreport.html'>New Report</a>
	<a href='savedreports.html'>Saved Reports</a>
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	
	<jsp:include page="reports/searchreports.html" flush="true" />
	
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script type='text/javascript'>
if($.cookie('user_role')=="r&do" || $.cookie('user_role')=="som" || $.cookie('user_role')=="sdim") {
	
}else {
	window.location.replace("http://" + window.location.hostname + ":8080/EndeavourDMS/restricted.jsp");
}
</script>
</html></head>
<body>
</body>
</html>