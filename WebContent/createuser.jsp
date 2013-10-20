<jsp:include page="partials/head.html" flush="true" />

<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	<p id='successMsg' style="color:green;"></p>
	<label for='createName' id='createNameL' >Name: </label>
	<input type='text' id='createName' name='createName' /><br />
	
	<label for='createRole' id='createRoleL' >Role: </label>
	<select id='createRole' >

	</select><br />
	<label for='createUsername' id='createNameL' >Username: </label>
	<input type='text' id='createUsername' name='createUsername' /><br />
	
	<label for='createpassword' id='createPasswordL' >Password: </label>
	<input type='password' id='createPassword' name='createPassword' value="password" readonly /><br />
	<p><em>Default password is "password". Upon first login, the user will be prompted to change their password</em></p>
	

	<button id='submitB'>Create User</button>

<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script type='text/javascript'>
$(document).ready(function(){
	//page load
	
	if($.cookie("userCreated")) {
		$("#successMsg").html("User created!");
		$.removeCookie("userCreated");
	}
	
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
			success: function(jqXHR, textStatus) {
				//check for bad return
				$.cookie("userCreated", "1");
				document.location.reload(true);
			},
			error : function(jqXHR) {
				alert(jqXHR);
			}
		});
	});
});
</script>
</html></head>
<body>
</body>
