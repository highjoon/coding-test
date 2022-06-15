let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  const N = Number(input[0]);
  let switches = input[1].split(" ").map(Number);
  const S = Number(input[2]);
  const students = [];
  input = input.slice(3);

  for (let x of input) {
    students.push(x.split(" ").map(Number));
  }

  function toggleSwitchMale(num) {
    for (let i = 0; i < N; i++) {
      if ((i + 1) % num === 0) {
        if (switches[i] === 1) switches[i] = 0;
        else switches[i] = 1;
      }
    }
  }

  function toggleSwitchFemale(num) {
    let lt = num - 1;
    let rt = num - 1;
    while (lt >= 0 && rt < N) {
      if (switches[lt - 1] !== switches[rt + 1]) break;
      lt--;
      rt++;
    }
    for (let i = lt; i <= rt; i++) {
      if (switches[i] === 1) switches[i] = 0;
      else switches[i] = 1;
    }
  }

  for (let student of students) {
    const [sex, num] = student;
    if (sex === 1) toggleSwitchMale(num);
    if (sex === 2) toggleSwitchFemale(num);
  }
  const answer = [];
  let temp = [];
  while (switches.length) {
    temp.push(switches.shift());
    if (temp.length === 20) {
      answer.push(temp);
      temp = [];
    }
  }

  if (temp.length) answer.push(temp);
  return answer.map((v) => v.join(" ")).join("\n");
}

console.log(solution(input));
