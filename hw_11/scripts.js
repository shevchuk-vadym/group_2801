// const button = document.querySelector(".button");
// const noneHello = document.querySelector(".hello");

//   function displayOn() {
//   if (button.style.background === "green") {
//     noneHello.style.display = "none";
//     button.style.background = "red";
//   } else {
//     noneHello.style.display = "block";
//     button.style.background = "green";
//   }
// }

const button = document.querySelector(".button");
const noneHello = document.querySelector(".hello");
function t() {
  if (button.style.background === "green") {
    noneHello.style.display = "block";
    button.style.background = "red";
  } else {
    noneHello.style.display = "none";
    button.style.background = "green";
  }
}
function o() {
  console.log("HUY");
}
function displayOn() {
  o();
  t();
}
