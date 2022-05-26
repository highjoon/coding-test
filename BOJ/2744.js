let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");

function solution(input) {
  let answer = "";
  for (let str of input) {
    const ascii = str.charCodeAt(0);
    if (ascii >= 97 && ascii <= 122) answer += str.toUpperCase();
    else answer += str.toLowerCase();
  }
  return answer;
}

console.log(solution(input));
