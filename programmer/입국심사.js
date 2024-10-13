function solution(n, times) {
    times = times.sort((a, b) => a - b);
    let start = 1;
    let end = times[times.length - 1] * n;
    let answer = end;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        let result = 0;
        times.forEach((x) => {
            result += parseInt(mid / x);
            if (result >= n) {
                answer = Math.min(mid, answer);
                return;
            }
        });
        if (result >= n) end = mid - 1;
        else start = mid + 1;
    }
    return answer;
}

console.log(solution(6, [7, 10]));
