function solution(x, n) {
    const answer = Array.from({ length: n }, () => x).map((v, i) => (v += i * x));
    return answer;
}

console.log(solution(2, 5));
console.log(solution(4, 3));
console.log(solution(-4, 2));
