let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const poles = input[1].split(" ").map(Number);

let LIS = [poles[0]];
let answer = 0;

function BinarySearch(num) {
    let lt = 0;
    let rt = LIS.length - 1;

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if (LIS[mid] === num) return mid;
        else if (LIS[mid] > num) rt = mid - 1;
        else lt = mid + 1;
    }

    return lt;
}

for (let pole of poles) {
    if (LIS[LIS.length - 1] < pole) {
        LIS.push(pole);
    } else {
        LIS[BinarySearch(pole)] = pole;
    }
}

answer = N - LIS.length;
console.log(answer);
