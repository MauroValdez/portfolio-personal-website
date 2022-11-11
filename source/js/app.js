import Swiper from 'swiper/bundle';
import emailjs from "@emailjs/browser"

document.addEventListener('DOMContentLoaded', () => {
  showMenu()
  formEmail()
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

function formEmail() {
  const contactForm = document.querySelector('#contact-form'),
        contactName = document.querySelector('#contact-name'),
        contactEmail = document.querySelector('#contact-email'),
        contactProject = document.querySelector('#contact-project'),
        contactMessage = document.querySelector('#contact-message')
  
  const sendEmail = e => {
    e.preventDefault();

    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
      contactMessage.classList.remove('color-blue')
      contactMessage.classList.add('color-red')

      contactMessage.textContent = 'Write all the input fields 📩👎'

      setTimeout(() => {
        contactMessage.textContent = ''
      }, 3000)
    } else {
      emailjs.sendForm('service_88mo7ty','template_ozbd55p','#contact-form','sAIJesc-yNkY0G7GP')
        .then(() => {
          contactMessage.classList.add('color-blue')
          contactMessage.textContent = 'Message sent 📨👍'

          setTimeout( () => {
            contactMessage.textContent = ''
          }, 3000)
        }, (error) => {
          alert('OOPS! SOMETHING HAS FAILED...', error)
        })
        
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''
    }
  }

  contactForm.addEventListener('submit', sendEmail)
}