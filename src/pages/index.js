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
