let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const T = Number(input[0]);
    input = input.slice(1).reverse();
    const answer = [];

    while (input.length) {
        const W = input.pop().split("");
        const K = Number(input.pop());
        const words = Array.from(new Set(W));
        const candidates = {};
        let lenList = [];

        for (let word of words) {
            let temp = [];
            for (let i = 0; i < W.length; i++) {
                if (W[i] === word) temp.push(i);
            }
            if (temp.length >= K) {
                candidates[word] = temp;
            }
        }

        if (!Object.keys(candidates).length) {
            answer.push(-1);
            continue;
        } else {
            for (let alpha in candidates) {
                const current = candidates[alpha];

                if (current.length === K) {
                    let firstIdx = current[0];
                    let lastIdx = current[K - 1];
                    lenList.push(lastIdx - firstIdx + 1);
                } else {
                    for (let i = 0; i < current.length - K + 1; i++) {
                        lenList.push(current[i + K - 1] - current[i] + 1);
                    }
                }
            }
        }
        answer.push(`${Math.min(...lenList)} ${Math.max(...lenList)}`);
    }
    return answer.join("\n");
}

console.log(solution(input));
