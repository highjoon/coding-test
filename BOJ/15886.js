let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let N = Number(input[0]);
    input = input[1];
    let answer = 0;

    for (let i = 0; i < N - 1; i++) {
        if (input[i] === "E" && input[i + 1] === "W") answer++;
    }

    return answer;
}

console.log(solution(input));
