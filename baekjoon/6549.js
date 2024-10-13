const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.length;
input.splice(N - 1, 1);

input.forEach((testCase) => {
    const [n, ...h] = testCase.split(" ").map(Number);
    const result = getArea(h, 0, n - 1);
    console.log(result);
});

function getArea(arr, left, right) {
    if (left === right) return arr[left];

    const mid = Math.floor((left + right) / 2);

    let result = Math.max(getArea(arr, left, mid), getArea(arr, mid + 1, right));

    let low = mid;
    let high = mid + 1;
    let height = Math.min(arr[low], arr[high]);

    result = Math.max(result, height * 2);

    while (low > left || high < right) {
        if (high < right && (low === left || arr[low - 1] < arr[high + 1])) {
            high++;
            height = Math.min(height, arr[high]);
        } else {
            low--;
            height = Math.min(height, arr[low]);
        }

        result = Math.max(result, height * (high - low + 1));
    }

    return result;
}
