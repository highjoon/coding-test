let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let tempN = N;
let cnt = 0;
let sum = 0;

while (true) {
  cnt++;

  sum = Math.floor(N / 10) + (N % 10);
  N = (N % 10) * 10 + (sum % 10);

  if (tempN === N) {
    break;
  }
}

console.log(cnt);
