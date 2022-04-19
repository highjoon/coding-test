let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const leftStack = input[0].split("");
const rightStack = [];
const M = Number(input[1]);

for (let i = 2; i < M + 2; i++) {
  const [order, newWord] = input[i].split(" ");

  if (order === "L" && leftStack.length) {
    rightStack.push(leftStack.pop());
  } else if (order === "D" && rightStack.length) {
    leftStack.push(rightStack.pop());
  } else if (order === "B") {
    leftStack.pop();
  } else if (order === "P") {
    leftStack.push(newWord);
  }
}

let answer = leftStack.join("");
answer += rightStack.reverse().join("");
console.log(answer);
