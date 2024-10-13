function solution(arr, divisor) {
    const answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
    if (!answer.length) answer.push(-1);
    return answer;
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));
