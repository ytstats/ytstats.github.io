
var Thislocation = window.location.href +"/"

window.onload = function () {

 setInterval(() => {
	loadURL();
 }, 1000);
    
}

 function loadURL() {

	var q = location.hash.split("!/")[1];
    
	if (q) {
		
        ChannelID = location.hash.split("!/")[1]
	} else {
		var coolGuys = [ 'UCFclAVMvm32SoYQmOr6gxpA', 'UCYozYDE_yUduCTV_J-6_DpA', 'UCTDivGmXSiFlsgQSShfFHmg','UC3CeKXNtheO1jvomemi07FA'];
		ChannelID = coolGuys[Math.floor(Math.random() * coolGuys.length)]
	}

	
        history.pushState(null, null, "#!/" + ChannelID);
		return Thislocation + "#!/" + ChannelID;
}
