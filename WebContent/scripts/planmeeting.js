window.onload = loadContent;

function loadContent() {
	//Array of titles for the plan meeting page
	var tabs =new Array("New Meeting","Saved Meetings");
	
	//Create the title of the content page
	var title = "<h2>Plan Meeting</h2>";
	
	//Create the nav bar using a array of the titles
	var nav = "<div class=horizontal><ul>";
	
	for (var i=0; i<tabs.length;i++) {
		var ref = tabs[i];
		ref = ref.toLowerCase().replace(/ /g, '-');
		//ref = ref.replace(/&/g, '-'); //get rid of the & in Education & Employment
		nav += "<li><a href=#" + ref + ">" + tabs[i] + "</a></li>";
	}
	
	nav += "</ul></div>";
	
	//Create the html to put into the content div
	var content = "<p>Test</p>";
	
	
	//Insert page content
	document.getElementById("con-body-main-title").innerHTML = title;
	document.getElementById("con-body-main-nav").innerHTML = nav;
	document.getElementById("con-body-main-content").innerHTML = content;
}