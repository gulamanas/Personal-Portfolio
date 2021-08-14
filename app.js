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
