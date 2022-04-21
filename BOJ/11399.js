let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
input = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += input[i];
  answer += sum;
}

console.log(answer);
