function solution(s) {
    let answer = 1;
    const stack = [];
    for (let word of s) {
        if (stack[stack.length - 1] === word) stack.pop();
        else stack.push(word);
    }
    if (stack.length) answer = 0;
    return answer;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
