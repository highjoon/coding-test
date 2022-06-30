let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());
let answer = [];

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    else return num * factorial(num - 1);
}

for (let i = 0; i < T; i++) {
    let [N, M] = input[i].split(" ").map(Number);
    answer.push(Math.round(factorial(M) / (factorial(N) * factorial(M - N))));
}

console.log(answer.join("\n"));
