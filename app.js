const CLOSE_BUTTON = document.querySelector(".close-button");
const TOAST = document.querySelector(".toast");
const CARD = document.querySelector(".card");
const CARD_CLOSE_BUTTON = document.querySelector("#card-close-button");

CLOSE_BUTTON.addEventListener("click", () => {
  TOAST.style.display = "none";
});

CARD_CLOSE_BUTTON.addEventListener("click", () => {
  CARD.style.display = "none";
});
