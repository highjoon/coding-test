let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let A = input[1].split(" ").map(Number);

let LIS = [A[0]];

function BinarySearch(num) {
  let lt = 0;
  let rt = LIS.length - 1;

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (LIS[mid] === num) return mid;
    else if (LIS[mid] < num) lt = mid + 1;
    else rt = mid - 1;
  }

  return lt;
}

for (let num of A) {
  if (LIS[LIS.length - 1] < num) {
    LIS.push(num);
  } else {
    let idx = BinarySearch(num);
    LIS[idx] = num;
  }
}

console.log(LIS.length);
