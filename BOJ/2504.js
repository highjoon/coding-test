// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim();
// let input = "(()[[]])([])";
// let input = "[][]((])";
let input = "]()";

const stack = [];

function solution(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      if (stack.length === 0) {
        return 0;
      }

      let temp = 0;

      while (stack.length) {
        let top = stack.pop();

        if (top === "(") {
          if (temp !== 0) {
            stack.push(temp * 2);
          } else {
            stack.push(2);
          }
          break;
        } else if (top === "[") {
          return 0;
        } else {
          if (temp === 0) {
            temp = Number(top);
          } else {
            temp += Number(top);
          }
        }
      }
    } else if (str[i] === "]") {
      if (stack.length === 0) {
        return 0;
      }

      let temp = 0;

      while (stack.length) {
        let top = stack.pop();

        if (top === "[") {
          if (temp !== 0) {
            stack.push(temp * 3);
          } else {
            stack.push(3);
          }
          break;
        } else if (top === "(") {
          return 0;
        } else {
          if (temp === 0) {
            temp = Number(top);
          } else {
            temp += Number(top);
          }
        }
      }
    }
  }

  let result = 0;

  for (let x of stack) {
    if (x === "(" || x === "[" || x === ")" || x === "]") {
      return 0;
    } else {
      result += Number(x);
    }
  }

  return result;
}

console.log(solution(input));
