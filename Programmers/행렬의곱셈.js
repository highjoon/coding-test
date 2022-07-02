function solution(arr1, arr2) {
    let row = arr1.length;
    let column = arr2[0].length;
    let answer = Array.from({ length: row }, () => Array(column).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            for (let k = 0; k < arr2.length; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return answer;
}

console.log(
    solution(
        [
            [1, 4],
            [3, 2],
            [4, 1],
        ],
        [
            [3, 3],
            [3, 3],
        ]
    )
);
console.log(
    solution(
        [
            [2, 3, 2],
            [4, 2, 4],
            [3, 1, 4],
        ],
        [
            [5, 4, 3],
            [2, 4, 1],
            [3, 1, 1],
        ]
    )
);
