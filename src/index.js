const person = {
  name: "Casey",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk;
// console.log(walk);
walk();
// window object reference
