let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [N, Q] = input[0].split(" ").map(Number);
    let cows = input[1].split(" ").map(Number);
    let tricks = input[2].split(" ").map(Number);
    const answer = [];
    let dp = Array(N).fill(0);
    let sum = 0;

    for (let i = 0; i < N; i++) {
        dp[i] = cows[i % N] * cows[(i + 1) % N] * cows[(i + 2) % N] * cows[(i + 3) % N];
        sum += dp[i];
    }

    for (let i = 0; i < Q; i++) {
        for (let j = 0; j < 4; j++) {
            let idx = tricks[i] - 1 - j;
            if (idx < 0) idx += N;
            dp[idx] *= -1;
            sum += dp[idx] * 2;
        }
        answer.push(sum);
    }

    return answer.join("\n");
}

console.log(solution(input));
