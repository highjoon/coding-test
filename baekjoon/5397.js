let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let T = Number(input[0]);
    input = input.slice(1);
    const answer = [];

    for (let t = 0; t < T; t++) {
        const current = input[t];
        const left = [];
        const right = [];

        for (let str of current) {
            switch (str) {
                case "<":
                    if (left.length) right.push(left.pop());
                    break;
                case ">":
                    if (right.length) left.push(right.pop());
                    break;
                case "-":
                    left.pop();
                    break;
                default:
                    left.push(str);
                    break;
            }
        }

        answer.push(left.join("") + right.reverse().join(""));
    }

    return answer.join("\n");
}

console.log(solution(input));
