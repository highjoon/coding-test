function solution(n) {
    let answer = 0;
    let s = Math.sqrt(n);
    if (Number.isInteger(s)) {
        answer = Math.pow(s + 1, 2);
    } else {
        return -1;
    }
    return answer;
}

console.log(solution(121));
console.log(solution(3));
