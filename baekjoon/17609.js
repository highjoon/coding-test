let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const T = Number(input[0]);
    input = input.slice(1);
    const answer = [];

    function check(word, lt, rt) {
        while (lt < rt) {
            if (word[lt] === word[rt]) {
                lt++;
                rt--;
            } else {
                return false;
            }
        }
        return true;
    }

    for (let word of input) {
        let lt = 0;
        let rt = word.length - 1;
        let flag = true;

        while (lt < rt) {
            if (word[lt] === word[rt]) {
                lt++;
                rt--;
            } else {
                if (check(word, lt + 1, rt) || check(word, lt, rt - 1)) {
                    answer.push(1);
                } else {
                    answer.push(2);
                }
                flag = false;
                break;
            }
        }
        flag && answer.push(0);
    }

    return answer.join("\n");
}

console.log(solution(input));
