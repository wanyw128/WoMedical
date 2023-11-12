const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const leftButton = document.getElementById("slide-arrow-left");
const rightButton = document.getElementById("slide-arrow-right");
const photoContainers = document.querySelectorAll('.expand');

rightButton.addEventListener("click", (event) => {
    const slideWidth = slide.clientWidth;
      slidesContainer.scrollLeft += slideWidth;
  });

leftButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  });

photoContainers.forEach(container => {
    container.addEventListener('click', function() {
      // Toggle the expanded class on the clicked container
      this.classList.toggle('expanded');
    });
});

document.addEventListener("DOMContentLoaded", function() {
  document.body.style.overflow = "auto"; // Enable scrolling
});




