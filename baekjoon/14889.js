let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input.shift());
input = input.map((v) => v.split(" ").map(Number));

let players = Array.from({ length: N }, (v, i) => i);
let ch = Array.from({ length: N }, () => 0);

let answer = Number.MAX_SAFE_INTEGER;
let halfN = N / 2;

DFS(0, []);
console.log(answer);

function DFS(L, teamStart) {
    if (teamStart.length === halfN) {
        let teamLink = players.filter((v) => !teamStart.includes(v));
        getMinimumStat(teamStart, teamLink);
        return;
    } else {
        for (let i = L; i < N; i++) {
            if (ch[i] === 0) {
                ch[i] = 1;
                DFS(L + 1, [...teamStart, players[i]]);
                ch[i] = 0;
            }
        }
    }
}

function getMinimumStat(teamStart, teamLink) {
    let stats1 = 0;
    let stats2 = 0;

    for (let i = 0; i < halfN; i++) {
        for (let j = 0; j < halfN; j++) {
            stats1 += input[teamStart[i]][teamStart[j]];
            stats2 += input[teamLink[i]][teamLink[j]];
        }
    }

    return (answer = Math.min(answer, Math.abs(stats1 - stats2)));
}
