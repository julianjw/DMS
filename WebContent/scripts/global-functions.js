$.extend({
	getUrlVars: function(){
	var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
    	hash = hashes[i].split('=');
    	vars.push(hash[0]);
    	vars[hash[0]] = hash[1];
    }
    return vars;
},
	getUrlVar: function(name){
		return $.getUrlVars()[name];
	}
});






function checkRole() {
	//check for a cookie...if there isn't re-direct to login.jsp
	if($.cookie('user_id') && $.cookie('auth_token')) {
		//find out the user's role and store		
		$.ajax({
			url: "./rest/role/",
			type:"get",
			contentType: "application/json",
			data:{auth_token:$.cookie('auth_token'),user_id:$.cookie('user_id')},
			success: function(d) {  
				$.cookie('user_role', d.role);
				//add elements to page based off role
    			//client
    			if($.cookie("user_role")=="client") {
    				$("#main-nav").html("");
    				$("#main-nav").append("<br/>");
    				$("#main-nav").append("<li><a href='personalplan.jsp#goals'>Goals</a></li>");
    			//support worker
    			}else if($.cookie("user_role")=="sw") {
    				$("#main-nav").html("");
    				$("#main-nav").append("<br/>");
    				$("#main-nav").append("<li><a href='personalplan.jsp'>Personal Plan</a></li>");
    				$("#main-nav").append("<li><a href='riskassessment.jsp'>Risk Assessment</a></li>");
    			//others
    			}else if($.cookie("user_role")=="sdim" || $.cookie("user_role")=="som" || $.cookie("user_role")=="r&do") {
    				$("#main-nav").html("");
    				$("#main-nav").append("<br/>");
    				$("#main-nav").append("<li><a href='personalplan.jsp'>Personal Plan</a></li>");
    				$("#main-nav").append("<li><a href='riskassessment.jsp'>Risk Assessment</a></li>");
    				$("#main-nav").append("<li><a href='planmeeting.jsp'>Plan Meetings</a></li>");
    				$("#main-nav").append("<li><a href='createuser.jsp'>Create User</a></li>");
    				$("#main-nav").append("<li><a href='reports.jsp'>Reports</a></li>");
    				$("#main-nav").append("<li><a href='resetpassword.jsp'>Reset Passwords</a></li>");
    			}
			},
			error: function(xhr) {
				// do something to handle error
				
			}
		});
	}else {
		window.location.replace("http://" + window.location.hostname + ":8080/EndeavourDMS/login.jsp");
	}
}



function Duplicate(divName) {
	$("#"+divName).append($("#" + divName + "Template").children().clone());
};
