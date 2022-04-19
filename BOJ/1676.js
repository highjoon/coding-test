let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let case5 = Number(input);
let case2 = Number(input);
let answer5 = 0;
let answer2 = 0;

function solution(target, num, answer) {
  while (target >= num) {
    answer += parseInt(target / num);
    target /= num;
  }
  return answer;
}

console.log(Math.min(solution(case5, 5, answer5), solution(case2, 2, answer2)));
