let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const N = input.shift();
input = input.sort((a, b) => a - b);
let answer = [];

const A = input[0];
const B = input[1];

let gcd = B - A;

function getGCD(num1, num2) {
    return num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
}

for (let i = 2; i < N; i++) {
    gcd = getGCD(gcd, input[i] - input[i - 1]);
}
answer.push(gcd);

for (let i = 2; i * i <= gcd; i++) {
    if (!(gcd % i)) {
        if (i === gcd / i) answer.push(i);
        else {
            answer.push(i);
            answer.push(gcd / i);
        }
    }
}
answer.push(gcd);
answer = Array.from(new Set(answer)).sort((a, b) => a - b);
console.log(answer.join(" "));
