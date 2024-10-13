let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    input.pop();
    input = input.reverse();
    const answer = [];

    while (input.length) {
        let n = Number(input.pop());
        let words = [];

        while (n--) {
            words.push(input.pop());
        }

        words.sort((a, b) => {
            const lowerA = a.toLowerCase();
            const lowerB = b.toLowerCase();

            if (lowerA > lowerB) return 1;
            if (lowerA < lowerB) return -1;
            if (lowerA === lowerB) return 0;
        });

        answer.push(words[0]);
    }

    return answer.join("\n");
}

console.log(solution(input));
