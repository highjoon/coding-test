let fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
input.pop();

let dy = [];
const answer = [];

for (let i = 0; i <= 101; i++) {
  dy[i] = [];
  for (let j = 0; j <= 101; j++) {
    dy[i][j] = [];
    for (let k = 0; k <= 101; k++) {
      dy[i][j][k] = 0;
    }
  }
}

function w(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
  if (dy[a][b][c] !== 0) return dy[a][b][c];
  if (a < b && b < c) {
    dy[a][b][c] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    return dy[a][b][c];
  }

  dy[a][b][c] =
    w(a - 1, b, c) +
    w(a - 1, b - 1, c) +
    w(a - 1, b, c - 1) -
    w(a - 1, b - 1, c - 1);

  return dy[a][b][c];
}

for (let i = 0; i < input.length; i++) {
  let [a, b, c] = input[i];
  let result = w(a, b, c);
  answer.push(`w(${a}, ${b}, ${c}) = ${result}`);
}

console.log(answer.join("\n"));
