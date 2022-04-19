const rl = require("readline").createInterface(process.stdin, process.stdout);

let input = [];

rl.on("line", (line) => {
  input = line.split(" ").map((x) => BigInt(x));
}).on("close", () => {
  const [n, m] = input;
  let answer = "" + n / m + "\n";
  answer += n % m;

  console.log(answer);
});
