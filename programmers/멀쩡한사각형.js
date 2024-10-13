function solution(w, h) {
    let answer = 1;

    function getGCD(num1, num2) {
        return num1 % num2 === 0 ? num2 : getGCD(num2, num1 % num2);
    }

    answer = w * h - (w + h - getGCD(w, h));

    return answer;
}

console.log(solution(w, h));
