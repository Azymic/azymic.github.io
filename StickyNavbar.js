// When the user scrolls the page, execute myFunction
window.onscroll = function() {addStickyClass()};

let navbar = document.getElementById("mainNavbar");
// Get the offset position of the navbar
let sticky = navbar.offsetTop;
console.log(sticky);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addStickyClass() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
