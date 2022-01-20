let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let input = 1999;
if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
  console.log(1);
} else {
  console.log(0);
}
