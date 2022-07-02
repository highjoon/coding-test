function solution(sizes) {
    let answer = 0;
    let dp = Array.from({ length: sizes.length }, () => Array(2).fill(0));
    let maxWidth;
    let maxHeight;

    for (let i = 0; i < sizes.length; i++) {
        dp[i][0] = Math.max(sizes[i][0], sizes[i][1]);
        dp[i][1] = Math.min(sizes[i][0], sizes[i][1]);
    }

    maxWidth = Math.max(...Array.from({ length: sizes.length }, (v, i) => dp[i][0]));
    maxHeight = Math.max(...Array.from({ length: sizes.length }, (v, i) => dp[i][1]));

    answer = maxWidth * maxHeight;

    return answer;
}

console.log(
    solution([
        [60, 50],
        [30, 70],
        [60, 30],
        [80, 40],
    ])
);

console.log(
    solution([
        [10, 7],
        [12, 3],
        [8, 15],
        [14, 7],
        [5, 15],
    ])
);

console.log(
    solution([
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11],
    ])
);
