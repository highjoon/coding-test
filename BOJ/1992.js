let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  const nums = input.slice(1).map((v) => v.split("").map(Number));
  const answer = [];

  function recursion(n, row, col) {
    let result = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        result += nums[i + row][j + col];
      }
    }

    if (result === 0) answer.push(0);
    else if (result === n * n) answer.push(1);
    else {
      n /= 2;
      answer.push("(");
      recursion(n, row, col);
      recursion(n, row, col + n);
      recursion(n, row + n, col);
      recursion(n, row + n, col + n);
      answer.push(")");
    }
  }

  recursion(N, 0, 0);
  return answer.join("");
}

console.log(solution(input));
