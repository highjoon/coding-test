let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  input = input.map((v) => v.split(" ").map(Number));
  input.pop();
  input = input.reverse();

  const answer = [];

  while (input.length) {
    let [N, M] = input.pop();
    let result = [];
    let records = [];

    while (N--) {
      let cur = input.pop();
      for (let i = 0; i < M; i++) {
        records.push(cur[i]);
      }
    }

    let sh = new Map();
    let target = 0;

    for (let record of records) {
      if (sh.has(record)) sh.set(record, sh.get(record) + 1);
      else sh.set(record, 1);
    }

    records = Array.from(sh).sort((a, b) => b[1] - a[1]);
    target = records[1][1];

    for (let i = 0; i < records.length; i++) {
      if (records[i][1] === target) result.push(records[i][0]);
      if (records[i][1] < target) break;
    }

    answer.push(result.sort((a, b) => a - b).join(" "));
  }

  return answer.join("\n");
}

console.log(solution(input));
