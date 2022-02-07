let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let answer = 0;

for (let word of input) {
  const stack = [];

  for (let item of word) {
    if (stack[stack.length - 1] === item) {
      stack.pop();
    } else {
      stack.push(item);
    }
  }

  if (!stack.length) {
    answer++;
  }
}

console.log(answer);
