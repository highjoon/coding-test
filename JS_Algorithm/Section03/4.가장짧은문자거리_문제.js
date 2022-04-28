function solution(s, t) {
  let answer = [];
  let cnt = 0;
  let n = s.length;

  for (let i = 0; i < n; i++) {
    if (s[i] === "e") cnt = 0;
    else cnt++;
    answer.push(cnt);
  }

  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "e") cnt = 0;
    else cnt++;
    if (answer[i] > cnt) {
      answer[i] = cnt;
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
