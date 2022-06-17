let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  input = input.slice(1).map((v) => v.split(" ").map(Number));
  let cows = new Map();
  let answer = 0;

  for (let cow of input) {
    const [num, pos] = cow;
    if (!cows.has(num)) cows.set(num, pos);
    else {
      if (cows.get(num) === pos) continue;
      else {
        cows.set(num, pos);
        answer++;
      }
    }
  }
  return answer;
}

console.log(solution(input));
