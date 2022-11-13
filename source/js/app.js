import Swiper from "swiper/bundle";
import emailjs from "@emailjs/browser";
import ScrollReveal from "scrollreveal";

window.addEventListener("scroll", () => {
  scrollActive();
  showScrollup();
  scrollHeader();
});
document.addEventListener("DOMContentLoaded", () => {
  showMenu();
  formEmail();
  darkMode();
});

function showMenu() {
  const navMenu = document.querySelector("#nav-menu"),
    navToggle = document.querySelector("#nav-toggle"),
    navClose = document.querySelector("#nav-close"),
    navLink = document.querySelectorAll(".nav__link");

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  navLink.forEach((n) =>
    n.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    }),
  );
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
  },
});

function formEmail() {
  const contactForm = document.querySelector("#contact-form"),
    contactName = document.querySelector("#contact-name"),
    contactEmail = document.querySelector("#contact-email"),
    contactProject = document.querySelector("#contact-project"),
    contactMessage = document.querySelector("#contact-message");

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      contactName.value === "" ||
      contactEmail.value === "" ||
      contactProject.value === ""
    ) {
      contactMessage.classList.remove("color-blue");
      contactMessage.classList.add("color-red");

      contactMessage.textContent = "Write all the input fields 📩👎";

      setTimeout(() => {
        contactMessage.textContent = "";
      }, 3000);
    } else {
      emailjs
        .sendForm(
          "service_88mo7ty",
          "template_ozbd55p",
          "#contact-form",
          "sAIJesc-yNkY0G7GP",
        )
        .then(
          () => {
            contactMessage.classList.add("color-blue");
            contactMessage.textContent = "Message sent 📨👍";

            setTimeout(() => {
              contactMessage.textContent = "";
            }, 3000);
          },
          (error) => {
            alert("OOPS! SOMETHING HAS FAILED...", error);
          },
        );

      contactName.value = "";
      contactEmail.value = "";
      contactProject.value = "";
    }
  };

  contactForm.addEventListener("submit", sendEmail);
}

function scrollActive() {
  const sections = document.querySelectorAll("section[id]"),
    scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        `.nav__menu a[href*=${sectionId}]`,
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
}

function showScrollup() {
  const scrollUp = document.querySelector("#scroll-up");

  window.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}

function darkMode() {
  const themeButton = document.querySelector("#theme-button"),
    darkTheme = "dark-theme",
    iconTheme = "ri-sun-line";

  const selectedTheme = localStorage.getItem("selected-theme"),
    selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    document.body.classList.contains(iconTheme)
      ? "ri-moon-line"
      : "ri-sun-line";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme,
    );
    themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
      iconTheme,
    );
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
}

function scrollHeader() {
  const header = document.querySelector("#header");

  window.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
}

const sr = ScrollReveal( {
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true,
})

sr.reveal(`.home__data, .projects__container, .testimonial__container, .footer__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 100})

