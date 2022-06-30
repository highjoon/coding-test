let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("");

function solution(input) {
    let answer = "";

    for (let i = 0; i < input.length; i++) {
        const curAscii = input[i].charCodeAt(0);

        if (curAscii === 32) {
            answer += " ";
        } else if (curAscii >= 65 && curAscii <= 90) {
            nextAscii = curAscii + 13;
            if (nextAscii > 90) nextAscii -= 26;
            answer += String.fromCharCode(nextAscii);
        } else if (curAscii >= 97 && curAscii <= 122) {
            nextAscii = curAscii + 13;
            if (nextAscii > 122) nextAscii -= 26;
            answer += String.fromCharCode(nextAscii);
        } else {
            answer += input[i];
        }
    }

    return answer;
}

console.log(solution(input));
