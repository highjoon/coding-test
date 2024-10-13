function solution(n) {
    let answer = "";

    function calculate(num, result) {
        if (num === 0) {
            return result.split("").reverse().join("");
        } else {
            if (num % 3 === 0) {
                return calculate(parseInt(num / 3) - 1, result + "4");
            } else {
                return calculate(parseInt(num / 3), result + String(num % 3));
            }
        }
    }
    answer = calculate(n, "");
    return answer;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
