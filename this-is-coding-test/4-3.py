# 8x8 좌표 평면
# 나이트는 좌표 평면을 벗어날 수 없음
# 수평 두 칸 이동 후 수직 한 칸 이동
# 수직 두 칸 이동 후 수평 한 칸 이동
# 나이트가 이동할 수 있는 경우의 수?
# 행 : 1 ~ 8
# 열 : a ~ h

# 열을 숫자로 치환
# 좌표 구함
# 모든 경우의 수를 이중 배열로 선언
# 각 이중 배열 돌면서 좌표 평면 벗어나면 return
# 안벗어나면 +1

input_data = input()
row = int(input_data[1])
column = int(ord(input_data[0])) - int(ord('a')) + 1

# 소괄호 : 튜플
steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)]

result = 0

for step in steps:
  next_row = row + step[0]
  next_column = column + step[1]

  if next_row >= 1 and next_row <= 8 and next_column >= 1 and next_column <= 8:
    result += 1

print(result)
