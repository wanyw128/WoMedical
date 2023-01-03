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