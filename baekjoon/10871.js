let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0].split(" ")[0];
const X = input[0].split(" ")[1];
const arr = input[1].split(" ").map((v) => Number(v));
let result = "";

for (let i = 0; i < N; i++) {
    if (arr[i] < X) {
        result += `${arr[i]} `;
    }
}

console.log(result);
