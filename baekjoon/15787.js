let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    input = input.slice(1).map((v) => v.split(" ").map(Number));
    let answer = [];
    let train = Array.from({ length: N }, () => Array(20).fill(0));

    for (let cur of input) {
        const [order, i, x] = cur;
        if (order === 1) train[i - 1][x - 1] = 1;
        else if (order === 2) train[i - 1][x - 1] = 0;
        else if (order === 3) {
            train[i - 1].pop();
            train[i - 1].unshift(0);
        } else {
            train[i - 1].shift();
            train[i - 1].push(0);
        }
    }

    for (let row = 0; row < N; row++) {
        answer.push(train[row].join(""));
    }
    answer = Array.from(new Set(answer)).length;
    return answer;
}

console.log(solution(input));
