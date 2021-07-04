
var apikeys = "AIzaSyCwP6lcQH4K_yG3cNK0OI_ziqDqc0ucJIQ"
const interval = 1500


setInterval(() => {
    update();
}, interval);


function update() {


    $.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=' + ChannelID + `&key=${apikeys} `, function (data) {

        document.title = data.items[0].snippet.title + " | YtStats";

        document.getElementById("channelName").innerText = data.items[0].snippet.title


        document.getElementById("odometer").innerText = data.items[0].statistics.subscriberCount
        document.getElementById("views").innerText = data.items[0].statistics.viewCount
        document.getElementById("videos").innerText = data.items[0].statistics.videoCount
        document.getElementById("goal").innerText = (Math.floor(GetGoal(data.items[0].statistics.subscriberCount)))
        document.getElementById("ytimage").src = data.items[0].snippet.thumbnails.default.url;
        document.getElementById("pageIcon").src = data.items[0].snippet.thumbnails.default.url;


        function GetGoal(count) {
            if (count < 10) return 10; var x1 = Math.floor(Math.log10(count)); var x2 = Math.ceil(count / 10 ** x1); var x3 = x2 * 10 ** x1; var goal = x3 - count; return goal
          }

        if(data.items[0].snippet.country){
            var cc = "flag-icon flag-icon-" + data.items[0].snippet.country.toLowerCase();
            $("#channelCountry").addClass(cc)
        } else {
            return
        }
    })
}

