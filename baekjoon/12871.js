let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [s, t] = input;

    for (let i = 0; i < s.length * t.length; i++) {
        if (s[i % s.length] !== t[i % t.length]) {
            return 0;
        }
    }
    return 1;
}

console.log(solution(input));
