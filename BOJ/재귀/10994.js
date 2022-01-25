let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);
let size = N * 4 - 3;
let answer = Array.from({ length: size }, () => new Array(size).fill(" "));

function recursion(N, idx) {
  if (N === 1) {
    answer[idx][idx] = "*";
    return;
  }

  let l = N * 4 - 3;
  for (let i = idx; i < l + idx; i++) {
    answer[idx][i] = "*";
    answer[idx + l - 1][i] = "*";
    answer[i][idx] = "*";
    answer[i][idx + l - 1] = "*";
  }

  return recursion(N - 1, idx + 2);
}

recursion(N, 0);

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i].join(""));
}
