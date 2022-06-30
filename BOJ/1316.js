let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Number(input[0]);
    input = input.slice(1);
    let answer = 0;

    for (let word of input) {
        const stack = [];
        let isGroupWord = true;
        for (let str of word) {
            if (!stack.includes(str)) {
                stack.push(str);
            } else if (stack.includes(str) && stack[stack.length - 1] !== str) {
                isGroupWord = false;
                break;
            } else if (stack[stack.length - 1] === str) {
                continue;
            }
        }
        if (isGroupWord) answer++;
    }

    return answer;
}

console.log(solution(input));
