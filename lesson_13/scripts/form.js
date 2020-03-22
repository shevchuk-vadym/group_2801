const name = document.querySelector(".form__name");
const text = document.querySelector(".form__text");
const btn = document.querySelector(".form__add");
const list = document.querySelector(".list");

console.log("IMPORTED");
btn.addEventListener("click", clickAdd);

function clickAdd() {
  const name = name.value;
  const text = text.value;
  console.log(value);
  if (!value) {
    name.classList.add("error");
  }
  if (!valueText) {
    text.classList.add("error");
  }
  list.innerHTML = list.innerHTML + renderItem(name, text);
}

function renderItem(a, b) {
  return `
    <div class="list__item">
      <div class="item__text">${b}</div>
      <div class="item__name">${a}</div>
    </div>
    `;
}
