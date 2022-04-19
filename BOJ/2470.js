let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const solution = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = N - 1;
let tempSum = Number.MAX_SAFE_INTEGER;
let answer = "";

while (left < right) {
  let sum = solution[left] + solution[right];

  if (tempSum > Math.abs(sum)) {
    tempSum = Math.abs(sum);
    answer = [solution[left], solution[right]];
  }

  if (sum < 0) {
    left++;
  } else {
    right--;
  }
}

console.log(answer.sort((a, b) => a - b).join(" "));
