function solution(s) {
    let answer = s.length;

    for (let i = 1; i <= parseInt(s.length / 2); i++) {
        let result = "";
        let count = 1;
        let front = s.substr(0, i);
        for (let j = i; j <= s.length; j += i) {
            let back = s.substr(j, i);

            if (front === back) {
                count++;
            } else {
                if (count === 1) result += front;
                else result += count + front;

                count = 1;
                front = back;
            }
        }
        if (count === 1) result += front;
        else result += count + front;
        answer = Math.min(answer, result.length);
    }

    return answer;
}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));
