
        var a = []

        function checkfunct(cid) {
            a = []
            result.innerHTML = "";
            u = 0
            if (cid.startsWith("UC") == true) {
                location.href = `http://127.0.0.1:5500/#?/cid}`;
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
                            <div class="card-result" onclick='location.href = "http://127.0.0.1:5500/#!/${a[u].universeId}";'>
                            <img title="${a[u].universeId}" src="${a[u].imageUrl}" height="125" width="125" id="userimg">
                            <br>
                            <button class="form-btn">
                                <span id="username" style="margin: 10px;" title="${a[u].universeId}">${a[u].name}</span>
                            </button>`
                        u++
                        sd()

                    }
                }
            })
        }