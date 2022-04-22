let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let S = input.shift();
let q = Number(input.shift());
let answer = [];
const alphabets = "abcdefghijklmnopqrstuvwxyz";
let count;
let temp;
let cumulativeSum = [];
let selectedCumulativeSum;
let currentSum;
let a;
let start;
let end;

for (let alphabet of alphabets) {
  count = 0;
  temp = [];
  for (let s of S) {
    if (s === alphabet) count++;
    temp.push(count);
  }
  cumulativeSum.push(temp);
}

for (let question of input) {
  [a, start, end] = question.split(" ");
  start = Number(start);
  end = Number(end);
  selectedCumulativeSum = cumulativeSum[a.charCodeAt(0) - 97];
  currentSum = selectedCumulativeSum[end] - selectedCumulativeSum[start];

  if (S[start] === a) currentSum += 1;
  answer.push(currentSum);
}

console.log(answer.join("\n"));
