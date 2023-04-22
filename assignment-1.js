//solving assignment 1 with iteration
let arrFibs = [];

function fibs(n) {
  if (n < 2) {
    return n;
  } else {
    arrFibs.push(fibs(n - 1) + fibs(n - 2));
    return fibs(n - 1) + fibs(n - 2);
  }
}
console.log(fibs(5));
console.log(arrFibs);
