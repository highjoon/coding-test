# 여러 개의 숫자 카드 중 가장 높은 숫자가 쓰인 한 장을 뽑는다.
# n x m 형태의 행렬
# 행을 먼저 선택 후 가장 낮은 숫자 카드 선택
# 행을 고를 때 가장 낮은 숫자가 뽑힐 것을 고려해서 최종적으로 가장 높은 숫자를 뽑도록 전략을 세워야 함

# 각 행의 min을 뽑고, 그 중에서 max를 뽑는다.

def solution(n, m, data):
  result = 0

  for row in data:
    min_num = min(row)
    result = max(result, min_num)

  return result

print(solution(3, 3, [[3, 1, 2], [4, 1, 4], [2, 2, 2]]))
print(solution(2, 4, [[7, 3, 1, 8], [3, 3, 3, 4]]))
