import { Lamp } from "./lamp.js";
import { Switcher } from "./switcher.js";

{
  Lamp;
}

{
  Switcher;
}
const body = document.querySelector("body");

const myTestLamp = new Lamp(body);
myTestLamp.render();

const myTestSwitcher = new Switcher(body, myTestLamp);
myTestSwitcher.render();
window.myTestSwitcher = myTestLamp;
