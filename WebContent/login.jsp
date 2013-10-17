<jsp:include page="partials/head.html" flush="true" />
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
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

		//badlogin will be the flag
		if($.getUrlVars()) {
			$('#passwordE').val()=='Incorrect login details. Please try again.';
			$('#passwordE').show();
		}

		
	});
</script>


</html>