# 부품이 n개
# m개 구매

n = 5
m = 3
products=[8, 3, 7, 9, 2]
products.sort()
items=[5, 7, 9]

def binary_search(array, target, start, end):
  if start > end:
    return False
  mid = (start + end) // 2

  if array[mid] == target:
    return mid
  elif array[mid] > target:
    return binary_search(array, target, start, mid - 1)
  else:
    return binary_search(array, target, mid + 1, end)

for item in items:
  result = binary_search(products, item, 0, n - 1)
  if result is not False:
    print('yes', end=' ')
  else:
    print('no', end=' ')
