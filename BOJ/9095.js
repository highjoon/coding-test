let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let T = Number(input.shift());
    input = input.map(Number);
    const answer = [];
    let dp = Array(20).fill(0);

    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i < 11; i++) {
        dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
    }

    for (let n of input) {
        answer.push(dp[n]);
    }

    return answer.join("\n");
}

console.log(solution(input));
