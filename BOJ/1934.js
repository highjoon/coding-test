let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());
let answer = "";

function getGCD(num1, num2) {
  return num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
}

function getLCM(num1, num2) {
  return (num1 * num2) / getGCD(num1, num2);
}

for (let testCase of input) {
  const A = Number(testCase.split(" ")[0]);
  const B = Number(testCase.split(" ")[1]);
  answer += `${getLCM(A, B)}\n`;
}

console.log(answer);
