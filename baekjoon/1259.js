let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    input.pop();
    const answer = [];

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        let lt = 0;
        let rt = current.length - 1;
        let flag = true;

        while (lt <= rt) {
            if (current[lt] !== current[rt]) {
                flag = false;
                break;
            }
            lt++;
            rt--;
        }

        if (flag) answer.push("yes");
        else answer.push("no");
    }

    return answer.join("\n");
}

console.log(solution(input));
