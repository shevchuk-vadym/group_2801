const getRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const getRandomColor = () => {
  return `rgb(
    ${getRandomNumber(255)},
    ${getRandomNumber(255)},
    ${getRandomNumber(255)})
    `;
};
const normalaziTime = time => {
  return time < 10 ? `0${time}` : time;
};
const normalizeDay = value => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[value];
};
export class Clock {
  constructor(mountPoint = document.querySelector("body")) {
    this.mountPoint = mountPoint;
    this.activeMode = 0;
  }

  init() {
    this.render();
    this.attchEvents();
    this.renderTime();
    this.startTime();
  }

  render() {
    this.container = document.createElement("div");
    this.content = document.createElement("h1");
    this.container.style.background = getRandomColor();
    this.container.classList.add("clock");
    this.content.classList.add("clock__content");

    this.container.appendChild(this.content);
    this.mountPoint.appendChild(this.container);
  }
  renderTime() {
    let content;
    switch (this.activeMode) {
      case 1:
        content = this.getShort();
        break;
      case 2:
        content = this.getDate();
        break;
      default:
        content = this.getFull();
    }
    this.content.textContent = content;
  }
  setColors() {
    const color = getRandomColor();
    this.container.style.background = color;
    this.content.style.color = color;
  }

  getFull() {
    const currentDate = new Date();
    const h = normalaziTime(currentDate.getHours());
    const m = normalaziTime(currentDate.getMinutes());
    const s = normalaziTime(currentDate.getSeconds());

    return `${h}:${m}:${s}`;
  }

  getShort() {
    const currentDate = new Date();
    const h = normalaziTime(currentDate.getHours());
    const m = normalaziTime(currentDate.getMinutes());

    return `${h}:${m}`;
  }
  getDate() {
    const currentDate = new Date();
    const date = normalaziTime(currentDate.getDate());
    const day = normalizeDay(currentDate.getDay());
    const year = normalaziTime(currentDate.getFullYear());
    return `${date}/${day}/${year}`;
  }
  startTime() {
    setInterval(() => this.renderTime(), 1);
  }
  attchEvents() {
    this.container.addEventListener("click", () => {
      this.increaseMode();
      this.setColors();
    });
  }

  increaseMode() {
    if (this.activeMode + 1 < 3) {
      this.activeMode++;
    } else {
      this.activeMode = 0;
    }
    console.log(this.activeMode);
  }
}
