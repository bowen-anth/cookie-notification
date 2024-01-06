const CLOSE_BUTTON = document.querySelector(".close-button");
const TOAST = document.querySelector(".toast");

CLOSE_BUTTON.addEventListener("click", () => {
  TOAST.style.display = "none";
  console.log("clicked");
});
