let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Number(input[0]);
    input = input.slice(1).map((v) => v.split(" ").map(Number));
    const stack = [];
    let answer = 0;

    for (let n = 0; n < N; n++) {
        const [x, y] = input[n];
        while (stack.length && stack[stack.length - 1] > y) {
            answer++;
            stack.pop();
        }
        if (stack.length && stack[stack.length - 1] === y) continue;
        stack.push(y);
    }

    while (stack.length) {
        if (stack[stack.length - 1] > 0) answer++;
        stack.pop();
    }

    return answer;
}

console.log(solution(input));
