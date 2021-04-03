class Carousel {
  constructor({ carouselSelector, items }) {
    this._carouselSelector = carouselSelector;
    this._items = items;
    this.itemPosition = 0;
  }

  updateSlideItem() {
    this._items.array.forEach((item) => {
      item.classList.remove();
      item.classList.add();
    });

    this._items[this.itemPosition].classList.add();
  }

  // set eventListeners
  setEventListeners() {
    this.nextItemButton = this._carouselSelector.querySelector(
      ".carousel__button-nav_left"
    );
    this.prevItemButton = this._carouselSelector.querySelector(
      ".carousel__button-nav_right"
    );

    this.nextItemButton.addEventListener("click", () => {
      nextSlide();
    });

    this.prevItemButton.addEventListener("click", () => {
      previousSlide();
    });
  }

  nextSlide() {
    if (this.itemPosition === this._items - 1) {
      this.itemPosition = 0;
    } else {
      this.itemPosition++;
    }
    this.updateSlideItem();
  }

  previousSlide() {
    if (this.itemPosition === 0) {
      this.itemPosition = this._items - 1;
    } else {
      this.itemPosition--;
    }
    this.updateSlideItem();
  }
}

/*
//select all slides
const getSlides = document.querySelectorAll(".slide");

//set slide count
let currentSlide = 0;

//increment slide index
const nextSlide = () => {
  changeSlide(currentSlide + 1);
};

//decrement slide index
const prevSlide = () => {
  changeSlide(currentSlide - 1);
};

//select arrow controls
const next = document.querySelector(".fa-arrow-right");
const prev = document.querySelector(".fa-arrow-left");

//click event that passes to changeSlide function
next.addEventListener("click", nextSlide, false);
prev.addEventListener("click", prevSlide, false);

const changeSlide = clicked => {
  //selects class for current slide
  getSlides[currentSlide].className = "slide";

  //checks remainder of link to select current slide
  currentSlide = (clicked + getSlides.length) % getSlides.length;

  //adds css class to show current slide
  getSlides[currentSlide].className = "slide show";
};
*/
