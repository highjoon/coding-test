let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  const regEx = new RegExp("^(100+1+|01)+$");
  return input.match(regEx) ? "SUBMARINE" : "NOISE";
}

console.log(solution(input));
