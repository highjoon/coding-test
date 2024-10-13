let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let answer = 0;
    let set = new Set();

    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            set.add(input.substring(i, j + 1));
        }
    }

    answer = set.size;
    return answer;
}

console.log(solution(input));
