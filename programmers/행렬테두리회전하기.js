function solution(rows, columns, queries) {
    let answer = [];
    let board = [];
    let num = 1;

    for (let i = 0; i < rows; i++) {
        let arr = [];
        for (let j = 0; j < columns; j++) {
            arr.push(num);
            num++;
        }
        board.push(arr);
    }

    for (let query of queries) {
        let coords = [];
        let temp = [];
        let [rowStart, colStart] = [query[0], query[1]];
        let [rowEnd, colEnd] = [query[2], query[3]];

        for (let i = colStart; i <= colEnd; i++) {
            coords.push([rowStart, i]);
        }
        for (let i = rowStart + 1; i <= rowEnd; i++) {
            coords.push([i, colEnd]);
        }
        for (let i = colEnd - 1; i >= colStart; i--) {
            coords.push([rowEnd, i]);
        }
        for (let i = rowEnd - 1; i > rowStart; i--) {
            coords.push([i, colStart]);
        }

        for (let coord of coords) {
            temp.push(board[coord[0] - 1][coord[1] - 1]);
        }

        temp.unshift(temp.pop());
        answer.push(Math.min(...temp));

        for (let i = 0; i < temp.length; i++) {
            board[coords[i][0] - 1][coords[i][1] - 1] = temp[i];
        }
    }
    return answer;
}

console.log(
    solution([
        [2, 2, 5, 4],
        [3, 3, 6, 6],
        [5, 1, 6, 3],
    ])
);
console.log(
    solution([
        [1, 1, 2, 2],
        [1, 2, 2, 3],
        [2, 1, 3, 2],
        [2, 2, 3, 3],
    ])
);
console.log(solution([[1, 1, 100, 97]]));
