let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [M, N] = input[0].split(" ").map(Number);
  input = input.slice(1);
  let check = {
    rightDown: Array.from({ length: M }, () => Array(N).fill(0)),
    leftDown: Array.from({ length: M }, () => Array(N).fill(0)),
    upRight: Array.from({ length: M }, () => Array(N).fill(0)),
    downRight: Array.from({ length: M }, () => Array(N).fill(0)),
  };
  let answer = 0;

  function checkWall(row, col) {
    if (input[row + 1][col] === ".") {
      if (
        input[row][col - 1] === "X" &&
        input[row + 1][col - 1] === "X" &&
        check.leftDown[row][col] === 0
      ) {
        check.leftDown[row][col] = 1;
        check.leftDown[row + 1][col] = 1;
        answer++;
      }

      if (
        input[row][col + 1] === "X" &&
        input[row + 1][col + 1] === "X" &&
        check.rightDown[row][col] === 0
      ) {
        check.rightDown[row][col] = 1;
        check.rightDown[row + 1][col] = 1;
        answer++;
      }
    }

    if (input[row][col + 1] === ".") {
      if (
        input[row - 1][col] === "X" &&
        input[row - 1][col + 1] === "X" &&
        check.upRight[row][col] === 0
      ) {
        check.upRight[row][col] = 1;
        check.upRight[row][col + 1] = 1;
        answer++;
      }

      if (
        input[row + 1][col] === "X" &&
        input[row + 1][col + 1] === "X" &&
        check.downRight[row][col] === 0
      ) {
        check.downRight[row][col] = 1;
        check.downRight[row][col + 1] = 1;
        answer++;
      }
    }
  }

  for (let row = 1; row < M - 1; row++) {
    for (let col = 1; col < N - 1; col++) {
      if (input[row][col] === ".") {
        checkWall(row, col);
      }
    }
  }

  return answer;
}

console.log(solution(input));
