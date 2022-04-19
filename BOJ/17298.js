let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length && Number(A[i]) > Number(A[stack[stack.length - 1]])) {
    A[stack.pop()] = A[i];
  }
  stack.push(i);
}

while (stack.length) {
  A[stack.pop()] = -1;
}

console.log(A.join(" ").trim());
