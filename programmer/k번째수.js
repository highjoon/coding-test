function solution(array, commands) {
    const answer = [];
    let temp = 0;
    let start = 0;
    let end = 0;
    let target = 0;

    for (let command of commands) {
        [start, end, target] = command;
        temp = array.slice(start - 1, end).sort((a, b) => a - b)[target - 1];
        answer.push(temp);
    }

    return answer;
}

let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
];

console.log(solution(array, commands));
