let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    input.pop();
    input = input.reverse();
    let T = Number(input.pop());
    const answer = [];

    while (T > 0) {
        let record = input.pop().split(" ");
        let voices = [];
        while (input.length && input[input.length - 1].split(" ")[1] === "goes") {
            voices.push(input.pop());
        }
        voices = voices.map((v) => v.split(" ").pop());
        let result = record.filter((v) => !voices.includes(v));
        T--;
        answer.push(result.join(" "));
        input.pop();
    }

    return answer.join("\n");
}

console.log(solution(input));
