let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let Nnums = input
  .shift()
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const M = Number(input.shift());
let Mnums = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
const answer = [];

for (let i = 0; i < M; i++) {
  let left = 0;
  let right = N;
  let result = 0;
  let target = Mnums[i];

  while (left <= right) {
    let mid = parseInt((left + right) / 2);

    if (target === Nnums[mid]) {
      result = 1;
      break;
    } else if (target < Nnums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  answer.push(result);
}

console.log(answer.join("\n"));
