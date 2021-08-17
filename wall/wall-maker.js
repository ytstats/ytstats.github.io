
//🟢 🟡 🔴

document.getElementById("create-btn").onclick = function () {

    let wallID = document.getElementById('create-input').value
    console.log(wallID)

    fetch('https://api.nazcounts.cf/wall/create/' + document.getElementById('create-input').value)
        .then(response => response.text())
        .then(data => {
            if (data.includes("🟡" || "🔴")) {
                
                return alert(data)
            } else {
                location.href = "../#!/" + document.getElementById('create-input').value + " "
            }
        })
}

document.getElementById("search-btn").onclick = function () {

    let wallID = document.getElementById('search-input').value
    console.log(wallID)
    
    fetch('https://api.nazcounts.cf/wall/search/' + wallID)
        .then(response => response.text())
        .then(data => {
            if (data.includes("🟡" || "🔴")) {
                return alert(data)
            } else {
                // location.href = "../wall/#!/" + wallID
                console.log(wallID + "    NEW")
            }
        })
}
