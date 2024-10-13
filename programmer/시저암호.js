function solution(s, n) {
    let answer = "";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer += s[i];
        } else if (lowerCase.includes(s[i])) {
            let idx = lowerCase.indexOf(s[i]);
            let move = (idx + n) % 26;
            answer += lowerCase[move];
        } else {
            let idx = upperCase.indexOf(s[i]);
            let move = (idx + n) % 26;
            answer += upperCase[move];
        }
    }

    return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));
