let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");

function solution(input) {
  let answer = 0;
  let lt = 0;
  let rt = input.length - 1;
  let flag = true;

  while (lt <= rt) {
    if (input[lt++] !== input[rt--]) {
      flag = false;
      break;
    }
  }

  if (flag) answer = 1;
  return answer;
}

console.log(solution(input));
