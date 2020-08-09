const person = {
  name: "Casey",
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk.bind(person);
// console.log(walk);
walk();
// window object reference
