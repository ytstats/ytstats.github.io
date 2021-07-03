ChannelID = "UCFclAVMvm32SoYQmOr6gxpA"
var apikeys = "AIzaSyCwP6lcQH4K_yG3cNK0OI_ziqDqc0ucJIQ"

setInterval(() => {
    update();
}, 5000);

document.onload(update(ChannelID))


function update() {
    $.getJSON('https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id='+ChannelID+ `&key=${apikeys} `, function(data) {
        console.log(data)

        document.getElementById("username").innerText = data.items[0].snippet.title
        document.getElementById("odometer").innerText = data.items[0].statistics.subscriberCount
        document.getElementById("views").innerText = data.items[0].statistics.viewCount
        document.getElementById("videos").innerText = data.items[0].statistics.videoCount
        document.getElementById("pageIcon").innerText = data.items[0].snippet.thumbnails.default.medium




    })   
}

