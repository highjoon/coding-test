let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [H, W] = input[0].split(" ").map(Number);
  input = input[1].split(" ").map(Number);
  let answer = 0;

  for (let i = 0; i < W; i++) {
    const current = input[i];
    const leftMax = Math.max(...input.slice(0, i));
    const rightMax = Math.max(...input.slice(i + 1));

    if (current >= leftMax || current >= rightMax) continue;
    if (rightMax > leftMax) {
      answer += leftMax - current;
    } else {
      answer += rightMax - current;
    }
  }

  return answer;
}

console.log(solution(input));
