function solution(times) {
  let answer = Number.MIN_SAFE_INTEGER;
  let timeLine = [];
  for (let time of times) {
    timeLine.push([time[0], "s"]);
    timeLine.push([time[1], "e"]);
  }
  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });
  let count = 0;
  for (let time of timeLine) {
    if (time[1] === "s") count++;
    else count--;
    answer = Math.max(answer, count);
  }
  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
