let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  input = input.split("").reverse();
  const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  const set = Array.from(new Set(croatian.join("")));

  const stack = [];
  let answer = 0;

  while (input.length) {
    const cur = input.pop();
    if (set.includes(cur)) stack.push(cur);
    else answer++;
  }

  while (stack.length) {
    const cur = stack.pop();
    if (croatian.includes(stack[stack.length - 1] + cur)) {
      if (
        stack[stack.length - 1] + cur === "z=" &&
        stack[stack.length - 2] === "d"
      ) {
        stack.pop();
      }
      stack.pop();
      answer++;
    } else {
      answer++;
    }
  }

  return answer;
}

console.log(solution(input));
