let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0].split(" ")[0]);
const M = Number(input[0].split(" ")[1]);
let cards = input[1].split(" ").map((v) => Number(v));
let max = Number.MIN_SAFE_INTEGER;
let answer = 0;

for (let i = 0; i < N; i++) {
  let first = cards[i];
  for (let j = i + 1; j < N; j++) {
    let second = cards[j];
    for (let k = j + 1; k < N; k++) {
      let third = cards[k];
      let sum = first + second + third;

      if (sum <= M && sum > max) {
        max = sum;
        answer = sum;
      }
    }
  }
}

console.log(answer);
