let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let n = +input[0];
    let alphabets = [];
    const answer = [];
    for (let i = 1; i <= n; i++) {
        alphabets = Array.from({ length: 26 }, () => 0);
        for (let x of input[i]) {
            alphabets[x.charCodeAt(0) - 97]++;
        }
        let max = Math.max(...alphabets);
        let result = [];
        for (let i = 0; i < 26; i++) {
            if (alphabets[i] === max) {
                result.push(i);
            }
        }
        answer.push(result.length > 1 ? "?" : String.fromCharCode(result[0] + 97));
    }
    return answer.join("\n");
}

console.log(solution(input));
