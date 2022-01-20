let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = Number(input[0]);
const B = Number(input[1]);
const Barr = input[1].split("").map((v) => Number(v));
const result = [];

for (let x of Barr) {
  result.push(x * A);
}

result.reverse();
result.push(A * B);

console.log(result.join("\n"));
