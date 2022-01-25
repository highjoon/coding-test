var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a - b);
