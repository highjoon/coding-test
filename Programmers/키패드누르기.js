function calculateDistance(leftPos, rightPos, target, hand) {
    let targetPos = 0;
    let leftDistance = 0;
    let rightDistance = 0;

    switch (target) {
        case 2:
            targetPos = [0, 1];
            break;
        case 5:
            targetPos = [1, 1];
            break;
        case 8:
            targetPos = [2, 1];
            break;
        default:
            targetPos = [3, 1];
            break;
    }

    leftDistance = Math.abs(leftPos[0] - targetPos[0]) + Math.abs(leftPos[1] - targetPos[1]);
    rightDistance = Math.abs(rightPos[0] - targetPos[0]) + Math.abs(rightPos[1] - targetPos[1]);

    if (leftDistance > rightDistance) {
        return ["R", targetPos];
    } else if (leftDistance < rightDistance) {
        return ["L", targetPos];
    } else {
        if (hand === "left") {
            return ["L", targetPos];
        } else {
            return ["R", targetPos];
        }
    }
}

function solution(numbers, hand) {
    let answer = "";
    let target = 0;
    const keypad = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ["*", 0, "#"],
    ];
    let leftPos = [3, 0];
    let rightPos = [3, 2];
    let midLine = "";
    let midLinePos = [];

    for (let i = 0; i < numbers.length; i++) {
        target = numbers[i];
        if (target === 1 || target === 4 || target === 7) {
            answer += "L";
            switch (target) {
                case 1:
                    leftPos = [0, 0];
                    break;
                case 4:
                    leftPos = [1, 0];
                    break;
                case 7:
                    leftPos = [2, 0];
                    break;
            }
        } else if (target === 3 || target === 6 || target === 9) {
            answer += "R";
            switch (target) {
                case 3:
                    rightPos = [0, 2];
                    break;
                case 6:
                    rightPos = [1, 2];
                    break;
                case 9:
                    rightPos = [2, 2];
                    break;
            }
        } else {
            [midLine, midLinePos] = calculateDistance(leftPos, rightPos, target, hand);
            answer += midLine;
            midLine === "L" ? (leftPos = midLinePos) : (rightPos = midLinePos);
        }
    }

    return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
