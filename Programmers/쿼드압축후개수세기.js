function solution(arr) {
    let answer = [0, 0];

    function recursion(n, x, y) {
        let total = 0;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                total += arr[y + i][x + j];
            }
        }

        if (total === 0) answer[0] = answer[0] += 1;
        else if (total === n * n) answer[1] = answer[1] += 1;
        else {
            n /= 2;
            recursion(n, x, y);
            recursion(n, x + n, y);
            recursion(n, x, y + n);
            recursion(n, x + n, y + n);
        }
    }

    recursion(arr.length, 0, 0);
    return answer;
}

console.log(
    solution([
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1],
    ])
);
console.log(
    solution([
        [1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 1, 1],
        [0, 1, 0, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 1],
        [0, 0, 0, 0, 1, 1, 1, 1],
    ])
);
