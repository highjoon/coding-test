let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("-");

let answer;
let stack = [];
let sum;

for (let form of input) {
    if (!isNaN(Number(form))) {
        stack.push(Number(form));
    } else {
        sum = form
            .split("+")
            .map(Number)
            .reduce((a, b) => a + b, 0);
        stack.push(sum);
    }
}

stack = stack.reverse();

while (stack.length !== 1) {
    let A = stack.pop();
    let B = stack.pop();
    stack.push(A - B);
}

answer = stack[0];

console.log(answer);
