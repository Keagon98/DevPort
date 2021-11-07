'use strict';

// Cursor 

let mouseCursor = document.querySelector('.cursor');
let allLinks = document.querySelectorAll('a');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
};

allLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('menu-link-scale');
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('menu-link-scale');
  });
});



// To open burger menu
const wrapperMenu = document.querySelector('.wrapper-menu');
const menuLinks = document.querySelector(".menu-link-wrapper");
const menuLinkWrapper = document.querySelector('.menu-link-wrapper');


const openMenu = function() {
  wrapperMenu.classList.toggle('open');
  menuLinks.classList.toggle('hidden');
  menuLinkWrapper.classList.toggle('menu-open');

};

wrapperMenu.addEventListener('click', openMenu);

AOS.init({
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});




  


