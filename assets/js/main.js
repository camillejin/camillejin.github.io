// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const shapeItems = document.querySelectorAll('.nav-shape');
const imageHolder = document.getElementById('displayImage');
const seungyun = document.querySelector('.seungyun');

const path = window.location.pathname;
const pathList = path.split(/[./]/);
pathList.shift();
pathList.shift();
const page = pathList.shift();

if (page=="projects") {
    seungyun.classList.add("projects");
}
if (page=="research") {
    seungyun.classList.add("research");
}
if (page=="forfun") {
    seungyun.classList.add("forfun");
}

shapeItems.forEach(function(thisItem) {
    if (thisItem.classList.contains(page)) {

        thisItem.classList.add('colored');
        /*
        if (thisItem.classList.contains("nav-triangle")) {
            thisItem.classList.add('clicked');
        } else {
            thisItem.classList.add('lightblue');
        }
        */
    }
});

function hover(element) {
    imageHolder.setAttribute('src', element.getAttribute('src').slice(0, -4)+"_big.svg");
}

function changeText(element, text) {
    element.innerHTML=text;
}



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}







/*
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');

        circleItems.forEach(function(thisItem) {
            if (thisItem.classList.contains(page)) {
                thisItem.classList.add('scrolled');
            }
        });
    }
    else {

        header.classList.remove('navbarDark');

        circleItems.forEach(function(thisItem) {
            if (thisItem.classList.contains(page)) {
                thisItem.classList.remove('scrolled');
            }
        });
    }
}

*/