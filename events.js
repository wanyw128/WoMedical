const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const leftButton = document.getElementById("slide-arrow-left");
const rightButton = document.getElementById("slide-arrow-right");

rightButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
  });

leftButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });