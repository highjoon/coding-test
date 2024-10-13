# n이 1이 될 때까지 반복
# 1. n - 1
# 2. n / k (n % k == 0 일 때에만)

# 2를 더 많이 해야함

# n % k == 0 일 때 동안 계속 나누고
# n % k != 0 일 때 동안 계속 뺀다.
# n이 k의 배수가 될 때까지 빼고, 나눈다.
# n이 k 이상이라면 k로 계속 나누기
# n이 k로 나누어 떨어지지 않는다면 n에서 1씩 빼기

def solution(n, k):
  result = 0

  # n이 k 이상이라면 k로 계속 나누기
  while n >= k:
    # n이 k로 나누어 떨어지지 않는다면 n에서 1씩 빼기
    while n % k != 0:
      n -= 1
      result += 1
    # k로 나누기
    n //= k
    result += 1
  
  # 혹시라도 남은 수가 있다면 1씩 빼기
  while n > 1:
    n -= 1
    result += 1

  return result

print(solution(25, 5)) # 2

# 이해 안감
def solution2(n, k):
  result = 0

  while True:
    # (n == k로 나누어떨어지는 수)가 될 때까지 1씩 빼기
    target = (n // k) * k
    result += (n - target)
    n = target
    # n이 k보다 작을 때 (더 이상 나눌 수 없을 때) 반복문 탈출
    if n < k:
      break
    # k로 나누기
    result += 1
    n //= k

  # 마지막으로 남은 수에 대해 1씩 빼기
  result += (n - 1)
  return result

print(solution(25, 5)) # 2