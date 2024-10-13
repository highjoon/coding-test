let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let [N, M, R] = input[0].split(" ").map(Number);
    let orders = input[input.length - 1].split(" ").map(Number);
    input = input.slice(1, input.length - 1).map((v) => v.split(" ").map(Number));
    let answer = [];

    function reversal(type) {
        switch (type) {
            case "upDown":
                for (let row = 0; row < N / 2; row++) {
                    for (let col = 0; col < M; col++) {
                        [input[row][col], input[N - 1 - row][col]] = [input[N - 1 - row][col], input[row][col]];
                    }
                }
                break;
            case "leftRight":
                for (let row = 0; row < N; row++) {
                    for (let col = 0; col < M / 2; col++) {
                        [input[row][col], input[row][M - 1 - col]] = [input[row][M - 1 - col], input[row][col]];
                    }
                }
                break;
        }
    }

    function rotate(type) {
        let newBoard = Array.from({ length: M }, () => Array(N).fill(0));

        switch (type) {
            case "rotateRight":
                for (let col = 0; col < M; col++) {
                    for (let row = 0; row < N; row++) {
                        newBoard[col][row] = input[N - row - 1][col];
                    }
                }
                break;
            case "rotateLeft":
                for (let col = 0; col < M; col++) {
                    for (let row = 0; row < N; row++) {
                        newBoard[col][row] = input[row][M - col - 1];
                    }
                }
                break;
        }

        [N, M] = [M, N];
        input = newBoard;
    }

    function quaterRotate(type) {
        switch (type) {
            case "toRight":
                for (let row = 0; row < N / 2; row++) {
                    for (let col = 0; col < M / 2; col++) {
                        const tempOne = input[row + N / 2][col];
                        const tempTwo = input[row][col + M / 2];
                        const tempThree = input[row + N / 2][col + M / 2];

                        input[row][col + M / 2] = input[row][col];
                        input[row + N / 2][col + M / 2] = tempTwo;
                        input[row + N / 2][col] = tempThree;
                        input[row][col] = tempOne;
                    }
                }
                break;
            case "toLeft":
                for (let row = 0; row < N / 2; row++) {
                    for (let col = 0; col < M / 2; col++) {
                        const tempTwo = input[row][col + M / 2];
                        const tempThree = input[row + N / 2][col + M / 2];
                        const tempFour = input[row + N / 2][col];

                        input[row + N / 2][col] = input[row][col];
                        input[row + N / 2][col + M / 2] = tempFour;
                        input[row][col + M / 2] = tempThree;
                        input[row][col] = tempTwo;
                    }
                }
                break;
        }
    }

    for (let order of orders) {
        switch (order) {
            case 1:
                reversal("upDown");
                break;
            case 2:
                reversal("leftRight");
                break;
            case 3:
                rotate("rotateRight");
                break;
            case 4:
                rotate("rotateLeft");
                break;
            case 5:
                quaterRotate("toRight");
                break;
            default:
                quaterRotate("toLeft");
                break;
        }
    }

    return input.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
