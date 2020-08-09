// spread operators

const first = [1, 2, 3];
const second = [4, 5, 6];

// // old way
// const combined = first.concat(second);

// // spread op way
// // makes it possibleto add new items as well
// const combined = [...first, "a", ...second, "b"];

const clone = [...first];
console.log(clone);
console.log(first);
