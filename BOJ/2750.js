let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let arr = input.map((v) => Number(v)).sort((a, b) => a - b);

console.log(arr.join("\n"));
