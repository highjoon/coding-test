function solution(s) {
    let answer = "";
    let n = s.length;
    if (n % 2 !== 0) answer += s[parseInt(n / 2)];
    else answer += s[n / 2 - 1] + s[n / 2];
    return answer;
}

console.log(solution("abcde"));
console.log(solution("qwer"));
