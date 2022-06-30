let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const open = ["(", "["];
const close = [")", "]"];
const answer = [];

for (let str of input) {
    const stack = [];
    let isBalanced = true;

    for (let word of str) {
        if (open.includes(word)) {
            stack.push(word);
        } else if (close.includes(word)) {
            const lastWord = stack.pop();

            if (lastWord !== open[close.indexOf(word)]) {
                isBalanced = false;
                break;
            }
        }
    }

    if (!isBalanced) {
        answer.push("no");
    } else {
        if (stack.length === 0) {
            answer.push("yes");
        } else {
            answer.push("no");
        }
    }
}

console.log(answer.join("\n"));
