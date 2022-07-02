function solution(A, B) {
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    let answer = 0;
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4]));
console.log(solution([1, 2], [3, 4]));
