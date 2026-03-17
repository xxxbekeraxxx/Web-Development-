def min4(a, b, c, d):
    m1 = min(a, b)
    m2 = min(c, d)
    return min(m1, m2)

nums = list(map(int, input().split()))
print(min4(nums[0], nums[1], nums[2], nums[3]))