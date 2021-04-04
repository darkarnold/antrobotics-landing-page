class Carousel {
  constructor({ carouselSelector, items }) {
    this._carouselSelector = carouselSelector;
    this._items = items;
    this.itemPosition = 0;
  }

  updateSlideItem() {
    this._items.forEach((item) => {
      //item.classList.remove("carousel__item_type_initial");
      //item.classList.add("carousel__item_type_hidden");
    });
    let item = this._items[this.itemPosition % this._items.length];
    this.itemPosition += 1;
    //item.className = ".carousel__item_type_hidden";
    console.log(item);

    //this._items[this.itemPosition].classList.add("carousel__item_type_initial");
  }

  // set eventListeners
  setEventListeners() {
    this.nextItemButton = document.querySelector(".carousel__button-nav_left");
    this.prevItemButton = document.querySelector(".carousel__button-nav_right");

    this.nextItemButton.addEventListener("click", () => {
      this.nextSlide();
      //console.log("hell");
    });

    this.prevItemButton.addEventListener("click", () => {
      this.previousSlide();
      //console.log("123");
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

export default Carousel;

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
