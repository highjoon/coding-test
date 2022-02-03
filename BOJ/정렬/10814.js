let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
let arr = new Array(201).fill(null);

input.map((list) => {
  const age = Number(list.split(" ")[0]);
  const name = list.split(" ")[1];

  if (!arr[age]) {
    arr[age] = [];
  }

  arr[age].push([age, name]);
});

let answer = "";

arr.map((items) => {
  if (items) {
    for (let item of items) {
      answer += `${item[0]} ${item[1]}\n`;
    }
  }
});

console.log(answer);
