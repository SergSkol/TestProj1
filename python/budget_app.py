# https://www.freecodecamp.org/learn/scientific-computing-with-python/scientific-computing-with-python-projects/budget-app
# https://replit.com/@SergSkol/boilerplate-budget-app#budget.py

class Category:
  def __init__(self, name) :
    self.name = name
    self.ledger = list()

  def deposit(self, amount, description = "") :
    item = {"amount": amount, "description": description}
    self.ledger.append(item)

  def get_balance(self) :
    balance = 0
    for item in self.ledger :
      balance += item["amount"]
    return balance
      
  def check_funds(self, amount) :
    balance = self.get_balance()
    if amount > balance :
      return False
    else :
      return True
    
  def withdraw(self, amount, description="") :
    if self.check_funds(amount):
      item = {"amount": -amount, "description": description}
      self.ledger.append(item)
      return True
    else :
      return False
    
  def transfer(self, amount, destination):
    if self.withdraw(amount, "Transfer to "+destination.name):
      destination.deposit(amount, "Transfer from "+self.name)
      return True
    else :
      return False
    
  def __str__(self) :
    name_len = len(self.name)
    beg = int((30 - name_len) / 2 )
    end = 30 - beg - name_len
    
    report = "*"*beg + self.name + "*"*end
    
    balance = 0
    for item in self.ledger :
      amount = item["amount"]
      descr = item["description"]
      balance += amount
      str_descr = descr[:23]
      str_amount = "{:.2f}".format(amount)
      str_space = " "*(30-len(str_descr)-len(str_amount))
      
      report += "\n" + str_descr + str_space + str_amount
      
    report += "\nTotal: " + "{:.2f}".format(balance)
    return report
  
  def get_expenses(self) :
    exp = 0
    for item in self.ledger :
      amount = item["amount"]
      if amount < 0 :
        exp += amount
    return -exp
  
def create_spend_chart(categories):
  report = "Percentage spent by category\n"
  
  tot = 0
  for cat in categories :
    tot += cat.get_expenses()
  
  percents = list()
  max_len_names = 0
  
  for cat in categories :
    exp = (10 * cat.get_expenses() // tot) * 10
    
    # print("exp", cat.name, cat.get_expenses(), "of total", tot, " = ", exp)
    
    percents.append(exp)
    if max_len_names < len(cat.name) :
      max_len_names = len(cat.name)
  
  label = 100
  while label >= 0 :
    report += "{:>3}".format(label) + "|"
    
    for perc in percents :
      if perc >= label :
        report += " o "
      else :
        report += "   "
      if percents.index(perc) == len(percents)-1 :
        report += " "
    
    label -= 10
    report += "\n"
  
  report += "    ----------\n"
  
  # categories names
  index = 0
  while index < max_len_names :
    report += "    "
    for cat in categories :
      if index < len(cat.name)  :
        report += " " + cat.name[index] + " "
      else :
        report += "   "
      if categories.index(cat) == len(categories)-1 :
        report += " "
        
    index += 1
    if index < max_len_names:
      report += "\n"
  
  return report

# ====================== main =======================
# case 1
print("----------- CASE 1 -------------")
food = Category("Food")
food.deposit(1000, "initial deposit")
food.withdraw(10.15, "groceries")
food.withdraw(15.89, "restaurant and more food for dessert")
print(food.get_balance())
clothing = Category("Clothing")
food.transfer(50, clothing)
clothing.withdraw(25.55)
clothing.withdraw(100)
auto = Category("Auto")
auto.deposit(1000, "initial deposit")
auto.withdraw(15)
print(food)
print(clothing)
print(create_spend_chart([food, clothing, auto]))

# case 2
print("----------- CASE 2 -------------")
food = Category("Food")
entertainment = Category("Entertainment")
business = Category("Business")
food.deposit(900, "deposit")
entertainment.deposit(900, "deposit")
business.deposit(900, "deposit")
food.withdraw(105.55)
entertainment.withdraw(33.40)
business.withdraw(10.99)
actual = create_spend_chart([business, food, entertainment])
print(actual)

print("********* expected **********\n")

expected = "Percentage spent by category\n100|          \n 90|          \n 80|          \n 70|    o     \n 60|    o     \n 50|    o     \n 40|    o     \n 30|    o     \n 20|    o  o  \n 10|    o  o  \n  0| o  o  o  \n    ----------\n     B  F  E  \n     u  o  n  \n     s  o  t  \n     i  d  e  \n     n     r  \n     e     t  \n     s     a  \n     s     i  \n           n  \n           m  \n           e  \n           n  \n           t  "
print(expected)

print(actual == expected)
print(len(actual), len(expected))