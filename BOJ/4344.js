// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = [
  "5",
  "5 50 50 70 80 100",
  "7 100 95 90 80 70 60 50",
  "3 70 90 80",
  "3 70 90 81",
  "9 100 99 98 97 96 95 94 93 91",
];

const C = Number(input[0]);

for (let i = 1; i <= C; i++) {
  let sum = 0;
  let count = 0;

  scores = input[i].split(" ").map((v) => Number(v));
  const N = scores[0];

  for (let j = 1; j <= N; j++) {
    sum += scores[j];
  }
  const avg = sum / N;
  for (let k = 1; k <= N; k++) {
    if (scores[k] > avg) {
      count++;
    }
  }
  console.log(((count / N) * 100).toFixed(3) + "%");
}
