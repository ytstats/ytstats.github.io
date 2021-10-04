


const interval = 1000


setInterval(() => {
    update();
}, interval);


async function update() {
try {
    
    fetch("https://api.nazcounts.ga/youtube/channel/" + ChannelID, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
        .then(response => response.json())
        .then(data => {
  // await $.getJSON('https://api.nazcounts.ga/youtube/channel/' + ChannelID, function (data) {

    function GetGoal(count) {
        if (count < 10) return 10;
        var x1 = Math.floor(Math.log10(count));
        var x2 = Math.ceil(count / 10 ** x1);
        var x3 = x2 * 10 ** x1;
        var goal = x3 - count;
        return goal
    }


    document.title = data.username + " | NazCounts";
    document.querySelector("#pageIcon").href = data.logo;


    document.getElementById("channelName" && "shareChannel").innerText = data.name
    // document.getElementById("shareChannel").innerText = data.name

    document.getElementById("subscribers").innerText = data.values.subs
    document.getElementById("views").innerText = data.values.views
    document.getElementById("videos").innerText = data.values.videos
    document.getElementById("goal").innerText = GetGoal(data.values.subs)




    document.getElementById("ytimage").src = data.logo;
    document.getElementById("ytbanner").src = data.banner;
    document.getElementById('visitlink').href = 'https://www.youtube.com/channel/' + ChannelID

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
} catch (error) {
    
}
  
    // })
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
