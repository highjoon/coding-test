function solution(meeting) {
  let answer = 0;
  let endTime = 0;
  const sortedMeeting = meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  for (let meeting of sortedMeeting) {
    if (meeting[0] >= endTime) {
      endTime = meeting[1];
      answer++;
    }
  }
  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
let arr2 = [
  [3, 3],
  [1, 3],
  [2, 3],
];
console.log(solution(arr));
console.log(solution(arr2));
