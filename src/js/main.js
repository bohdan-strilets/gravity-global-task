const refs = {
  buttonClick: document.querySelector("[data-button-open]"),
  value: document.querySelector("[data-value]"),
  buttonReset: document.querySelector("[data-button-reset]"),
};

let numberOfClicks = 0;
const LOCALSTORAGE_KEY = "number-of-clicks";

const setLocalStarage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

const getLocalStarage = (name) => {
  try {
    numberOfClicks = JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
};

const renderMarkup = (value) => {
  refs.value.textContent = `${value} times`;
};

getLocalStarage(LOCALSTORAGE_KEY);

const addClick = () => {
  numberOfClicks += 1;
  setLocalStarage(LOCALSTORAGE_KEY, numberOfClicks);
  renderMarkup(numberOfClicks);

  if (numberOfClicks >= 5) {
    refs.buttonReset.classList.remove("is-hidden");
  }
};

refs.buttonClick.addEventListener("click", addClick);

const clearClickCount = () => {
  numberOfClicks = 0;
  setLocalStarage(LOCALSTORAGE_KEY, numberOfClicks);
  renderMarkup(0);
  refs.buttonReset.classList.add("is-hidden");
};

refs.buttonReset.addEventListener("click", clearClickCount);
