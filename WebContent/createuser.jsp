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
	<!-- CREATE A DROPDOWN BOX -->
	<label for='createRole' id='createRoleL' >Role: </label>
	<select id='createRole' >

	</select><br />
	<label for='createUsername' id='createNameL' >Username: </label>
	<input type='text' id='createUsername' name='createUsername' /><br />
	<label for='createpassword' id='createPasswordL' >Password: </label>
	<input type='password' id='createPassword' name='createPassword' /><br />
	

	<button id='submitB'>Create User</button>



	<script type='text/javascript'>
		$(document).ready(function(){
			//find the roles
			$.ajax({
				url: "./rest/role/all",
				type: "get",
				data: {auth_token:$.cookie("auth_token"), user_id:$.cookie("user_id")},
				success: function(data) {
					for (var i = 0; i < data.items.length; i++) {
                		optionlist += "<select value='" + data.items[i] + "'>" + data.items[i] + "</option>";
                	}
					//document.write(optionlist);
				},
				error: function(response) {
					//do something to handle error
				}

			});


			//click on the submit button
			$("#submitB").click(function(){
				var details = new Object();
				details.user_id = $("#createUsername").val();
				details.password = $("#createPassword").val();
				details.fname=$("#createName").val();
				//details.role = $("#createRole").val();
				details.role = "CLIENT"; //testing purposes only

				var jsonText = JSON.stringify(details);
				
				$.ajax({
					url:'./rest/user/' + $.cookie('user_id') + '/' + $.cookie('auth_token'),
					type: 'POST',
					contentType: 'application/json; charset=UTF-8',
					dataType: 'json',
					data: jsonText,
					complete: function(jqXHR, textStatus) {
						alert(textStatus);
						alert(jqXHR.responseText);
					}
				});
			});
		});
	</script>
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
</html></head>
<body>
</body>
