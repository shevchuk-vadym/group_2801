const red = document.querySelector(".col__red");
const yellow = document.querySelector(".col__yellow");
const green = document.querySelector(".col__green");
const ACTIVE_CLASS_NAME = "active";

let isEnable = true;

function redToggle() {
  if (isEnable === true) {
    redToggleActive();
  } else {
    redToggleDeactive();
  }
}
function yellowToggle() {
  if (isEnable === true) {
    yellowToggleActive();
  } else {
    yellowToggleDeactive();
  }
}
function greenToggle() {
  if (isEnable === true) {
    greenToggleActive();
  } else {
    greenToggleDeactive();
  }
}
console.log(redToggleActive);
function trafficLightRed() {
  if (isEnable === false) {
    redToggleActive;
  } else {
    yellowToggleDeactive;
    greenToggleDeactive;
  }
}

function redToggleDeactive() {
  red.classList.remove(ACTIVE_CLASS_NAME);
  isEnable = true;
}

function yellowToggleDeactive() {
  yellow.classList.remove(ACTIVE_CLASS_NAME);
  isEnable = true;
}

function greenToggleDeactive() {
  green.classList.remove(ACTIVE_CLASS_NAME);
  isEnable = true;
}

function redToggleActive() {
  red.classList.add(ACTIVE_CLASS_NAME);
  isEnable = false;
}

function yellowToggleActive() {
  yellow.classList.add(ACTIVE_CLASS_NAME);
  isEnable = false;
}

function greenToggleActive() {
  green.classList.add(ACTIVE_CLASS_NAME);
  isEnable = false;
}
