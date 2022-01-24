let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const stack = [];

for (let x of input) {
  if (!stack.length) {
    stack.push(x);
  } else if (
    stack[stack.length - 2] === "d" &&
    stack[stack.length - 1] === "z" &&
    x === "="
  ) {
    stack.pop();
    stack.pop();
    stack.push("C");
  } else {
    if (
      (stack[stack.length - 1] === "c" && x === "=") ||
      (stack[stack.length - 1] === "c" && x === "-") ||
      (stack[stack.length - 1] === "d" && x === "-") ||
      (stack[stack.length - 1] === "l" && x === "j") ||
      (stack[stack.length - 1] === "n" && x === "j") ||
      (stack[stack.length - 1] === "s" && x === "=") ||
      (stack[stack.length - 1] === "z" && x === "=")
    ) {
      stack.pop();
      stack.push("C");
    } else {
      stack.push(x);
    }
  }
}

console.log(stack.length);
