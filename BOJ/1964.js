let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");
let N = input[0];
let dot = 5;
let inc = 7;
for (let i = 1; i < N; i++) {
    dot += inc;
    inc += 3;
}
console.log(dot % 45678);
