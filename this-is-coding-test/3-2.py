# 주어진 수를 M번 더해서 가장 큰 수 도출
# 특정 인덱스의 수가 K번 초과해서 더해질 수 없음
# K는 항상 M보다 작거나 같음
# 1번째, 2번째로 큰 수
# 각각 K번씩 총 M번이 될 때까지 더한다.

def solution(n, m, k, data):
  data.sort()
  first = data[n - 1]
  second = data[n - 2]

  result = 0

  while True:
    for i in range(k):
      if m == 0:
        break
      result += first
      m -= 1
    if m == 0:
      break
    result += second
    m -= 1
  return result


print(solution(5, 8, 3, [2, 4, 5, 4, 6]))

# 6, 5
# 6 + 6 + 6 + 5 + 6 + 6 + 6 + 5 = 46

def solution2(n, m, k, data):
  data.sort()
  first = data[n - 1] # 가장 큰 수
  second = data[n - 2] # 두 번째로 큰 수

  # 가장 큰 수가 더해지는 횟수 계산
  # k + 1 은 first가 k번 더해지고 나머지를 second로 더해줌을 의미
  count = (m // (k + 1)) * k # first는 k번씩 총 count 번 더해짐
  count += m % (k + 1) # m이 k + 1으로 나누어 떨어지지 않을 경우 나머지만큼 first를 더 더해줌

  result = 0
  result += count * first # count 만큼 first를 더해줌
  result += (m - count) * second # 그 나머지 만큼 second를 더해줌

  return result