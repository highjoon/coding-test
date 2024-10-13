let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("");

function solution(input) {
    let answer = Array.from({ length: 26 }, () => 0);
    for (let alpha of input) {
        answer[alpha.charCodeAt(0) - 97]++;
    }
    return answer.join(" ");
}

console.log(solution(input));
