let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Number(input[0]);
    input = input.slice(1);

    if (N === 1) return input.join("");
    const len = input[0].length;
    let answer = "";

    for (let i = 0; i < len; i++) {
        let temp = input[0][i];
        let flag = true;

        for (let j = 1; j < N; j++) {
            if (input[j][i] !== temp) {
                flag = false;
                break;
            }
        }

        if (flag) answer += temp;
        else answer += "?";
    }

    return answer;
}

console.log(solution(input));
