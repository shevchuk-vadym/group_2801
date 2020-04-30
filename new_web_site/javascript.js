const button = document.querySelector("#control");
const menu = document.querySelector(".nav__tablet");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
});
