function solution(brown, yellow) {
    function getFullDivs(num) {
        let result = [];
        for (let i = 3; i < num; i++) {
            if (num % i === 0 && num / i > 2) result.push([i, num / i]);
        }
        return result;
    }

    let answer;
    let fullDivs = getFullDivs(brown + yellow);

    for (let fullDiv of fullDivs) {
        if (fullDiv[0] >= fullDiv[1] && (fullDiv[0] - 2) * (fullDiv[1] - 2) === yellow) {
            answer = fullDiv;
            break;
        }
    }

    return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
