function solution(price, money, count) {
    let answer;
    let total = 0;
    for (let i = 1; i <= count; i++) {
        total += price * i;
    }
    answer = total > money ? total - money : 0;
    return answer;
}

console.log(solution(3, 20, 4));
