let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let answer;
let sum = 0;

for (let i = 0; i < K; i++) {
    sum += arr[i];
}

answer = sum;

for (let i = K; i < N; i++) {
    sum += arr[i] - arr[i - K];
    answer = Math.max(answer, sum);
}

console.log(answer);
