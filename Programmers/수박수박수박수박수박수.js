function solution(n) {
    let answer = "";
    let word = "수박";

    for (let i = 0; i < n; i++) {
        answer += word[i % 2];
    }

    return answer;
}

console.log(solution(3));
console.log(solution(4));
