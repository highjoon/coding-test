const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input.slice(1).map((v) => v.split(" ").map(Number));

let answer = [0, 0, 0];

function recursion(row, col, n) {
  let target = arr[row][col];
  let flag = true;

  for (let i = row; i < row + n; i++) {
    for (let j = col; j < col + n; j++) {
      if (arr[i][j] !== target) {
        flag = false;
        break;
      }
    }
    if (!flag) break;
  }

  if (flag) {
    answer[target + 1]++;
  } else {
    recursion(row, col, n / 3);
    recursion(row, col + n / 3, n / 3);
    recursion(row, col + (n / 3) * 2, n / 3);
    recursion(row + n / 3, col, n / 3);
    recursion(row + n / 3, col + n / 3, n / 3);
    recursion(row + n / 3, col + (n / 3) * 2, n / 3);
    recursion(row + (n / 3) * 2, col, n / 3);
    recursion(row + (n / 3) * 2, col + n / 3, n / 3);
    recursion(row + (n / 3) * 2, col + (n / 3) * 2, n / 3);
  }
}

recursion(0, 0, N);

console.log(answer.join("\n"));
