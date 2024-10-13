let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    input = input.split(/ |-/);
    const changed = ["c'", "j'", "n'", "m'", "t'", "s'", "l'", "d'", "qu'"];
    const vowels = ["a", "e", "i", "o", "u", "h"];
    const answer = [];

    for (let i = 0; i < input.length; i++) {
        let flag = false;
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === "'" && vowels.includes(input[i][j + 1])) {
                const temp = input[i].substring(0, j + 1);
                if (changed.includes(temp)) {
                    answer.push(temp);
                    answer.push(input[i].substring(j + 1));
                    flag = true;
                }
            }
        }
        if (!flag) answer.push(input[i]);
    }

    return answer.length;
}

console.log(solution(input));
