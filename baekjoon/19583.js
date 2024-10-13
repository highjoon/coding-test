let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [S, E, Q] = input[0].split(" ");
    input = input.slice(1).map((v) => v.split(" "));

    let start = Number(S.split(":").reduce((a, b) => a + b, ""));
    let end = Number(E.split(":").reduce((a, b) => a + b, ""));
    let quit = Number(Q.split(":").reduce((a, b) => a + b, ""));
    let answer = 0;
    let check = {};

    for (let x of input) {
        check[x[1]] = { start: false, end: false };
    }

    for (let i = 0; i < input.length; i++) {
        let [time, nickname] = input[i];
        time = Number(time.split(":").reduce((a, b) => a + b, ""));
        if (time <= start) check[nickname].start = true;
        else if (time >= end && time <= quit) check[nickname].end = true;
    }

    for (let student in check) {
        if (check[student].start === true && check[student].end === true) answer++;
    }

    return answer;
}

console.log(solution(input));
