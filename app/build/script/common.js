"use strict";var btn=document.querySelector(".nav__burger"),menu=document.querySelector(".menu");btn.addEventListener("click",function(){menu.classList.toggle("active")}),document.addEventListener("click",function(e){e.target!=btn&&menu.classList.contains("active")&&!e.target.classList.contains("menu__link")&&menu.classList.remove("active")});var btnLogin=document.querySelector(".account-link"),modal=document.querySelector(".modal"),btnClose=document.querySelector(".modal__close");btnLogin.addEventListener("click",function(){modal.classList.add("active"),document.body.style.overflow="hidden"});function closeModal(){modal.classList.remove("active"),document.body.style.overflow=""}btnClose.addEventListener("click",closeModal),modal.addEventListener("click",function(event){event.target===modal&&closeModal()}),document.addEventListener("keydown",function(e){"Escape"===e.code&&modal.classList.contains("active")&&closeModal()});