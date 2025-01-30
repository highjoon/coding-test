# n x 2를 1 x 2, 2 x 1, 2 x 2 로 채울 수 있는 모든 경우의 수
# 결과값 / 796,796의 나머지로 출력

n = 3
dp = [0] * (n + 1)
MOD = 796796

dp[1] = 1
dp[2] = 3
for i in range(3, n + 1):
  dp[i] = (dp[i - 1] + (2 * dp[i - 2])) % MOD

print(dp[n])
