// preloader and animations

const body = document.querySelector("body");
const preloadContainer = document.querySelector("#preloader");
const products = document.querySelectorAll(".product-grid__card");

window.onload = () => {

  // add animated classes to each product card
  products.forEach((product, index) => {
    product.classList.add(`slide-up-${index + 1}`);
  });

  // fade out preloader on page load
  preloadContainer.classList.add("fade-out");

  // enable page scrolling
  body.classList.add("overflow");
  
};
