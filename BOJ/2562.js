let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input.map((v) => Number(v));
const max = Math.max(...arr);
const index = Number(arr.indexOf(max)) + 1;

console.log(max);
console.log(index);
