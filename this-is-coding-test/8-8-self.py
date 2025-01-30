def min_coins(n, m, coins):
  INF = 10_001  # 충분히 큰 값 (불가능한 경우를 의미)
  dp = [INF] * (m + 1)  # dp[x]는 x원을 만들기 위한 최소 동전 개수
  dp[0] = 0  # 0원을 만들기 위해 필요한 동전 개수는 0개

  for coin in coins:  # 각 동전에 대해
    for i in range(coin, m + 1):  # 해당 동전으로 만들 수 있는 금액 업데이트
      dp[i] = min(dp[i], dp[i - coin] + 1)

  return dp[m] if dp[m] != INF else -1  # 목표 금액 M을 만들 수 없는 경우 -1

# 입력 예제 1 실행
n, m = 2, 15
coins = [2, 3]
print(min_coins(n, m, coins))  # 5

# 입력 예제 2 실행
n, m = 3, 4
coins = [3, 5, 7]
print(min_coins(n, m, coins))  # -1
