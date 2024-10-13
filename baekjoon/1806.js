let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, S] = input[0].split(" ").map(Number);
    const nums = input[1].split(" ").map(Number);

    let answer = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = 0;
    let sum = nums[left];

    while (left < N) {
        if (sum >= S) {
            answer = Math.min(answer, right - left + 1);
            sum -= nums[left++];
        } else {
            right++;
            if (right === N) break;
            sum += nums[right];
        }
    }

    if (answer === Number.MAX_SAFE_INTEGER) return 0;
    return answer;
}

console.log(solution(input));
