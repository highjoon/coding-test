let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input.shift());
const answer = [];

while (T--) {
  let n = Number(input.shift());
  let temp = 1;
  let clothes = new Map();
  while (n--) {
    let category = input.shift().split(" ")[1];
    if (clothes.has(category)) clothes.set(category, clothes.get(category) + 1);
    else clothes.set(category, 1);
  }
  for (let [key, val] of clothes) {
    temp *= val + 1;
  }
  temp -= 1;
  answer.push(temp);
}

console.log(answer.join("\n"));
