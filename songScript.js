const songs = ["See You Again.mp3", "One Dance.mp3", "Fireproof.mp3", "CASTLE OF GLASS.mp3", "Chains.mp3", "Coldplay - Hymn For The Weekend", "Demonise.mp3", "Me, Myself & I.mp3"];

const createSongList = () => {
    const list = document.createElement("ol");

    for (let i = 0; i < songs.length; i++) {
        const item = document.createElement("li")
        item.appendChild(document.createTextNode(songs[i]))
        list.appendChild(item)
    }
    return list
}
document.getElementById("songList").appendChild(createSongList())

songList.onclick = (e) => {
    const clickedItem = e.target
    const source = document.getElementById("source")
    source.src = "Sounds/" + clickedItem.innerText
        // console.log(clickedItem.innerText);
    document.getElementById("CurrentlyPlaying").innerText = "Currently Playing: "
    document.getElementById("CurrentSong").innerText = clickedItem.innerText
    player.load()
    player.play()
}
const playAudio = () => {
    if (player.readyState) {
        player.play()
    }
}
const pauseAudio = () => {

    player.pause()

}

function Dark() {
    var element = document.body;
    element.classList.toggle("darkmode");
    var btn = document.getElementById("darkbtn1");
    if (btn.innerText == "Dark Mode") {
        btn.innerText = "Light Mode";
    } else {
        btn.innerText = "Dark Mode";
    }
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}