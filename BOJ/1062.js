let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, K] = input[0].split(" ").map(Number);
input = input.slice(1);

function solution(N, K, input) {
    let answer = Number.MIN_SAFE_INTEGER;
    const words = input.map((x) => x.split("").splice(4, x.length - 8));
    const defaultAlpha = ["a", "n", "t", "i", "c"];
    const alphaList = [
        "b",
        "d",
        "e",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "o",
        "p",
        "q",
        "r",
        "s",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];

    function DFS(L, start) {
        if (L === 0) {
            answer = Math.max(answer, check());
            return;
        }
        for (let i = start; i < alphaList.length; i++) {
            defaultAlpha.push(alphaList[i]);
            DFS(L - 1, i + 1);
            defaultAlpha.pop();
        }
    }

    function check() {
        let result = 0;
        for (let word of words) {
            let flag = true;
            for (let i = 0; i < word.length; i++) {
                if (!defaultAlpha.includes(word[i])) {
                    flag = false;
                    break;
                }
            }
            if (flag) result += 1;
        }
        return result;
    }

    if (K < 5) return 0;
    DFS(K - 5, 0);
    return answer;
}

console.log(solution(N, K, input));
