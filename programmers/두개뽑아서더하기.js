function solution(numbers) {
    const set = new Set();
    const n = numbers.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue;
            set.add(numbers[i] + numbers[j]);
        }
    }
    let answer = Array.from(set).sort((a, b) => a - b);
    return answer;
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
