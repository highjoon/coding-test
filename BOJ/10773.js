let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const K = Number(input.shift());
const arr = input.map((v) => Number(v));
const stack = [];

for (let i = 0; i < K; i++) {
    if (arr[i] === 0) {
        stack.pop();
    } else {
        stack.push(arr[i]);
    }
}

stack.length ? console.log(stack.reduce((a, b) => a + b)) : console.log(0);
