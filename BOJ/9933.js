let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Number(input[0]);
    input = input.slice(1);
    let answer = "";

    for (let word of input) {
        const reversed = word.split("").reverse().join("");
        const result = input.find((v) => v === reversed);
        if (result) {
            answer = `${result.length} ${result[Math.floor(result.length / 2)]}`;
            break;
        }
    }

    return answer;
}

console.log(solution(input));
