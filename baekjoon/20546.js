let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
    let moneyA = Number(input[0]);
    let moneyB = Number(input[0]);
    let stockA = 0;
    let stockB = 0;
    const stocks = input[1].split(" ").map(Number);

    function checkIsIncrease(d1, d2, d3, today) {
        if (d1 < d2 && d2 < d3 && d3 < today) return true;
        return false;
    }

    function checkIsDecrease(d1, d2, d3, today) {
        if (today < d3 && d3 < d2 && d2 < d1) return true;
        return false;
    }

    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i] <= moneyA) {
            while (stocks[i] <= moneyA) {
                moneyA -= stocks[i];
                stockA++;
            }
        }

        if (i >= 3) {
            if (checkIsIncrease(stocks[i - 3], stocks[i - 2], stocks[i - 1], stocks[i])) {
                while (stockB > 0) {
                    stockB--;
                    moneyB += stocks[i];
                }
            }

            if (checkIsDecrease(stocks[i - 3], stocks[i - 2], stocks[i - 1], stocks[i])) {
                while (stocks[i] <= moneyB) {
                    moneyB -= stocks[i];
                    stockB++;
                }
            }
        }
    }

    const resultA = moneyA + stocks[stocks.length - 1] * stockA;
    const resultB = moneyB + stocks[stocks.length - 1] * stockB;
    if (resultA > resultB) return "BNP";
    else if (resultA < resultB) return "TIMING";
    else return "SAMESAME";
}

console.log(solution(input));
