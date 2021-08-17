
var thislocation = window.location.href +"/"

window.onload = function () {

 setTimeout(() => {
	loadURL();
    console.log("Wall Name  : "+ChannelID)
    fn60sec();
 }, 500);
 setInterval(() => {
	loadURL();
    fn60sec();
 }, 10000);
    
}
let ChannelID
 function loadURL() {

	var q = location.hash.split("!/")[1];
    
	if (q) {
		
        ChannelID = location.hash.split("!/")[1]
	} else {

		ChannelID = "UC3CeKXNtheO1jvomemi07FA"
	}

	
        history.pushState(null, null, "#!/" + ChannelID);
		return thislocation + "#!/" + ChannelID;
}




var channelcount = 18;
var chanName = "NazCounts.cf";
var bgColor = "rgba(255, 255, 255,)";
var imgUrl = "https://yt3.ggpht.com/-UojVTXXFUmQ/AAAAAAAAAAI/AAAAAAAAAAA/r2bMFQbWHv4/s360-c-k-no-mo-rj-c0xffffff/photo.jpg";
$('body').css("background",bgColor);
$('body').css("background", bgColor);
let iterationcard = 1;
while (iterationcard <= channelcount) {
        var htmlcard = '<div class="channel_' + iterationcard + ' card"><img src="' + imgUrl + '" class="channelImage"><div class="card-content"><div class="channelName">' + chanName + '</div><div class="odometer subscriberCount">0</div></div></div>';  
    $('body').append(htmlcard);
    iterationcard++;
};
async function fn60sec() {
let googleApiCallURL = "";
let channelList = [];
let channelName = [];
let channelImage = [];
let subscriberCount = [];
    // $.getJSON("https://api.nazcounts.cf/wall/search/"+ChannelID+"", function (channels) {
    await $.getJSON("https://api.nazcounts.cf/wall/search/"+ChannelID+"", function (channels) {

    channelList = channels.reverse();
    googleApiCallURL = 'https://api.mgcounts.com/youtube/bulk/'+channelList+'';
    $.getJSON(googleApiCallURL, function (result) {
        console.log(result);
        ytJSON = result;
        let iteration = 0;
        while (iteration < result.items.length) {
            let channelNumber = channelList.indexOf(result.items[iteration].id) + 1;
            channelName[iteration] = result.items[iteration].snippet.title;
            subscriberCount[iteration] = result.items[iteration].statistics.subscriberCount;
            channelImage[iteration] = result.items[iteration].snippet.thumbnails.medium.url;
            $(".channel_" + channelNumber + " .channelName").html(channelName[iteration]);
            $('.channel_' + channelNumber + ' .subscriberCount').html(subscriberCount[iteration]);
            $('.channel_' + channelNumber + ' .channelImage').attr('src', channelImage[iteration]);
            iteration++;
        };
    });
});
}