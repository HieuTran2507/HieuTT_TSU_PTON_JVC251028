let slideIndex = 0;
const slides = document.querySelector(".slides");
const slideTotal = 2;
const slideWidth = 406;

setInterval(() => {
  slideIndex = (slideIndex + 1) % slideTotal;
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}, 3000);
