let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const R = Number(input[i].split(" ")[0]);
  const S = input[i].split(" ")[1];
  const answer = [];

  for (let str of S) {
    answer.push(str.repeat(R));
  }
  console.log(answer.join(""));
}
