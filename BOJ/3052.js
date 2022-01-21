// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let input = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// let input = ["42", "84", "252", "420", "840", "126", "42", "84", "420", "126"];
let input = ["39", "40", "41", "42", "43", "44", "82", "83", "84", "85"];

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
