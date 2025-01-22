N = 4
M = 6
rice_cakes = [19, 15, 10, 17]
rice_cakes = sorted(rice_cakes, reverse=True)

result_list = []

def binary_search(start, end, target):
  if start > end:
    return False
  
  # 높이 후보
  mid = (start + end) // 2

  # 높이 후보보다 큰 케익에서 높이 만큼 자른 합계
  sum = 0

  for cake in rice_cakes:
    if cake > mid:
      sum += (cake - mid)
    else:
      break

  # 합계가 높이보다 작으면 너무 크게 잘린 것. 더 작은 높이를 찾아야 함
  if sum < target:
    return binary_search(start, mid - 1, target)
  # 합계가 높이보다 크면 일단 OK.
  # 혹시 더 큰 높이도 괜찮을지 테스트.
  else:
    result_list.append(mid)
    return binary_search(mid + 1, end, target)

binary_search(0, rice_cakes[0] - 1, M)
# 제일 큰 높이 출력
print(max(result_list))