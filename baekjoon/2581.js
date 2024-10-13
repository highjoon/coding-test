let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let M = Number(input[0]);
let N = Number(input[1]);
let answer = 0;
let primeSum = 0;
let primeArr = [];

function primeNum(num, arr) {
    if (num < 2) {
        return;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return;
        }
    }

    arr.push(num);
    primeSum += num;
}

for (let i = M; i <= N; i++) {
    primeNum(i, primeArr);
}

if (!primeArr.length) {
    console.log(-1);
} else {
    console.log(primeSum);
    console.log(Math.min(...primeArr));
}
