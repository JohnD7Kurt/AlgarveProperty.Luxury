const header = document.querySelector("[data-header]");
const form = document.querySelector("[data-form]");
const status = document.querySelector("[data-form-status]");
const heroImage = document.querySelector(".hero-image");

const heroOptions = {
  lagos: {
    src: "assets/real-lagos-ponta-da-piedade.jpg",
    alt: "Real photograph of Ponta da Piedade cliffs and sea caves in Lagos, Algarve",
  },
  marinha: {
    src: "assets/hero-option-praia-da-marinha.jpg",
    alt: "Real photograph of Praia da Marinha cliffs and Atlantic water in the Algarve",
  },
  benagil: {
    src: "assets/hero-option-benagil-cave.jpg",
    alt: "Real photograph of Benagil Cave and water in the Algarve",
  },
  marinhaBlue: {
    src: "assets/hero-option-marinha-sunrise.jpg",
    alt: "Real photograph of Praia da Marinha cliffs and blue Atlantic water",
  },
  falesia: {
    src: "assets/hero-option-falesia-cliffs.jpg",
    alt: "Real photograph of Praia da Falesia red cliffs and beach",
  },
  benagilPanorama: {
    src: "assets/hero-option-benagil-panorama.jpg",
    alt: "Real photograph from inside Benagil Cave with turquoise water",
  },
};

const selectedHero = new URLSearchParams(window.location.search).get("hero");

if (heroImage && heroOptions[selectedHero]) {
  heroImage.src = heroOptions[selectedHero].src;
  heroImage.alt = heroOptions[selectedHero].alt;
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = new FormData(form).get("name");
    status.textContent = `Thank you, ${name}. We will prepare a private Algarve search route for you.`;
    form.reset();
  });
}
