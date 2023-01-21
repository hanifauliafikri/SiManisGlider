const NavbarNav = document.querySelector(".Navbar-Nav");

document.querySelector("#hamburger-menu").onclick = () => {
  NavbarNav.classList.toggle("active");
};

// klik diluar sidebar//

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !NavbarNav.contains(e.target)) {
    NavbarNav.classList.remove("active");
  }
});
