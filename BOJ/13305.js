let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = Number(input[0]);
let distance = input[1].split(" ").map((v) => BigInt(v));
let cost = input[2].split(" ").map((v) => BigInt(v));

let total = 0n;
let minimumCost = cost[0];

for (let i = 0; i < distance.length; i++) {
  if (cost[i] <= minimumCost) minimumCost = cost[i];
  total += minimumCost * distance[i];
}

console.log(total.toString());
