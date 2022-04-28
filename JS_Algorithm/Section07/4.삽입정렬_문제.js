function solution(arr) {
  let answer = arr;
  for (let i = 1; i < arr.length; i++) {
    let currentVal = answer[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }
  return answer;
}

let arr = [11, 7, 5, 6, 10, 9];
console.log(solution(arr));
