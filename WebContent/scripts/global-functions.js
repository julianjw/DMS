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
			},
			error: function(xhr) {
				// do something to handle error
				alert("error getting role");
			}
		});
	}else {
		window.location.replace("http://" + window.location.hostname + ":8080/EndeavourDMS/login.jsp");
	}
}



function Duplicate(divName) {
	$("#"+divName).append($("#" + divName + "Template").children().clone());
};
