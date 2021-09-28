
var thislocation = window.location.href +"/"

window.onload = function () {

 setInterval(() => {
	loadURL();
 }, 500);
    
}

 function loadURL() {

	var q = location.hash.split("!/")[1];
    
	if (q) {
		
        ChannelID = location.hash.split("!/")[1]
	} else {
		// var coolGuys = ['UC3CeKXNtheO1jvomemi07FA'];
		// ChannelID = coolGuys[Math.floor(Math.random() * coolGuys.length)]
		ChannelID = "UC3CeKXNtheO1jvomemi07FA"
	}

	
        history.pushState(null, null, "#!/" + ChannelID);
		return thislocation + "#!/" + ChannelID;
}
