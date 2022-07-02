function solution(n) {
    const answer = n
        .toString()
        .split("")
        .reduce((a, b) => Number(a) + Number(b), 0);
    return answer;
}

console.log(solution(123));
console.log(solution(987));
