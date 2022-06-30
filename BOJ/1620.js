let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const pokemons = input.slice(1, N + 1);
    const questions = input.slice(N + 1);
    const answer = [];

    let sh = new Map();
    for (let i = 0; i < pokemons.length; i++) {
        if (sh.has(pokemons[i])) sh.set(pokemons[i], [...sh.get(pokemons[i]), i + 1]);
        else sh.set(pokemons[i], [i + 1]);
    }

    for (let question of questions) {
        if (question[0] >= "0" && question[0] <= "9") {
            answer.push(pokemons[Number(question) - 1]);
        } else {
            answer.push(sh.get(question)[0]);
        }
    }

    return answer.join("\n");
}

console.log(solution(input));
