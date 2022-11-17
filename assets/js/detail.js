// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
const shapeItems = document.querySelectorAll('.nav-shape');

const path = window.location.pathname;
const pathList = path.split(/[./]/);
pathList.shift();
pathList.shift();
const page = pathList.shift();



shapeItems.forEach(function(thisItem) {
    if (thisItem.classList.contains(page)) {
        if (thisItem.classList.contains("nav-triangle")) {
            thisItem.classList.add('clicked');
        } else {
            thisItem.classList.add('lightblue');
        }
    }
    
});

/*

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {

        circleItems.forEach(function(thisItem) {

            if (thisItem.classList.contains(page)) {
                thisItem.classList.remove('scrolled');
            }
        });
    }
    else {

        circleItems.forEach(function(thisItem) {
            if (thisItem.classList.contains(page)) {
                thisItem.classList.add('scrolled');
            }
        });
    }
}

*/