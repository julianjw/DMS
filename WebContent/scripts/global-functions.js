function getUsername() {
	
	var username = "";
	
	var currentUrl = document.URL;
	
	var temp = currentUrl.split("rest/");
	
	return temp;
	
	//return username;
}


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
		$.get(window.location.hostname + "/rest/role", { token: $.cookie('auth_token'), user_id: $.cookie('user_id') },
		function(data) {
			if($.cookie('role')) {
				$.removeCookie('role');
			}
			$.cookie('role', data.role)
		}, "json");
	}else {
		window.location.replace("http://" + window.location.hostname + ":8080/EndeavourDMS/login.jsp");
	}
}



function Duplicate(divName) {
	$("#"+divName).append($("#" + divName + "Template").children().clone());
};
	


function PreviewImage() {
    var oFReader = new FileReader();
    
    oFReader.onload = function (e) {
        $('#ppPreview').attr('src', e.target.result);
    };
    oFReader.readAsDataURL($("#profilepic").files[0]);
};

$(document).ready(function(){
	

	//click on the previous button
	$("#PageNavPrev").click(function(){
		PageNavigation('prev');
	});

	//click on the next button
	$("#PageNavNext").click(function(){
		PageNavigation('next');
	});

	//click on toggle class element
	$(".toggle").click(function(event){
		$(this).next().toggle();
	});
});
