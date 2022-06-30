let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let K = Number(input[0]);
    input = input[1].split(" ").map(Number);
    const answer = [];

    for (let i = 0; i < K; i++) {
        answer.push([]);
    }

    function recursion(arr, L) {
        if (arr.length === 1) {
            answer[L].push(arr[0]);
            return;
        }

        const mid = Math.floor(arr.length / 2);
        const left = arr.slice(0, mid);
        const right = arr.slice(mid + 1);

        answer[L].push(arr[mid]);
        recursion(left, L + 1);
        recursion(right, L + 1);
        return;
    }

    recursion(input, 0);
    return answer.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
