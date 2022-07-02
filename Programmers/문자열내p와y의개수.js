function solution(s) {
    let answer = true;
    let numP = 0;
    let numY = 0;
    s = s.toLowerCase();
    for (let str of s) {
        if (str === "p") numP++;
        if (str === "y") numY++;
    }
    if (numP !== numY) answer = false;
    if (numP === 0 && numY === 0) answer = true;
    return answer;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));
