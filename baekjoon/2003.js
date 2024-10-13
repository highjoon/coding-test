let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input
    .shift()
    .split(" ")
    .map((v) => Number(v));
const nums = input
    .shift()
    .split(" ")
    .map((v) => Number(v));

let answer = 0;
let left = 0;
let right = 0;
let sum = nums[left];

while (left < N && right < N) {
    if (sum === M) {
        answer++;
        sum += nums[++right];
    } else if (sum < M) {
        sum += nums[++right];
    } else if (sum > M) {
        sum -= nums[left++];
    }
}

console.log(answer);
