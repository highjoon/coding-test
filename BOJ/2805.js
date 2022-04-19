let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
const trees = input
  .shift()
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);

let min = 1;
let max = Math.max(...trees);

while (min <= max) {
  let mid = parseInt((min + max) / 2);
  let cutted = trees
    .map((tree) => {
      let temp = tree - mid;
      if (temp >= 0) {
        return temp;
      } else {
        return 0;
      }
    })
    .reduce((a, b) => a + b, 0);

  if (cutted >= M) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);
