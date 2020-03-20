const name = document.querySelector(".form__name");
const text = document.querySelector(".form__text");
const btn = document.querySelector(".form__add");
const list = document.querySelector(".forms");

console.log("IMPORTED");
btn.addEventListener("click", clickAdd);

function clickAdd() {
  const value = name.value;
  const valueText = text.value;
  console.log(value);
  if (!value) {
    name.classList.add("error");
  }
  if (!valueText) {
    text.classList.add("error");
  }
  list.innerHTML = list.innerHTML + renderItem(value, valueText);
}

function renderItem(name, text) {
  return (
    list.classList.add("forms__list") +
    "<div>" +
    name +
    "</div>" +
    "<div>" +
    text +
    "</div>"
  );
}
