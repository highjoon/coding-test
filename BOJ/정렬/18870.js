let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const arr = input[0].split(" ").map((v) => Number(v));
let set = Array.from(new Set([...arr])).sort((a, b) => a - b);
let obj = {};
let answer = [];

set.forEach((item, idx) => {
  obj[item] = idx;
});

for (let i = 0; i < arr.length; i++) {
  answer.push(obj[arr[i]]);
}

console.log(answer.join(" "));
