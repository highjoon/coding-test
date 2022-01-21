let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = input.map((v) => {
  return Number(v) % 42;
});
arr.sort((a, b) => a - b);
let cnt = 1;
let temp = arr[0];

for (let x of arr) {
  if (temp != x) {
    cnt++;
    temp = x;
  }
}

console.log(cnt);
