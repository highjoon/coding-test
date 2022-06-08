let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  input = input.split("");
  const wolf = "wolf";
  const set = new Set(input);
  if (Array.from(set).join("") !== "wolf") return 0;
  let arr = [];
  let count = { w: 0, o: 0, l: 0, f: 0 };

  function check() {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== wolf[i % 4]) return 0;
    }
    let n = count["w"];
    for (let key in count) {
      if (count[key] !== n) return 0;
    }
    return 1;
  }

  for (let i = 0; i < input.length; i++) {
    if (arr[arr.length - 1] !== input[i]) {
      if (arr[arr.length - 1] === "f") {
        let result = check();
        if (result === 0) return 0;
        arr = [];
        count = { w: 0, o: 0, l: 0, f: 0 };
      }
      arr.push(input[i]);
    }
    count[input[i]] += 1;
  }

  let result = check();
  if (result === 0) return 0;

  return 1;
}

console.log(solution(input));
