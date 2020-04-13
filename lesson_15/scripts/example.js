function test() {
  this.hello = "world";
  this.run = function() {
    console.log("TEST", this.hello);
  };
}

const u = new test();
console.log(u.run());

function Character(name) {
  (this.name = name),
    (this.greet = function greeting() {
      console.log("Hello! my name is " + this.name);
    });
}

const o = new Character("Konor");
console.log(o);

const character1 = new Character("Vadym");
const character2 = new Character("Max");
console.log(character1, character2);
