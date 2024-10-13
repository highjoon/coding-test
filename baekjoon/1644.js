let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(input) {
    const N = Number(input);
    let primes = [];
    let left = 0;
    let right = 1;
    let answer = 0;
    let sum = 0;

    function eratosthenesSieve(number) {
        const array = [];
        const tempArray = [];

        for (let i = 2; i <= number; i++) tempArray[i] = i;

        for (let i = 2; i <= number; i++) {
            if (tempArray[i] === 0) continue;
            for (let j = i + i; j <= number; j += i) tempArray[j] = 0;
        }

        for (let i = 2; i <= number; i++) {
            if (tempArray[i] !== 0) array.push(tempArray[i]);
        }

        return array;
    }

    primes = eratosthenesSieve(N);
    sum = primes[left];

    while (left < primes.length && right < primes.length) {
        if (sum <= N) {
            if (sum === N) answer++;
            sum += primes[right++];
        } else {
            sum -= primes[left++];
        }
    }

    if (primes[primes.length - 1] === N) answer++;

    return answer;
}

console.log(solution(input));
