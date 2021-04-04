import Section from "../script/components/Section.js";
import {
  benefitsCards,
  customerBenefitsCards,
  teamCards,
  robotProducts,
  galleryItems,
} from "../script/utils/constants.js";
import ModalWithForm from "../script/components/ModalWithForm.js";
import Carousel from "../script/components/Carousel.js";

const modalContactForm = new ModalWithForm({
  modalSelector: ".modal",
  handleFormSubmit: (inputValues) => {
    console.log(inputValues, form);
    modalContactForm.close();
  },
});
modalContactForm.setEventListeners();

const contactFormButton = document.querySelector(".contact-form__open");
contactFormButton.addEventListener("click", () => {
  modalContactForm.open();
});

const robotsFormButton = document.querySelector(".carousel__button");
robotsFormButton.addEventListener("click", () => {
  modalContactForm.open();
});

const navbar = document.querySelector(".navbar");
const navbarPopup = document.querySelector(".navbar__list");
const navbarButton = navbar.querySelector(".navbar__button");

navbarButton.addEventListener("click", (event) => {
  navbarPopup.classList.toggle("navbar_open");
  event.target.classList.toggle("navbar__button_active");
});
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > header.offsetHeight - 20) {
    navbar.classList.remove("navbar_dark");
    navbar.classList.add("navbar_light");
    navbarPopup.classList.remove("navbar_dark");
    navbarPopup.classList.add("navbar_light");
    navbarButton.classList.add("navbar__button_dark");
    if (navbarButton.contains.classList === ".navbar__button_active") {
      navbarButton.classList.add("navbar__button_dark");
    }
  } else {
    navbarButton.classList.remove("navbar__button_dark");
    navbar.classList.remove("navbar_light");
    navbar.classList.add("navbar_dark");
    navbarPopup.classList.add("navbar_dark");
    navbarPopup.classList.remove("navbar_light");
    if (navbarButton.contains.classList === ".navbar__button_active") {
      navbarButton.classList.remove("navbar__button_dark");
    }
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

// render gallery item
function showGalleryItems(item, selector) {
  const galleryItemTemplate = document
    .querySelector(selector)
    .content.querySelector(".gallery__item");

  const galleryItem = galleryItemTemplate.cloneNode(true);
  const galleryImage = galleryItem.querySelector(".gallery__image");
  const galleryCaption = galleryItem.querySelector(".gallery__caption");

  galleryImage.src = item.path;
  galleryCaption.textContent = item.caption;

  return galleryItem;
}

/*const galleryElement = showGalleryItems(
  galleryItems,
  ".carousel-gallery-template"
);

const galleryContainer = document.querySelector(".gallery__carousel");

galleryContainer.append(galleryElement);
const galleryImages = new Section(
  {
    items: galleryItems,
    renderer: (item) => {
      const galleryElement = showGalleryItems(
        item,
        ".carousel-gallery-template"
      );
      galleryImages.addItem(galleryElement);
      //galleryElement.classList.add("carousel__item_type_hidden");

      //galleryElement.classList.add("carousel__item_type_hidden");
    },
  },
  ".gallery__carousel"
);

galleryImages.render();*/

// carousel
const robot = new Carousel({
  carouselSelector: "carousel__items",
  items: robotProducts,
});

robot.setEventListeners();
