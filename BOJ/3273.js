let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const nums = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
const x = Number(input.shift());

let left = 0;
let right = n - 1;
let answer = 0;

while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum === x) {
        answer++;
        left++;
    } else if (sum < x) {
        left++;
    } else {
        right--;
    }
}

console.log(answer);
