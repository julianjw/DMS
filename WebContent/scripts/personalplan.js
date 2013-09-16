window.onload = loadContent;

function loadContent() {
	//Array of titles for the personal plan page
	var tabs =new Array("Client Details","Communication","Education & Employment", 
						"Health Details", "Planning", "Support Required");
	
	//Create the title of the content page
	var title = "<h2>Personal Plan</h2>";
	
	//Create the nav bar using a array of the titles
	var nav = "<div class=horizontal><ul>";
	
	for (var i=0; i<tabs.length;i++) {
		var ref = tabs[i];
		ref = ref.toLowerCase().replace(/ /g, '-');
		ref = ref.replace(/&/g, '-'); //get rid of the & in Education & Employment
		nav += "<li><a href=#" + ref + ">" + tabs[i] + "</a></li>";
	}
	
	nav += "</ul></div>";
	
	//Create the html to put into the content div
	//var content = "<jsp:include page=client.html flush=true />";
	
	
	//Insert page content
	document.getElementById("con-body-main-title").innerHTML = title;
	document.getElementById("con-body-main-nav").innerHTML = nav;
	//document.getElementById("con-body-main-content").innerHTML = content;
}