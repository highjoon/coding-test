let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
input = input[0].split(" ").map(Number);

function getGCD(num1, num2) {
    return num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
}

for (let i = 1; i < N; i++) {
    const gcd = getGCD(input[0], input[i]);
    console.log(input[0] / gcd + "/" + input[i] / gcd);
}
