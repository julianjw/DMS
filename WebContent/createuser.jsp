<jsp:include page="partials/head.html" flush="true" />
	<!--title -->
	Create User
<jsp:include page="partials/nav.html" flush="true" />
	<!-- navigation -->
<!-- 	<h3>Personal Plan Nav</h3> -->

<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
		<label for='createName' id='createNameL' >Name: </label>
	<input type='text' id='createName' name='createName' /><br />
	
	<label for='createRole' id='createRoleL' >Role: </label>
	<select id='createRole' >

	</select><br />
	<label for='createUsername' id='createNameL' >Username: </label>
	<input type='text' id='createUsername' name='createUsername' /><br />
	
	<label for='createpassword' id='createPasswordL' >Password: </label>
	<input type='password' id='createPassword' name='createPassword' /><br />
	

	<button id='submitB'>Create User</button>

<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script type='text/javascript'>
$(document).ready(function(){
	//page load
	//get all roles
	$.ajax({
		url: "./rest/role/all/",
		type: "get",
		contentType: "application/json",
		data: {auth_token: $.cookie("auth_token"), user_id: $.cookie("user_id")},
		success: function(data) {
			for (var i = 0; i < data.authRole.length; i++) {
				if(data.authRole[i].role=="") {
					$("#createRole").append("<option value='" + data.authRole[i].role + "' >'null'</option>");
				}else {
					$("#createRole").append("<option value='" + data.authRole[i].role + "' >"+ data.authRole[i].role + "</option>");
				}
			}
		},
		error: function(data) {
			//do something to handle error
			alert("error getting roles");
		}
	});
	
	
	
	//click on the submit button
	$("#submitB").click(function(){
		var details = new Object();
		details.user_id = $("#createUsername").val();
		details.password = $("#createPassword").val();
		details.rName=$("#createName").val();
		details.role = $("#createRole").val();

		var jsonText = JSON.stringify(details);
		
		$.ajax({
			url:'./rest/user/' + $.cookie('user_id') + "/" + $.cookie('auth_token'),
			type: 'POST',
			contentType: 'application/json; charset=UTF-8',
			dataType: 'json',
			data: jsonText,
			complete: function(jqXHR, textStatus) {
				alert("User Created");
				document.location.reload(true);
			}
		});
	});
});
</script>
</html></head>
<body>
</body>
