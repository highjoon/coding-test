let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    let nameCount = Array(26).fill(0);
    for (let x of input) {
        nameCount[x.charCodeAt(0) - 65] += 1;
    }

    let oddNum = 0;
    let oddChar = "";
    let char = "";

    for (let i = 0; i < 26; i++) {
        if (nameCount[i] % 2 === 1) {
            oddNum++;
            if (oddNum > 1) return "I'm Sorry Hansoo";
            oddChar += String.fromCharCode(i + 65);
        }
        char += String.fromCharCode(i + 65).repeat(Math.floor(nameCount[i] / 2));
    }

    return char + oddChar + char.split("").reverse().join("");
}

console.log(solution(input));
