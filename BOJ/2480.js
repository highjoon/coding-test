const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [a, b, c] = [input[0], input[1], input[2]];

const answer = (a, b, c) => {
    if (a === b && a === c && b === c) {
        return 10000 + a * 1000;
    }

    if (a !== b || a !== c || b !== c) {
        if (a === b || a === c) {
            return 1000 + a * 100;
        }
        if (b === c) {
            return 1000 + b * 100;
        }
    }
    if (a !== b && a !== c && b !== c) {
        const sort = [a, b, c].sort();
        return sort.pop() * 100;
    }
};

console.log(answer(a, b, c));
