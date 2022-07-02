function solution(s) {
    if (s[0] === ")") return false;
    let answer = true;
    const stack = [];

    for (let x of s) {
        if (x === "(") stack.push(x);
        else stack.pop();
    }

    if (stack.length) return false;
    return answer;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
console.log(solution("))))"));
