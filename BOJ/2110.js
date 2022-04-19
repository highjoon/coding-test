let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, C] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
let coords = input.map((v) => Number(v)).sort((a, b) => a - b);

function count(coords, dist) {
  let endPosition = coords[0];
  let cnt = 1;

  for (let i = 0; i < coords.length; i++) {
    if (coords[i] - endPosition >= dist) {
      cnt++;
      endPosition = coords[i];
    }
  }

  return cnt;
}

let left = 1;
let right = coords[coords.length - 1];
let answer = 0;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  if (count(coords, mid) >= C) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
