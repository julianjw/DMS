function getUsername() {
	
	var username = "";
	
	var currentUrl = document.URL;
	
	var temp = currentUrl.split("rest/");
	
	return temp;
	
	//return username;
}