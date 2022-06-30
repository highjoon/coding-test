let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let T = Number(input[0]);
    const answer = [];
    input = input.slice(1).map((v) => v.split(" "));

    for (let i = 0; i < T; i++) {
        let [a, b] = input[i];
        let sum = BigInt("0b" + a) + BigInt("0b" + b);
        answer.push(sum.toString(2));
    }

    return answer.join("\n");
}

console.log(solution(input));
