function showSidebar() {
    document.getElementById("sidebar").style.display = "flex";
    document.getElementById("overlay").style.display = "block";
    document.body.classList.add("no-scroll");
}

function hideSidebar() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("overlay").style.display = "none";
    document.body.classList.remove("no-scroll");
}

fetch("section.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("subscribe").innerHTML = data;
    })
    .catch(err => console.error(err));

fetch("footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(err => console.error(err));
    
fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    })
    .catch(err => console.error(err));