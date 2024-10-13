function solution(distance, rocks, n) {
    let left = 0;
    let right = distance;
    let answer = Number.MIN_SAFE_INTEGER;
    rocks = rocks.sort((a, b) => a - b);

    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        let count = 0;
        let current = 0;

        for (let i = 0; i < rocks.length; i++) {
            if (rocks[i] - current <= mid) count++;
            else current = rocks[i];
        }

        if (count > n) right = mid - 1;
        else left = mid + 1;
    }

    answer = Math.max(answer, left, right);
    return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
