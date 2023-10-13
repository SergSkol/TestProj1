# https://www.freecodecamp.org/learn/scientific-computing-with-python/scientific-computing-with-python-projects/probability-calculator
# https://replit.com/@SergSkol/boilerplate-probability-calculator#README.md

import copy
import random

class Hat:
  def __init__(self, **kwargs) -> None:
    self.contents = list()
    for key, value in kwargs.items():
      for i in range(value):
        self.contents.append(key)
  
  def draw(self, num) :
    balls = list()
    if num >= len(self.contents)-1 :
      balls = copy.copy(self.contents)
      self.contents.clear()
    else :
      for i in range(num) :
        index = random.randint(0, len(self.contents) - 1)
        ball = self.contents.pop(index)
        balls.append(ball)
    return balls
  
  def __str__(self) -> str:
    report = ""
    for item in self.contents :
      report += item + " "  
    return report
# the end of class Hat

def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
  def is_enougth_balls(balls, color, num) :
    count = 0
    for ball in balls :
      if ball == color :
        count += 1
    if count >= num :
      return True
    else :
      return False
    
  success = 0
  for i in range(num_experiments) :
    initial_balls = copy.copy(hat.contents)
    balls_drawn = hat.draw(num_balls_drawn)
    enougth = True
    for key, value in expected_balls.items() :
      enougth = enougth and is_enougth_balls(balls_drawn, key, value)
    if enougth :
      success += 1
    hat.contents = initial_balls
  
  return success / num_experiments
# ================== main
random.seed(95)
# case 1
# hat = Hat(black=6, red=4, green=3)
# probability = experiment(hat=hat,
#                   expected_balls={"red":2,"green":1},
#                   num_balls_drawn=5,
#                   num_experiments=2000)
# print("Probability:", probability)

# case 2
hat = Hat(yellow=5,red=1,green=3,blue=9,test=1)
probability = experiment(hat=hat, 
                         expected_balls={"yellow":2,"blue":3,"test":1}, 
                         num_balls_drawn=20, 
                         num_experiments=100)
print("Probability:", probability)

# print(hat)
# for i in range(10) :
#   print(hat.draw(5))
#   print(hat)