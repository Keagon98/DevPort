"use strict";let mouseCursor=document.querySelector(".cursor"),allLinks=document.querySelectorAll("a");function cursor(e){mouseCursor.style.top=e.pageY+"px",mouseCursor.style.left=e.pageX+"px"}window.addEventListener("mousemove",cursor),allLinks.forEach((e=>{e.addEventListener("mouseleave",(()=>{mouseCursor.classList.remove("menu-link-scale")})),e.addEventListener("mouseover",(()=>{mouseCursor.classList.add("menu-link-scale")}))}));const wrapperMenu=document.querySelector(".wrapper-menu"),menuLinks=document.querySelector(".menu-link-wrapper"),menuLinkWrapper=document.querySelector(".menu-link-wrapper"),openMenu=function(){wrapperMenu.classList.toggle("open"),menuLinks.classList.toggle("hidden"),menuLinkWrapper.classList.toggle("menu-open")};wrapperMenu.addEventListener("click",openMenu);