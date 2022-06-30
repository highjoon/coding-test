let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const answer = [];
    for (let words of input) {
        let [s, t] = words.split(" ").map((v) => v.split(""));
        s = s.reverse();
        for (let i = 0; i < t.length; i++) {
            if (t[i] === s[s.length - 1]) {
                s.pop();
            }
        }
        answer.push(s.length ? "No" : "Yes");
    }
    return answer.join("\n");
}

console.log(solution(input));
