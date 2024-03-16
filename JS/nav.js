function myFunction() {
    let x = document.getElementById("nav-bar");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}