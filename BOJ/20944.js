let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  input = Number(input);
  let answer = Array.from({ length: input }, () => "a");
  if (input % 2 !== 0) {
    answer[Math.floor(input / 2)] = "b";
  }
  return answer.join("");
}

console.log(solution(input));
