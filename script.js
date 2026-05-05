const header = document.querySelector("[data-header]");
const form = document.querySelector("[data-form]");
const status = document.querySelector("[data-form-status]");

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
