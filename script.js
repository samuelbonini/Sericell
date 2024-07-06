function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "Imagens/icons-header/navegacaomenu-icon.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "Imagens/icons-header/xbar.svg";
  }
}
/*----------------*/

const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = document.querySelector(".scrollbar-thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

//
 // Handle scrollbar thumb drag
 scrollbarThumb.addEventListener("mousedown", (e) => {
  const startX = e.clientX;
  const thumbPosition = scrollbarThumb.offsetLeft;
  const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
  
  // Update thumb position on mouse move
  const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      // Ensure the scrollbar thumb stays within bounds
      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
      
      scrollbarThumb.style.left = `${boundedPosition}px`;
      imageList.scrollLeft = scrollPosition;
  }
  // Remove event listeners on mouse up
  const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
  }
  // Add event listeners for drag interaction
  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);
});

//

  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
     const direction = button.id === "prev-slide" ? -1 : 1;
     const scrollAmount = imageList.clientWidth * direction;
     imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
    });
});

const handleSlideButtons = () => {
  slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
  slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
}


 // ------------ rolagem das imagens
 const updateScrollThumbPosition = () => {
  const scrollPosition = imageList.scrollLeft;
  const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
  scrollbarThumb.style.left = `${thumbPosition}px`;
}

  // ---------------------- rolagem das imagens
  imageList.addEventListener("scroll", () => {
    updateScrollThumbPosition();
    handleSlideButtons();
});
}


window.addEventListener("load", initSlider);