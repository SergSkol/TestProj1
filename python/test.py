# simple print
print('Hello world')

s = "7a"
try :
  print(int(s))
except :
  print("Wrong string to convert to int")

#trigger
x = 10
if x > 5 :
  print(">5")
  
#loop
for i in range(5) :
  print(i)

#list
myList = list()
myList.append(1)
myList.append(10)
myList.append(2)
myList.sort()
print(myList)

#read from file
fileName = "C:/Code/test.txt"
file = open(fileName)
for line in file :
  strippedLine = line.strip()
  print(strippedLine)

# dict
counts = dict()
arr = ['a', 'b', 'c', 'a']
for item in arr :
  if item not in counts :
    counts[item] = 1
  else :
    counts[item] = counts[item] + 1
  # instead of IF/ELSE:
  # counts[item] = counts.get(item, 0) + 1
print(counts)
x = counts.get('d', 0)
print(x)