function solution(phone_number) {
    let answer = phone_number.split("");
    let len = phone_number.length;
    let index = 0;

    while (len > 4) {
        answer[index++] = "*";
        len--;
    }

    answer = answer.join("");
    return answer;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));
console.log(solution("1111"));
