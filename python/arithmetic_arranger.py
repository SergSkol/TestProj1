# https://www.freecodecamp.org/learn/scientific-computing-with-python/scientific-computing-with-python-projects/arithmetic-formatter

def arithmetic_arranger(problems, show_result = False) :
  arranged_problems = ""
  
  if len(problems) > 5 :
    arranged_problems = "Error: Too many problems."
    return arranged_problems
    
  pairs = list()
  for item in problems :
    find_plus = item.find('+')
    find_minus = item.find('-')
    if find_plus == -1 and find_minus == -1 :
      arranged_problems = "Error: Operator must be '+' or '-'."
      return arranged_problems
    
    if find_plus != -1 :
      pos = find_plus
    if find_minus != -1 :
      pos = find_minus
      
    oper = item[pos : pos +1]
    left = item[:pos]
    right = item[pos+1:]
    
    try :
      left_int = int(left)
    except :
      arranged_problems = "Error: Numbers must only contain digits."
      return arranged_problems
    
    max_len = max( len(left.strip()), len(right.strip()) )
    
    try :
      right_int = int(right)
    except :
      arranged_problems = "Error: Numbers must only contain digits."
      return arranged_problems
    
    if left_int > 9999 or right_int > 9999 :
      arranged_problems = "Error: Numbers cannot be more than four digits."
      return arranged_problems
    
    pair = list()
    pair.append(left_int)
    pair.append(oper)
    pair.append(right_int)

    if oper == "+" :
      res = left_int + right_int
    if oper == "-" :
      res = left_int - right_int
      
    pair.append(res)
    pair.append(max_len) # index = 4
    pairs.append(pair)
  
  for pair in pairs :
    s = str(pair[0]).rjust(pair[4] + 2, " ")
    if pairs.index(pair) < len(pairs)-1 :
      s += "    "
    arranged_problems += s
  
  arranged_problems += "\n"
    
  for pair in pairs :
    s = str(pair[2]).rjust(pair[4], " ")
    if pairs.index(pair) < len(pairs)-1 :
      s += "    "
    arranged_problems += pair[1] + " " + s

  arranged_problems += "\n"
  
  for pair in pairs :
    s = "-" * (pair[4] + 2)
    if pairs.index(pair) < len(pairs)-1 :
      s += "    "
    arranged_problems += s
    
  if show_result :
    arranged_problems += "\n"
    for pair in pairs :
      s = str(pair[3]).rjust(pair[4] + 2, " ")
      if pairs.index(pair) < len(pairs)-1 :
        s += "    "
      arranged_problems += s
  
  return arranged_problems



print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"], True))