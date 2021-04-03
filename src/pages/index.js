import Section from "../script/components/Section.js";
import {
  benefitsCards,
  customerBenefitsCards,
  teamCards,
} from "../script/utils/constants.js";
import ModalWithForm from "../script/components/ModalWithForm.js";

const modalContactForm = new ModalWithForm({
  modalSelector: ".modal",
  handleFormSubmit: (inputValues) => {
    console.log(inputValues, form);
    modalContactForm.close();
  },
});
modalContactForm.setEventListeners();
const contactFormButton = document.querySelector(".contact-form__open");
contactFormButton.addEventListener("click", ()=>{
  modalContactForm.open();
});
const robotsFormButton = document.querySelector(".carousel__button");
robotsFormButton.addEventListener("click", ()=>{
  modalContactForm.open();
});



const navbar = document.querySelector(".navbar");
const navbarButton = navbar.querySelector(".navbar__button");
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > header.offsetHeight - 20) {
    navbar.classList.remove("navbar_dark");
    navbar.classList.add("navbar_light");
    navbarButton.classList.add("navbar__button_dark");
  } else {
    navbarButton.classList.remove("navbar__button_dark");
    navbar.classList.remove("navbar_light");
    navbar.classList.add("navbar_dark");
  }
});

const cardList = new Section(
  {
    items: benefitsCards,
    renderer: (item) => {
      const cardElement = getNewCardElement(item, ".card-template_benefits");
      cardList.addItem(cardElement);
    },
  },
  ".card-container_benefits"
);
cardList.render();

const cardListCustomerBenefits = new Section(
  {
    items: customerBenefitsCards,
    renderer: (item) => {
      const cardElement = getNewCardElement(
        item,
        ".card-template_customer-benefits"
      );
      cardListCustomerBenefits.addItem(cardElement);
    },
  },
  ".card-container_customer-benefits"
);
cardListCustomerBenefits.render();

const cardListTeam = new Section(
  {
    items: teamCards,
    renderer: (item) => {
      const cardElement = getNewCardElement(item, ".card-template_team");
      cardListTeam.addItem(cardElement);
    },
  },
  ".card-container_team"
);
cardListTeam.render();

function getNewCardElement(item, selector) {
  const cardTemplate = document
    .querySelector(selector)
    .content.querySelector(".card");
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector(".card__image");
  const cardTitle = card.querySelector(".card__title");
  const cardText = card.querySelector(".card__text");
  cardImage.src = item.path;
  cardTitle.textContent = item.title;
  cardText.innerHTML = item.text;
  if (item.subtitle) {
    const cardSubtitle = card.querySelector(".card__subtitle");
    cardSubtitle.textContent = item.subtitle;
  }
  return card;
}
