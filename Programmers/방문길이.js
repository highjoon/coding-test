function solution(dirs) {
    let answer = 0;
    let pos = [0, 0];
    let move = { U: [0, -1], D: [0, 1], R: [1, 0], L: [-1, 0] };
    let check = new Set();

    for (let i = 0; i < dirs.length; i++) {
        let order = move[dirs[i]];

        let nextPos = [pos[0] + order[0], pos[1] + order[1]];
        if (nextPos[0] < -5 || nextPos[0] > 5 || nextPos[1] < -5 || nextPos[1] > 5) continue;

        if (!check.has(`${pos[0]}${pos[1]}${nextPos[0]}${nextPos[1]}`)) {
            check.add(`${pos[0]}${pos[1]}${nextPos[0]}${nextPos[1]}`);
            check.add(`${nextPos[0]}${nextPos[1]}${pos[0]}${pos[1]}`);
            answer++;
        }

        pos = nextPos;
    }
    return answer;
}

console.log(solution("ULURRDLLU"));
console.log(solution("LULLLLLLU"));
