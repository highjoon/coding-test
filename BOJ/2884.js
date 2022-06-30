const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    let input = line.split(" ");

    let H = Number(input[0]);
    let M = Number(input[1]);

    if (M - 45 < 0) {
        M = 60 + (M - 45);
        H -= 1;

        if (H === -1) {
            H = 23;
        }
    } else {
        M -= 45;
    }

    console.log(H + " " + M);
}).on("close", function () {
    process.exit();
});
