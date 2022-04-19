let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const scores = input[1].split(" ").map((v) => Number(v));
const M = Math.max(...scores);
const newScores = scores.map((score) => {
  return (score / M) * 100;
});

console.log(newScores.reduce((a, b) => a + b, 0) / newScores.length);
