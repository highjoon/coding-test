let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let N = Number(input[0]);
let num = input[1].split("");
let sum = 0;

for (let i = 0; i < N; i++) {
    sum += Number(num[i]);
}

console.log(sum);
