

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector(".links");


// add - add class
// remove - remove class
/*
navToggle.addEventListener('click',function(){
    if(links.classList.contains("show-links")){
        links.classList.remove('show-links')
    }
    else{
        links.classList.add('show-links')
    }
});
*/

// toggle - toggles class

navToggle.addEventListener('click',function(){
    links.classList.toggle('show-links')
});