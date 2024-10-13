function solution(number, k) {
    let answer = "";
    const stack = [number[0]];

    for (let i = 1; i < number.length; i++) {
        let current = number[i];
        while (stack[stack.length - 1] < current) {
            if (k === 0 || stack.length === 0) break;
            stack.pop();
            k--;
        }
        stack.push(current);
    }
    answer = stack.slice(0, number.length - k).join("");
    return answer;
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("999", 2));
console.log(solution("99999", 4));
console.log(solution("9999999", 3));
