let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M] = input;

function solution(num, pow) {
  let count = 0;
  while (num >= pow) {
    count += parseInt(num / pow);
    num /= pow;
  }
  return count;
}

const answer2 = solution(N, 2) - solution(N - M, 2) - solution(M, 2);
const answer5 = solution(N, 5) - solution(N - M, 5) - solution(M, 5);

console.log(Math.min(answer2, answer5));
