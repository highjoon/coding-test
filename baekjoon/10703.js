let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [R, S] = input[0].split(" ").map(Number);
    let meteor = input.slice(1);
    let answer = Array.from({ length: R }, () => Array(S).fill("."));

    let maxMeteor = Array(S).fill(Number.MIN_SAFE_INTEGER);
    let minGround = Array(S).fill(Number.MAX_SAFE_INTEGER);

    for (let row = 0; row < R; row++) {
        for (let col = 0; col < S; col++) {
            if (meteor[row][col] === "X") {
                maxMeteor[col] = Math.max(maxMeteor[col], row);
            }
            if (meteor[row][col] === "#") {
                minGround[col] = Math.min(minGround[col], row);
            }
        }
    }

    let move = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < minGround.length; i++) {
        move = Math.min(move, minGround[i] - maxMeteor[i]);
    }
    move--;

    for (let row = 0; row < R; row++) {
        for (let col = 0; col < S; col++) {
            if (meteor[row][col] === "X") answer[row + move][col] = "X";
            if (meteor[row][col] === "#") answer[row][col] = "#";
        }
    }

    return answer.map((v) => v.join("")).join("\n");
}

console.log(solution(input));
