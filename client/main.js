function myFunction() {
    var navbar = document.getElementById("myNav");
    if (navbar.className === "nav") {
      navbar.className += " responsive";
    } else {
      navbar.className = "nav";
    }
  }