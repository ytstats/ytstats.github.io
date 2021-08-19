

setInterval(() => {
    update();

}, 1000);


function update() {

    
    $.getJSON('https://api.mgcounts.com/youtube/bulk/'+ ChannelID, function (result) {

        document.getElementById("channelName").innerText = result.items[0].snippet.title;
        
        document.getElementById("channelImage").src = result.items[0].snippet.thumbnails.medium.url; 
        document.getElementById("subscriberCount").innerText = result.items[0].statistics.subscriberCount;

    })
}


