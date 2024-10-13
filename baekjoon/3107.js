let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    input = input.split(":");
    let index = 0;
    let answer = Array(8).fill("");
    let flag = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i].length === 4) {
            answer[index] = input[i];
            index++;
        } else if (input[i].length > 0) {
            answer[index] = "0".repeat(4 - input[i].length) + input[i];
            index++;
        } else {
            if (!flag) {
                for (let j = 0; j <= 8 - input.length; j++) {
                    answer[index] = "0000";
                    index++;
                }
                flag = true;
            } else {
                answer[index] = "0000";
                index++;
            }
        }
    }

    return answer.join(":");
}

console.log(solution(input));
