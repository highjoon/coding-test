let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const stack = [];
let answer = 0;

for (let braket of input) {
  if (!stack.length && braket === ")") {
    answer++;
  } else if (stack[stack.length - 1] === "(" && braket === ")") {
    stack.pop();
  } else {
    stack.push(braket);
  }
}

answer += stack.length;

console.log(answer);
