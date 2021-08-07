


const interval = 1000


setInterval(() => {
    update();
}, interval);


function update() {

    
    $.getJSON('https://beta.mixerno.space/api/youtube-subscriber-counter/channel/' + ChannelID, function (data) {

    

        document.title = data.userList[0].user.name + " | NazCounts";
        document.querySelector("#pageIcon").href = data.userList[0].user.avatar.default.url;
        

        document.getElementById("channelName").innerText = data.userList[0].user.name
        document.getElementById("shareChannel").innerText = data.userList[0].user.name

        document.getElementById("subscribers").innerText = data.userList[0].stats.subscriberCount || data.userList[0].stats.subscriberCountAPI
        document.getElementById("views").innerText = data.userList[0].stats.viewCount
        document.getElementById("videos").innerText = data.userList[0].stats.videoCount
        document.getElementById("goal").innerText = data.userList[0].stats.goalCount



        document.getElementById("ytimage").src = data.userList[0].user.avatar.default.url;
        document.getElementById("ytbanner").src = data.userList[0].user.banner;
        document.getElementById('visitlink').href = 'https://www.youtube.com/channel/'+data.userList[0].user.id

        document.getElementById("sharelink").value = "https://NazCounts.github.io/#!/" + data.userList[0].user.id


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
    console.log("aaaaaa")
    var copyText = document.getElementById("sharelink");

    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
  
    document.execCommand("copy");
};
