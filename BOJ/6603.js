let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
let answer = "";

while (input[idx].length !== 1) {
  const [N, ...S] = input[idx++].split(" ").map((v) => Number(v));

  function dfs(V, pick) {
    if (pick.length === 6) {
      answer += `${pick.join(" ")}\n`;
      return;
    }

    for (let i = V; i < N; i++) {
      dfs(i + 1, [...pick, S[i]]);
    }
  }
  dfs(0, []);
  answer += "\n";
}

console.log(answer);
