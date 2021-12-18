// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = ["18"];
// let input = ["4"];
let input = ["6"];
let N = Number(input[0]);

let answer = 0;

if (N % 5 === 0) {
  answer += parseInt(N / 5);
} else {
  if (N % 3 === 0) {
    answer += parseInt(N / 5);
    answer += parseInt((N % 5) / 3);
  } else {
    answer += -1;
  }
}

console.log(answer);
