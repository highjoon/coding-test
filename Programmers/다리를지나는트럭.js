function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let currentWeight = 0;
  let newTruck;
  const bridge = Array.from({ length: bridge_length }, () => 0);

  while (bridge.length) {
    currentWeight -= bridge.shift();
    answer++;

    if (truck_weights.length) {
      if (currentWeight + truck_weights[0] <= weight) {
        newTruck = truck_weights.shift();
        currentWeight += newTruck;
        bridge.push(newTruck);
      } else {
        bridge.push(0);
      }
    }
  }
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
