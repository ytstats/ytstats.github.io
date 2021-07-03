
var thislocation = window.location.href +"/"

window.onload = function () {

    loadURL();
    
}

function loadURL() {

	var q = location.hash.split("!/")[1];
    
	if (q) {
		console.log(location.hash.split("!/")[1]);
        ChannelID = location.hash.split("!/")[1]
	} else {
		var coolGuys = [ 'UCFclAVMvm32SoYQmOr6gxpA', 'UCYozYDE_yUduCTV_J-6_DpA', 'UCBJycsmduvYEL83R_U4JriQ','UC3CeKXNtheO1jvomemi07FA'];
		ChannelID = coolGuys[Math.floor(Math.random() * coolGuys.length)]
	}

	
        history.pushState(null, null, "#!/" + ChannelID);
		return thislocation + "#!/" + ChannelID;
}
