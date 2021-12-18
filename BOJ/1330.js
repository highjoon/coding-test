var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
let answer = null;
a < b ? (answer = "<") : a === b ? (answer = "==") : (answer = ">");
console.log(answer);
