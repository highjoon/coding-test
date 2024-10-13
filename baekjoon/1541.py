# 괄호를 적절히 쳐서 식의 결과값을 최소로
# 숫자, +, - 만 제공
# 처음과 끝은 무조건 숫자
# 연산자가 연속되지 않음
# 숫자는 최대 5자리수
# 수는 0으로 시작 가능
# 식의 길이는 50자 이하

# 55-50+40
# -35

# 10+20+30+40
# 100

# 00009-00009
# 0

# - 뒤에 있는 수를 모두 계산해서 앞에 있는 수에 빼줄 때 제일 최소가 됨
exp = input().split('-')
arr = []

for item in exp:
  sum = 0
  temp = item.split('+')
  
  for j in temp:
    sum += int(j)
  
  arr.append(sum)

result = arr[0]

for i in range(1, len(arr)):
  result -= arr[i]

print(result)