let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .sort((a, b) => Number(a) - Number(b));

const A = Number(input[0]);
const B = Number(input[1]);

function getGCD(num1, num2) {
  return num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
}

function getLCM(num1, num2) {
  return (num1 * num2) / getGCD(num1, num2);
}

console.log(getGCD(A, B));
console.log(getLCM(A, B));
