let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [N, K] = input;
let memo = Array.from({ length: 20 }, () => 0);

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    else {
        if (memo[num]) return memo[num];
        else return (memo[num] = num * factorial(num - 1));
    }
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));
