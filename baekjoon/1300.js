let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const [N, k] = input;

let left = 1;
let right = k;
let answer = 0;

function countOrder(mid) {
    let cnt = 0;

    for (let i = 1; i <= N; i++) {
        cnt += Math.min(parseInt(mid / i), N);
    }

    return cnt;
}

while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let count = countOrder(mid);

    if (count >= k) {
        answer = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

console.log(answer);
