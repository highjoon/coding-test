let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  input = input.slice(1).map((v) => v[0]);
  const answer = [];
  let sh = new Map();

  for (let str of input) {
    if (sh.has(str)) sh.set(str, sh.get(str) + 1);
    else sh.set(str, 1);
  }

  for (let [key, val] of sh) {
    if (val >= 5) answer.push(key);
  }
  answer.sort();
  if (!answer.length) answer.push("PREDAJA");
  return answer.join("");
}

console.log(solution(input));
