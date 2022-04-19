let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [A, B] = input.shift().split(" ").map(Number);
let C = Number(input.shift());

B += C;

while (B >= 60) {
  B -= 60;
  A += 1;
}

A %= 24;
console.log(A, B);
