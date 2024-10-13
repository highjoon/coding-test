let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Math.max(...input.map((v) => v.length));
    let answer = "";

    for (let i = 0; i < N; i++) {
        for (let str of input) {
            if (str[i]) {
                answer += str[i];
            }
        }
    }

    return answer;
}

console.log(solution(input));
