# N개 부품
# M개 종류의 부품 구매
# N개 부품 중 M개 종류 부툼이 모두 있는지 검사

N = 5
M = 3

products = [8, 3, 7, 9, 2]
orders = [5, 7, 9]

def binary_search(array, start, end, target):
  if start > end:
    return False
  
  mid = (start + end) // 2

  if array[mid] == target:
    return True
  elif array[mid] > target:
    return binary_search(array, start, mid - 1, target)
  else:
    return binary_search(array, mid + 1, end, target)

for order in orders:
  if binary_search(products, 0, N - 1, order) == True:
    print('yes', end = ' ')
  else:
    print('no', end = ' ')