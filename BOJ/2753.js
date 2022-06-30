let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
    console.log(1);
} else {
    console.log(0);
}
