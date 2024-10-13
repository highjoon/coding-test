let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((el) => [fixed, ...el]);
        results.push(...attached);
    });

    return results;
}

function solution(input) {
    input = input.split("");
    const brackets = [];
    const stack = [];
    const answer = new Set();

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "(") stack.push(i);
        else if (input[i] === ")") brackets.push([stack.pop(), i]);
    }

    for (let i = 0; i < brackets.length + 1; i++) {
        const combinations = getCombinations(brackets, i);

        for (let combination of combinations) {
            let temp = input.slice();
            for (let combi of combination) {
                temp[combi[0]] = "";
                temp[combi[1]] = "";
            }
            answer.add(temp.join(""));
        }
    }

    return Array.from(answer).sort().join("\n");
}

console.log(solution(input));
