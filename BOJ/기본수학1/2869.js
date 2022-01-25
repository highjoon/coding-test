let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let A = Number(input[0]);
let B = Number(input[1]);
let V = Number(input[2]);

console.log(Math.ceil((V - B) / (A - B)));
