const button = document.querySelector(".button");

function myFunction() {
  if (button.style.background === "green") {
    button.style.background = "red";
  } else {
    button.style.background = "green";
  }
}
