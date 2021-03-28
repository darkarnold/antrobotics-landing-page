export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
    render() {
      this._items.forEach(item => this._renderer(item));
    }
    addItem(itemElement) {
      this._container.append(itemElement);
    }
    prepend(itemElement) {
      this._container.prepend(itemElement);
    }
  }
  