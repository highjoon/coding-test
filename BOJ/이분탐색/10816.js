let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let Nnums = input[1]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const M = Number(input[2]);
let Mnums = input[3].split(" ").map((v) => Number(v));
const answer = [];

let sh = new Map();
for (let num of Nnums) {
  if (!sh.has(num)) {
    sh.set(num, 1);
  } else {
    sh.set(num, sh.get(num) + 1);
  }
}

for (let i = 0; i < M; i++) {
  let target = Mnums[i];
  let left = 0;
  let right = N;
  let count = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (target === Nnums[mid]) {
      count = sh.get(target);
      break;
    } else if (target < Nnums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  answer.push(count);
}

console.log(answer.join(" "));
