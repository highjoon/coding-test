let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
input = input[0].split(" ").map(Number);

let answer = 0;
let dp = Array.from({ length: N }, () => 0);
dp[0] = 1;

for (let i = 1; i < N; i++) {
  max = 0;
  for (let j = 0; j < i; j++) {
    if (input[i] > input[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

answer = Math.max(...dp);
console.log(answer);
