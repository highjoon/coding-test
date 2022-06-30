let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const stack = [];
    let answer = 0;

    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (current === "(" || current === "[") {
            stack.push(current);
        } else if (current === ")") {
            if (stack.length === 0) return 0;

            let temp = 0;

            while (stack.length) {
                let top = stack.pop();

                if (top === "[") return 0;

                if (top === "(") {
                    if (temp !== 0) stack.push(temp * 2);
                    else stack.push(2);
                    break;
                } else {
                    if (temp === 0) temp = Number(top);
                    else temp += Number(top);
                }
            }
        } else if (current === "]") {
            if (stack.length === 0) return 0;

            let temp = 0;

            while (stack.length) {
                let top = stack.pop();

                if (top === "(") return 0;

                if (top === "[") {
                    if (temp !== 0) stack.push(temp * 3);
                    else stack.push(3);
                    break;
                } else {
                    if (temp === 0) temp = Number(top);
                    else temp += Number(top);
                }
            }
        }
    }

    for (let x of stack) {
        if (typeof x === "string") return 0;
        else answer += x;
    }

    return answer;
}

console.log(solution(input));
