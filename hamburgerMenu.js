// Toggle the menu visibility
function toggleMenu() {
  const menuElement = document.querySelector(".menu");
  menuElement.classList.toggle("is-visible");
}

// Add a listener to the button to toggle menu visibility on click
const menuToggleElement = document.querySelector(".menu-toggle");
menuToggleElement.addEventListener("click", toggleMenu);
