let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let nums = input[1].split(" ").map(Number);

let result = Array.from({ length: M }, () => 0);
let pSum = 0;
let answer = 0;

result[0] = 1;

for (let i = 0; i < N; i++) {
  pSum += nums[i];
  result[pSum % M] += 1;
}

for (let x of result) {
  answer += parseInt((x * (x - 1)) / 2);
}

console.log(answer);
