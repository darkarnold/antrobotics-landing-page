//Open Navigation Popup
const openNav = document.querySelector(".navbar__button");
const navPopup = document.querySelector(".navbar__popup");

openNav.addEventListener("click", (event) => {
  navPopup.classList.toggle("navbar_open");
  event.target.classList.toggle("navbar__button_active");
});

// const navContainer = document.querySelector(".navbar__popup-container");
// const navLink = document.querySelectorAll(".navbar__popup-link");
// window.addEventListener("scroll", function () {
//   const header = document.querySelector(".header");
//   if (window.scrollY > header.offsetHeight - 20) {
//     navContainer.classList.remove("navbar_dark");
//     navContainer.classList.add("navbar_light");
//     // CHANGE COLOR FOR EACH LINK
//     navLink.forEach(function (link) {
//       link.classList.add("navbar__popup-link-light");
//     });
//   } else {
//     navContainer.classList.remove("navbar_light");
//     navContainer.classList.add("navbar_dark");
//     navLink.forEach(function (link) {
//       link.classList.remove("navbar__popup-link-light");
//     });
//   }
// });
