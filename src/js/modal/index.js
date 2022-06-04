const refs = {
  backdop: document.querySelector("[data-backdrop]"),
  buttonClose: document.querySelector("[data-button-close]"),
  buttonOpen: document.querySelector("[data-button-open]"),
};

const openModal = () => {
  refs.backdop.classList.remove("is-hidden");
  window.addEventListener("keydown", pressEscButton);
};

const closeModal = () => {
  refs.backdop.classList.add("is-hidden");
  window.removeEventListener("keydown", pressEscButton);
};

refs.buttonOpen.addEventListener("click", openModal);
refs.buttonClose.addEventListener("click", closeModal);

const backdropClick = (e) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
};

refs.backdop.addEventListener("click", backdropClick);

const pressEscButton = (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
};
