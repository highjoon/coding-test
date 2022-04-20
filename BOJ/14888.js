let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let nums = input[1].split(" ").map(Number);
let numberOfOperators = input[2].split(" ").map(Number);

let result = [];
let answer = [];

const operators = getOperators();

let ch = Array.from({ length: operators.length + 1 }, () => 0);
let tmp = Array.from({ length: operators.length + N }, () => 0);

for (let i = 0; i < nums.length; i++) {
  tmp[i * 2] = nums[i];
}

DFS(0);
answer.push(Math.max(...result));
answer.push(Math.min(...result));
console.log(answer.join("\n"));

function DFS(L) {
  if (L === N - 1) {
    result.push(evaluate(tmp.slice().reverse()));
    return;
  } else {
    for (let i = 0; i < operators.length; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        tmp[L * 2 + 1] = operators[i];
        DFS(L + 1);
        ch[i] = 0;
      }
    }
  }
}

function getOperators() {
  const candidates = ["+", "-", "*", "/"];
  const arr = [];

  for (let i = 0; i < candidates.length; i++) {
    let count = 0;
    while (count !== numberOfOperators[i]) {
      arr.push(candidates[i]);
      count++;
    }
  }

  return arr;
}

function evaluate(stack) {
  while (stack.length > 1) {
    let num1 = stack.pop();
    let operator = stack.pop();
    let num2 = stack.pop();

    switch (operator) {
      case "+":
        stack.push(num1 + num2);
        break;
      case "-":
        stack.push(num1 - num2);
        break;
      case "*":
        stack.push(num1 * num2);
        break;
      case "/":
        stack.push(parseInt(num1 / num2));
        break;
      default:
        break;
    }
  }
  return stack.pop();
}
