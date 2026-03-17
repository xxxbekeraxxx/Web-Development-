def centered_average(nums):
  total_sum = sum(nums) - max(nums) - min(nums)
  
  return total_sum // (len(nums) - 2)