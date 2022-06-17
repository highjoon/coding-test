let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  let T = Number(input[0]);
  input = input
    .slice(1)
    .map((v) => v.split(" ").map(Number))
    .reverse();
  const answer = [];

  function rotateClockWise(X, n, d) {
    let result = Array.from({ length: n }, () => Array(n).fill(0));
    const midIdx = Math.floor(n / 2);

    while (d > 0) {
      for (let i = 0; i < n; i++) {
        result[i][midIdx] = X[i][i];
        result[i][n - 1 - i] = X[i][midIdx];
        result[midIdx][n - 1 - i] = X[i][n - 1 - i];
        result[i][i] = X[midIdx][i];
      }
      d -= 45;
    }
    return result;
  }

  function rotateCounterClockWise(X, n, d) {
    let result = Array.from({ length: n }, () => Array(n).fill(0));
    const midIdx = Math.floor(n / 2);
    while (d < 0) {
      for (let i = 0; i < n; i++) {
        result[i][i] = X[i][midIdx];
        result[midIdx][i] = X[i][i];
        result[n - 1 - i][i] = X[midIdx][i];
        result[n - 1 - i][midIdx] = X[n - 1 - i][i];
      }
      d += 45;
    }
    return result;
  }

  while (T--) {
    let [n, d] = input.pop();
    let cnt = n;
    let X = [];
    while (cnt--) X.push(input.pop());
    if (d === 360 || d === -360) {
      answer.push(X.map((v) => v.join(" ")).join("\n"));
      continue;
    }
    let result;
    if (d > 0) result = rotateClockWise(X, n, d);
    if (d < 0) result = rotateCounterClockWise(X, n, d);

    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (result[row][col] === 0) result[row][col] = X[row][col];
      }
    }

    answer.push(result.map((v) => v.join(" ")).join("\n"));
  }

  return answer.join("\n");
}

console.log(solution(input));
