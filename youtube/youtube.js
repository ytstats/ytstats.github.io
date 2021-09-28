


const interval = 1000


setInterval(() => {
    update();
}, interval);


async function update() {
    
    
    await $.getJSON('https://api.nextcounts.com/api/youtube/channel/' + ChannelID, function (data) {

            
    

        document.title = data.username + " | NazCounts";
        document.querySelector("#pageIcon").href = data.userImg;
        

        document.getElementById("channelName").innerText = data.username
        document.getElementById("shareChannel").innerText = data.username

        document.getElementById("subscribers").innerText = data.subcount
        document.getElementById("views").innerText = data.viewcount
        document.getElementById("videos").innerText = data.videos
        document.getElementById("goal").innerText = 69



        document.getElementById("ytimage").src = data.userImg;
        document.getElementById("ytbanner").src = data.userBanner;
        document.getElementById('visitlink').href = 'https://www.youtube.com/channel/'+ChannelID

        document.getElementById("sharelink").value = "https://NazCounts.ga/#!/" + ChannelID
        document.getElementById("embedlink").value = "https://NazCounts.ga/youtube/embed/#!/" + ChannelID



        // document.getElementById("pageIcon").src = data.items[0].brandingSettings.channel.image.bannerExternalUrl;


        // if(data.items[0].snippet.country){
        //     var cc = "flag-icon flag-icon-" + data.items[0].snippet.country.toLowerCase();
        //     $("#channelCountry").addClass(cc)
        // } else {
        //     return
        // }
    })
}

function copysharelink() {

    
        var copyText = document.getElementById("sharelink");
    
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
    


};


function copyembedlink() {
    
        var copyText = document.getElementById("embedlink");
    
        copyText.select();
        copyText.setSelectionRange(0, 99999); 
        document.execCommand("copy");
};
