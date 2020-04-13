function Lamp(rootElement) {
  this.rootElement = rootElement;
  this.isEnabled = false;
  this.element = null;
}

Lamp.prototype.render = function() {
  const div = document.createElement("div");
  div.style.border = "1px solid red";
  div.style.borderRadius = "50%";
  div.style.width = "80px";
  div.style.height = "80px";
  this.element = div;

  this.rootElement.append(div);
};

Lamp.prototype.toggle = function() {
  if (this.isEnabled) {
    this.toggleOff();
  } else {
    this.toggleOn();
  }
};

Lamp.prototype.toggleOn = function() {
  this.isEnabled = true;
  this.element.style.backgroundColor = "red";
};
Lamp.prototype.toggleOff = function() {
  this.isEnabled = false;
  this.element.style.backgroundColor = "";
};

export { Lamp };
