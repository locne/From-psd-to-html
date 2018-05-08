// Closing the responsive navbar after clicking on the link

let toggle = document.getElementById("toggle");
let navLinks = document.querySelectorAll('#page-nav a');

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(){ 
        toggle.checked = false;
    });
}
