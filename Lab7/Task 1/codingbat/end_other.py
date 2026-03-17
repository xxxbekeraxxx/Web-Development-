def end_other(a, b):
  a_low = a.lower()
  b_low = b.lower()
  
  return a_low.endswith(b_low) or b_low.endswith(a_low)