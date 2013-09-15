<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css" href="./css/style.css">
<script src="./scripts/global-functions.js"></script>
<title>Client Layout</title>

<script>
	window.onload = loadUsername;

	function loadUsername() {
		var user = getUsername();
	
		document.getElementById("con-head-worder").innerHTML = user;
	}
</script>
</head>
<body>
	<jsp:include page="layout.html" flush="true" />
            
</body>
</html>