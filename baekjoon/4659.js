let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    input.pop();
    const answer = [];
    const acceptable = (word) => answer.push(`<${word}> is acceptable.`);
    const unacceptable = (word) => answer.push(`<${word}> is not acceptable.`);
    const vowls = ["a", "e", "i", "o", "u"];

    for (let word of input) {
        let vowlCheck = false;
        let isDuplicated = false;
        let before = "";
        let vowlCount = 0;
        let consCount = 0;

        for (let str of word) {
            if (before === str) {
                if ((before === "e" && str === "e") || (before === "o" && str === "o")) {
                    isDuplicated = false;
                } else {
                    isDuplicated = true;
                }
            }
            if ((vowlCount === 2 && vowls.includes(str)) || (consCount === 2 && !vowls.includes(str))) {
                isDuplicated = true;
                break;
            }
            if (vowls.includes(str)) {
                vowlCheck = true;
                vowlCount++;
                consCount = 0;
                before = str;
            } else if (!vowls.includes(str)) {
                consCount++;
                vowlCount = 0;
                before = str;
            }
        }

        if (!vowlCheck || isDuplicated) unacceptable(word);
        else acceptable(word);
    }
    return answer.join("\n");
}

console.log(solution(input));
