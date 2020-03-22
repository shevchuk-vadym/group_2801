const slideShowRoot = document.querySelector(".slideshow");
const slides = document.querySelectorAll(".slideshow__slide");
const [prevControl, nextControl] = document.querySelectorAll(
  ".slideshow__control"
);
let activeSlideIndex = 0;

function toggleOnNext() {
  const activeSlide = slides[activeSlideIndex];
  activeSlide.classList.add("slide_active", "animate");
}

function toggleOff() {
  const noneActiveSlide = slides[activeSlideIndex];
  noneActiveSlide.classList.remove("slide_active", "animate");
}

function onNextButtonClick() {
  toggleOff();
  increaseSlides();
  toggleOnNext();
}

function onPrevButtonClick() {
  toggleOff();
  decreaseSlides();
  toggleOnNext();
}

function increaseSlides() {
  if (activeSlideIndex + 1 < slides.length) {
    activeSlideIndex++;
  } else activeSlideIndex = 0;
}
function decreaseSlides() {
  if (activeSlideIndex - 1 >= 0) {
    activeSlideIndex--;
  } else activeSlideIndex = slides.length - 1;
}
function addDynamicStyles() {
  for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    slide.style.transform = `translateX(-${100 * i}%)`;
  }
}
function createPager() {
  const pagerRoot = document.createElement("ul");
  pagerRoot.classList.add("slideshow__pager");

  for (let i = 0; i < slides.length; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
      toggleOff();
      activeSlideIndex = i;
      toggleOnNext();
    });
    li.append(button);
    pagerRoot.append(li);
  }
  slideShowRoot.append(pagerRoot);
}

// function addDynamicStyles() {
//   for (let i = 0; i < slides.length; i++) {
//     const slide = slides[i];
//     slide.style.transform = "translateX(- ${100 * i}%)";
//   }
// }

function initSlider() {
  addDynamicStyles();
  createPager();
  addEventListeners();
}

function addEventListeners() {
  prevControl.addEventListener("click", onPrevButtonClick);
  nextControl.addEventListener("click", onNextButtonClick);
}

export { initSlider };
