<jsp:include page="partials/head.html" flush="true" />
	<!-- navigation -->
<jsp:include page="partials/body.html" flush="true" />
	<!-- page content -->
	
	<div id='changePasswordAdmin' style="display:hidden;"></div>
	<p id="successMsgAdmin" style="color:green;"></p>
	
	<br />
	
	
	<div id='changePassword'>
		<h3>Reset your password</h3>
		<p id="successMsg" style="color:green;"></p>
		<input type='password' name='passwordOld' id='passwordOld' placeholder='old password' />
		<br />
		<br />
		<input type='password' name='password' id='password' placeholder='new password' />
		<br />
		<input type='password' name='password2' id='password2' placeholder='confirm password' />
		<p class='error' id='passwordE' name='passwordE'></p>
		<br />
		<input type="submit" name='resetB' id='resetB' value='Reset' />
	</div>
	
	
	
<jsp:include page="partials/footer.html" flush="true" />
<!-- Page specific scripts -->
<script>

function Reset(el) {
	$.ajax({
		url: "./rest/password/resetpassword/" + $.cookie('user_id') + "/" + $.cookie('auth_token') + "/" + el.id,
		type:"POST",
		contentType: "application/json",
		success: function(d) {
			$("#successMsgAdmin").html("");
			$("#successMsgAdmin").html(el.id + "'s password has been reset to 'password'");
		},
		error: function(xhr) {
			// do something to handle error
			alert("error hitting server");
		}
	});
}




$(document).ready(function(){
	if($.cookie("user_role")=="sdim" || $.cookie("user_role")=="som" || $.cookie("user_role")=="r&do") {
		//get all clients and populate a page with table
		$.ajax({
			url: "./rest/user/getallclients/" + $.cookie('user_id') + "/" + $.cookie('auth_token'),
			type:"get",
			contentType: "application/json",
			success: function(d) {
				$("#changePasswordAdmin").html("");
				var content = "<table>";
				content += "<tr><th></th><th>ID</th><th>Name</th></tr>";
				
				for (var i = 0; i < d.dmsClientUser.length; i++) {
					content += "<tr><td class='fakeLink' id='" + d.dmsClientUser[i].user_id + "'onClick='Reset(this);'>reset</td>";
					content += "<td>" + d.dmsClientUser[i].user_id + "</td>";	
					content += "<td>" + d.dmsClientUser[i].rName + "</td></tr>";	
				}
				content += "</table>";
				$("#changePasswordAdmin").append(content);
			},
			error: function(xhr) {
				// do something to handle error
				
			}
		});
		
		//show the div on page
		$("#changePasswordAdmin").show();
	}
	
	if($.cookie("pwChangeSuccess")) {
		//insert the message
		$("#successMsg").html("");
		$("#successMsg").html("Password changed!");
		$.removeCookie("pwChangeSuccess");
	}
	
	
	//click on reset password button
	$("#resetB").click(function(){
		if($("#password").val()=="" || $("#password2").val()=="" || $("#passwordOld").val()=="") {
			$("#passwordE").html("");
			$("#passwordE").html("all fields must be entered");
		}else if($("#password").val()!=$("#password2").val()) {
			$("#passwordE").html("");
			$("#passwordE").html("password must match");
		}else {
			
			var creds = new Object();
			creds.oldPassword = $("#passwordOld").val();
			creds.newPassword = $("#password").val();
			
			var jsonText = JSON.stringify(creds);
			
			$.ajax({
				url: "./rest/password/changepassword/" + $.cookie('user_id') + "/" + $.cookie('auth_token'),
				type: 'POST',
				contentType: 'application/json; charset=UTF-8',
				dataType: 'json',
				data: jsonText,
				success: function(data, textStatus, jqXHR) {
					if(data.verified=="failure") {
						$("#passwordE").html("");
						$("#passwordE").html("password change failed. Please check your current password and try again.");
					}else {
						$.cookie("pwChangeSuccess", "1");
						window.location.reload(true);
					}				
				},
				error: function(jqXHR, textStatus) {
					
				}
			});
		}
	});
});
</script>


</html>

