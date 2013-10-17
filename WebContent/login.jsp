<jsp:include page="partials/head.html" flush="true" />
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	<h2 class='instructions'>1) Login</h2>
	<form method="post" action="./rest/auth">
		<input type='text' name='user_id' id='user_id' placeholder='username' />
		<p class='error' id='usernameE' name='usernameE'></p>
		<br />
		<input type='password' name='password' id='password' placeholder='password' />
		<p class='error' id='passwordE' name='passwordE'></p>
		<br />
		<input type="submit" name='loginB' id='loginB' value='Login' />
	</form>
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script type='text/javascript'>
	$(document).ready(function() {
		//page load
		
		//BINDS
		$("#loginB").click(function(){
			$.cookie("loginAttempt", "1");
		});

		//check for bad login attempt
		if($.cookie("loginAttempt")) {
			$("#passwordE").html("Incorrect login details. Please try again...");
			$.removeCookie("loginAttempt");
		}

		
	});
</script>


</html>