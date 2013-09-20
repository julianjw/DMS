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
//		$.get(window.location.hostname + "../rest/role", { token: $.cookie('auth_token'), user_id: $.cookie('user_id') },
//		function(data) {
//			if($.cookie('role')) {
//				$.removeCookie('role');
//			}
//			$.cookie('role', data.role);
//			alert($.cookie('role'));
//		}, "json");
		
		$.ajax({
			url: "./rest/role/",
			type:"get",
			contentType: "application/json",
			data:{auth_token:$.cookie('auth_token'),user_id:$.cookie('user_id')},
			success: function(response) {
				// do something
//			    for (res in response) {
//			    	alert(response[0]);
//			    }
			    
			    //alert(response.responseText);
				alert(response.role);
			    //Query the jQuery object for the values
			  
			},
			error: function(xhr) {
				// do something to handle error
				alert("no");
			}
		});
//		
//		$.get(window.location.hostname + "../rest/role?auth_token=" + $.cookie('auth_token') + "&" + "user_id=" + $.cookie('user_id') ,
//				function(data, status) {
//				alert("data: " + data + "\nStatus: " + status);
//		});
		
//		$.ajax({
//			url:'./rest/role' + $.cookie('auth_token')+ '/' + $.cookie('user_id'),
//			sucess: function(jqXHR, textStatus) {
//				alert(textStatus);
//			}
//		});
		
		//$.get("./rest/role", )
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
