const btn = document.querySelector('.nav__burger');
const menu = document.querySelector('.menu');

btn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

document.addEventListener("click", function(e) {
    if (e.target != btn && menu.classList.contains("active") && !e.target.classList.contains("menu__link")) {
        menu.classList.remove("active");
    }
});

