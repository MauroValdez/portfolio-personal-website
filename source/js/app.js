import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', () => {
  showMenu()
})

function showMenu() {
  const navMenu = document.querySelector('#nav-menu'),
        navToggle = document.querySelector('#nav-toggle'),
        navClose = document.querySelector('#nav-close'),
        navLink = document.querySelectorAll('.nav__link')
  
  if(navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
    })
  }
  if(navClose) {
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
    })
  }

  navLink.forEach( n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  }))
}

let swiperProjects = new Swiper(".projects__container", {
  loop: true,
  spaceBetween: 24,
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

let swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})