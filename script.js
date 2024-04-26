function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "Imagens/icons-header/Navegação-icon.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "Imagens/icons-header/xbar.svg";
  }
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
 spaceBetwwen: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});