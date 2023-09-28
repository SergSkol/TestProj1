#read from file
wordArray = list()
fileName = "C:/Code/Git commands.txt"
try :
  file = open(fileName)
except :
  print("File doesn't exist")
  exit()

#split lines to words
for line in file :
  strippedLine = line.strip()
  wordArray = wordArray + strippedLine.split()

#update key/values
counts = dict()
for item in wordArray :
  counts[item] = counts.get(item, 0) + 1

#add value/key
lst = list()
for (key, val) in counts.items() :
  tup = (val, key)
  lst.append(tup)

#show top 10 words
lst = sorted(lst, reverse=True)
for (key, val) in lst[:10]:
  print(key, " = ", val)