let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let A = Number(input[0].split("").reverse().join(""));
let B = Number(input[1].split("").reverse().join(""));

A > B ? console.log(A) : console.log(B);
