const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    let num = Number(line);
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        sum += i;
    }

    console.log(sum);
}).on("close", function () {
    process.exit();
});
