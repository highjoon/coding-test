function solution(a, b) {
    let answer = "";
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(`2016,${a},${b}`);
    answer = days[date.getDay()];
    return answer;
}

console.log(solution(5, 24));
