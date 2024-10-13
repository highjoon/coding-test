let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
    let [plain, keys] = input;
    let answer = "";

    while (plain.length > keys.length) {
        keys += input[1];
    }

    for (let i = 0; i < plain.length; i++) {
        let curPlain = plain[i];
        let curkey = keys[i];

        if (curPlain === " ") {
            answer += " ";
        } else {
            let crypIdx = curPlain.charCodeAt() - curkey.charCodeAt();

            if (crypIdx <= 0) answer += String.fromCharCode(122 + crypIdx);
            else answer += String.fromCharCode(97 + crypIdx - 1);
        }
    }

    return answer;
}

console.log(solution(input));
