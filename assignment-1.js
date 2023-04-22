//solving assignment 1 with iteration

// function fibs(n) {
//   if (n <= 2) {
//     return [0, 1];
//   } else {
//     return [fibsR(num - 1), fibsR(num - 1)[num - 2] + fibsR(num - 1)[num - 3]];
//   }
// }

// console.log(fibs(5));
function fibsR(num) {
  if (num <= 0) {
    return "Must be greater than 0";
  } else if (num <= 1) {
    return [0];
  } else if (num <= 2) {
    return [0, 1];
  } else {
    return [
      ...fibsR(num - 1),
      fibsR(num - 1)[num - 2] + fibsR(num - 1)[num - 3],
    ];
  }
}
console.log(fibsR(8));
