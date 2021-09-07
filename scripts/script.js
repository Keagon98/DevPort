'use strict';

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




  


