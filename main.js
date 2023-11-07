var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".my-Swiper", {
  slidesPerView: 1,
  spaceBetween: 60,
  simulateTouch: false,
  autoplay: {
    delay: 4000,
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// cards slider
var swiper = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    // disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// =============== infotext accordion ===============
// easiest way to show all the boxes, is to load the function initially, because working with css only did not work

window.addEventListener("DOMContentLoaded", (event) => {
  const accordion = document.querySelectorAll(".accordion-btn");
  accordion.forEach((cell) => {
    let accordionContent = cell.nextElementSibling;
    accordionContent.classList.toggle('active')
    if (accordionContent.classList.contains('active')) {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.height = "0";
    }
  });
});

// =============== faq accordion ===============
const accordion2 = document.querySelectorAll(".accordion-btn2");
accordion2.forEach((cell) => {
  cell.addEventListener("click", () => {
    let accordionContent = cell.nextElementSibling;

    let icon = cell.querySelector(".svg")
    if (icon.textContent === '+') {
      icon.textContent = '-'
    } else {
      icon.textContent = '+'
    }

    accordionContent.classList.toggle('active')
    if (accordionContent.classList.contains('active')) {
      accordionContent.style.height = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.height = "0";
    }
  });
});
