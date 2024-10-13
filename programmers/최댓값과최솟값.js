function solution(s) {
    let answer = "";
    s = s
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b);
    answer += `${s[0]} ${s[s.length - 1]}`;
    return answer;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));
