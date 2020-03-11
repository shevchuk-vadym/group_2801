const button = document.querySelector(".button");
const noneHello = document.querySelector(".hello");

function myFunction() {
  if (button.style.background === "green") {
    button.style.background = "red";
  } else {
    button.style.background = "green";
  }
}

function displayOn() {
  if (button.style.background === "green") {
    noneHello.style.display = "block";
  } else {
    noneHello.style.display = "none";
  }
}
