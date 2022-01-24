let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let temp = C - B;

temp <= 0 ? console.log(-1) : console.log(Math.floor(A / temp) + 1);
