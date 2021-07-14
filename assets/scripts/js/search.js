
        var a = []

        function checkfunct(cid) {
            a = []
            result.innerHTML = "";
            u = 0
            if (cid.startsWith("UC") == true) {
                location.href = `https://ytstats.github.io/#?/cid}`;
            } else {
                p1.innerHTML = `
                <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <h6 style="color: black;">Loading Channels...</h6>`;
            }
            fetch('https://api.amixcounts.ga/api/yt/search/channel/' + cid).then(res => res.json()).then(data1 => {
                console.log(data1)
                result.innerHTML = "";
                p1.innerHTML = "";
                sd()
                async function sd() {
                    if (u < data1.items.length) {
                        a.push({
                            name: data1.items[u].snippet.title,
                            imageUrl: data1.items[u].snippet.thumbnails.medium.url,
                            universeId: data1.items[u].id.channelId
                        })
                        result.innerHTML = result.innerHTML + `
                            <div class="card-result" onclick='location.href = "https://ytstats.github.io/#!/${a[u].universeId}";'>

                            <div class="cards-content">

                            <div class="cards">
                            <img title="${a[u].universeId}" src="${a[u].imageUrl}" class="channelImage" height="125" width="125" id="userimg">
                            <br>
                            <br>
                            <span id="username" style="margin: 10px;" class="channelName" title="${a[u].universeId}">${a[u].name}</span>
                            
                            </div>

                            </div>`

                        u++
                        sd()

                    }
                }
            })
        }