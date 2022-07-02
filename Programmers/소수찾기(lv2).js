function solution(numbers) {
    let answer = new Set();
    let ch = Array.from({ length: numbers.length }, () => 0);
    let temp = [];

    function DFS(L) {
        let num = Number(temp.join(""));
        if (isPrime(num)) answer.add(num);
        if (L === numbers.length) return;

        for (let i = 0; i < numbers.length; i++) {
            if (ch[i] === 0) {
                ch[i] = 1;
                temp.push(numbers[i]);
                DFS(L + 1);
                ch[i] = 0;
                temp.pop();
            }
        }
    }

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    DFS(0);
    answer = answer.size;
    return answer;
}

console.log(solution("17"));
console.log(solution("011"));
