const burger = document.querySelector(".burger");
burger.addEventListener("click", () => {
  let navSlide = document.querySelector(".side_nav_wrapper");
  navSlide.classList.toggle("nav_slide");
  burger.classList.toggle("switch");
});

window.addEventListener("click", (event) => {
  let navSlide = document.querySelector(".side_nav_wrapper");
  if (event.target == navSlide) {
    navSlide.classList.remove("nav_slide");
    burger.classList.remove("switch");
  }
});

// loader wrapper

let spinnerWrapper = document.querySelector('.loader_container');
window.addEventListener('load', function () {
  // spinnerWrapper.style.display = 'none'
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
})

navRemove = () => {
  let navSlide = document.querySelector(".side_nav_wrapper");
  navSlide.classList.remove("nav_slide");
  burger.classList.remove("switch");
};

var navRemove1 = document.querySelector(".nav_remove1");
navRemove1.addEventListener("click", () => {
  navRemove();
});

var navRemove2 = document.querySelector(".nav_remove2");
navRemove2.addEventListener("click", () => {
  navRemove();
});

var navRemove3 = document.querySelector(".nav_remove3");
navRemove3.addEventListener("click", () => {
  navRemove();
});

var navRemove4 = document.querySelector(".nav_remove4");
navRemove4.addEventListener("click", () => {
  navRemove();
});
