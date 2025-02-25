const mobileMenuButton = document.getElementById("mobile-menu-button");
const navLinks = document.getElementById("nav-links");
console.log(mobileMenuButton);

mobileMenuButton.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
});
