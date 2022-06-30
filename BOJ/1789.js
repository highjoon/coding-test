let fs = require("fs");
let input = Number(fs.readFileSync("./dev/stdin").toString().trim());

function solution(input) {
    let answer = 0;
    let sum = 0;

    for (let i = 1; i <= input; i++) {
        if (sum >= input) break;
        sum += i;
        answer++;
    }

    return answer - 1;
}

console.log(solution(input));
