// const square = function (number) {
//   return number * number;
// };

// // one param
// const square = (number) => number * number;
// console.log(square(5));

// // no params
// const square = () => {
//   return number * number;
// };

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// const actieJobs = jobs.filter(function (job) {
//   return job.isActive;
// });
// arrow version
const actieJobs = jobs.filter((job) => job.isActive);
