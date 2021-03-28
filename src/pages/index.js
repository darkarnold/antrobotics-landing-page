import Section from "../script/components/Section.js";
const contactModal = document.querySelector(".modal");
const formButton = document.querySelector(".contact-form__open");
const closeButton = document.querySelector(".modal__button");

function openPopup(modalOpen) {
  modalOpen.classList.add("modal_open");
  document.addEventListener("keydown", closeByEscape);
}

function openModal() {
  openPopup(contactModal);
}
formButton.addEventListener("click", openModal);

function closePopup(modalClose) {
  modalClose.classList.remove("modal_open");
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  const activeModal = document.querySelector(".modal_open");
  if (evt.key === "Escape") {
    closePopup(activeModal);
  }
}

//close modal
closeButton.addEventListener("click", () => {
  closePopup(contactModal);
});

contactModal.addEventListener("click", (evt) => {
  if (evt.target === contactModal) {
    closePopup(contactModal);
  }
});

const navbar = document.querySelector('.navbar');
const navbarButton = navbar.querySelector(".navbar__button")
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > header.offsetHeight - 20) {
    navbar.classList.remove('navbar_dark');
    navbar.classList.add('navbar_light');
    navbarButton.classList.add('navbar__button_dark');
  } else {
    navbarButton.classList.remove('navbar__button_dark');
    navbar.classList.remove('navbar_light');
    navbar.classList.add('navbar_dark');
  }
})

const initialCards = [
  {
    path: "../images/cloud-img.svg",
    title: "Labor-intensive dolly movements",
    text: "Challenges: It is more and more difficult to hire workers, because they prefer to work in delivery services for the same money."
  },
  {
    path: "../images/box-img.svg",
    title: "Forklifts, tuggers managed by man",
    text: "Challenges: It is more and more difficult to hire forklift drivers  because they prefer to work in delivery for the same money."
  },
  {
    path: "../images/box-img.svg",
    title: "Follow-the-line robots",
    text: "Challenges: It is time-consuming and expensive to replace old robots by state-of-the art, but produced by another vendor."
  },
  {
    path: "../images/box-img.svg",
    title: "Autonomous mobile robots ",
    text: "Challenges: Limited upgrade options within the same vendor robot line only and too expensive to use another vendor robots."
  }
]


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const cardElement = getNewCardElement(item);
    cardList.addItem(cardElement);
  }
}, ".section_type_automation");
cardList.render();

function getNewCardElement(item){ 
  const cardTemplate = document.querySelector(".card-template").content.querySelector(".card");
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector("card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardText = card.querySelector(".card__text");
  cardImage.src = item.path;
  cardImage.alt = item.path;
  cardTitle.textContent = item.title
  cardText.textContent = item.text;
} 

