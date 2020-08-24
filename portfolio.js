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