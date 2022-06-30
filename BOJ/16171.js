const fs = require("fs");
const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");

function solution(input) {
    let answer = 0;
    let S = input[0].trim();
    let K = input[1].trim();
    S = S.split("")
        .filter((v) => isNaN(v))
        .join("");

    if (S.includes(K)) answer = 1;
    return answer;
}

console.log(solution(input));
