function solution(n, lost, reserve) {
    let answer = 0;
    let students = Array.from({ length: n }, () => 1);
    let len = lost.length > reserve.length ? lost.length : reserve.length;

    for (let i = 0; i < len; i++) {
        if (lost[i]) students[lost[i] - 1] -= 1;
        if (reserve[i]) students[reserve[i] - 1] += 1;
    }

    for (let i = 0; i < n; i++) {
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i - 1] -= 1;
                students[i] += 1;
            } else if (students[i + 1] === 2) {
                students[i + 1] -= 1;
                students[i] += 1;
            }
        }
    }

    answer = students.filter((v) => v >= 1).length;
    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
console.log(solution(5, [2, 4], [2, 4, 5]));
