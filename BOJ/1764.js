let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const [N, M] = input[0].split(" ").map(Number);
  let neverHeard = input.slice(1, N + 1).sort();
  let neverSeen = input.slice(N + 1).sort();
  const temp = [];
  let answer = [];

  const binarySearch = (arr, target) => {
    let lt = 0;
    let rt = arr.length - 1;
    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      if (arr[mid] === target) return true;
      else if (arr[mid] > target) rt = mid - 1;
      else lt = mid + 1;
    }
    return false;
  };

  if (N >= M) {
    neverHeard = neverHeard.sort();
    for (let x of neverSeen) {
      if (binarySearch(neverHeard, x)) temp.push(x);
    }
  } else {
    neverSeen = neverSeen.sort();
    for (let x of neverHeard) {
      if (binarySearch(neverSeen, x)) temp.push(x);
    }
  }

  answer = [temp.length, ...temp];
  return answer.join("\n");
}

console.log(solution(input));
