let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input.shift().split(" ").map(Number);
let nums = input.shift().split(" ").map(Number);
let answer = [];
let startIndex;
let endIndex;
let startSum;
let endSum;

let cumulativeSum = [nums[0]];

for (let i = 1; i < N; i++) {
  cumulativeSum[i] = cumulativeSum[i - 1] + nums[i];
}

for (let section of input) {
  [startIndex, endIndex] = section.split(" ").map(Number);
  endSum = cumulativeSum[endIndex - 1];
  startSum = startIndex - 2 >= 0 ? cumulativeSum[startIndex - 2] : 0;
  answer.push(endSum - startSum);
}

console.log(answer.join("\n"));
