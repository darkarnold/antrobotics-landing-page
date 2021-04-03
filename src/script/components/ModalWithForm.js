import Modal from "./Modal.js";

export default class ModalWithForm extends Modal {
  constructor({modalSelector, handleFormSubmit}) {
    super(modalSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._modal.querySelector(".form");
  }
  _getInputValues() {
    this._inputList = Array.from(this._modal.querySelectorAll(".form__input"));
    this._inputValues = {};
    this._inputList.forEach((input) => this._inputValues[input.name] = input.value);
    return this._inputValues;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }
  close() {
    this._form.reset();
    super.close()
  }
}
