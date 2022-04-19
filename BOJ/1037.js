let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);

console.log(Math.min(...arr) * Math.max(...arr));
