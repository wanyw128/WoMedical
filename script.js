function toggleNav(){
    var x = document.getElementById("nav");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

var newsSlider = tns({
    "container": ".news-slider",
    "items": 2,
    "slideBy": "1",
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 400,
    "controlsContainer": "#news-controls",
    prevButton: ".news-previous",
    nextButton: ".news-next",
    nav: false
});

var eventsSlider = tns({
    "container": ".events-slider",
    "items": 2,
    "slideBy": "1",
    "mouseDrag": true,
    "swipeAngle": false,
    "speed": 400,
    "controlsContainer": "#events-controls",
    prevButton: ".events-previous",
    nextButton: ".events-next",
    nav: false
});

function openIssue1(){
    document.getElementById("issues-content-1").style.display = "block";
    document.getElementById("issues-close-btn-1").style.display = "inline-block";
}

function closeIssue1(){
    document.getElementById("issues-content-1").style.display = "none";
    document.getElementById("issues-close-btn-1").style.display = "none";
}

function openIssue2(){
    document.getElementById("issues-content-2").style.display = "block";
    document.getElementById("issues-close-btn-2").style.display = "inline-block";
}

function closeIssue2(){
    document.getElementById("issues-content-2").style.display = "none";
    document.getElementById("issues-close-btn-2").style.display = "none";
}

function openIssue3(){
    document.getElementById("issues-content-3").style.display = "block";
    document.getElementById("issues-close-btn-3").style.display = "inline-block";
}

function closeIssue3(){
    document.getElementById("issues-content-3").style.display = "none";
    document.getElementById("issues-close-btn-3").style.display = "none";
}

let slideIndex = [0,1];
let slideId = ["sheltersSlideshow", "companiesSlideshow", "librariesSlideshow"]
showSlides(0, 0);
showSlides(0, 1);
showSlides(0, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

slides[slideIndex[no]-1].style.display = "block";
}

function drop(name) {
document.getElementById(name).classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdownArrow')) {
    var dropdowns = document.getElementsByClassName("partners-dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
