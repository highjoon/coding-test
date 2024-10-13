let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const N = Number(input[0]);
    input = input.slice(1);
    const score = [];
    let teamOne = 0;
    let teamTwo = 0;
    let result = [0, 0];

    for (let info of input) {
        const [team, [M, S]] = info.split(" ").map((v) => v.split(":").map(Number));
        const time = M * 60 + S;
        team == 1 ? teamOne++ : teamTwo++;

        if (teamOne > teamTwo) score.push([1, time]);
        else if (teamOne < teamTwo) score.push([2, time]);
        else score.push([0, time]);
    }

    score.push([0, 2880]);

    for (let i = 1; i < score.length; i++) {
        if (score[i - 1][0] !== 0) {
            result[score[i - 1][0] - 1] += score[i][1] - score[i - 1][1];
        }
    }

    const answer = result
        .map((res) => {
            const newM = String(Math.floor(res / 60)).padStart(2, "0");
            const newS = String(res % 60).padStart(2, "0");
            return `${newM}:${newS}`;
        })
        .join("\n");

    return answer;
}

console.log(solution(input));
