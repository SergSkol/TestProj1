# https://www.freecodecamp.org/learn/scientific-computing-with-python/scientific-computing-with-python-projects/time-calculator
# https://replit.com/@SergSkol/boilerplate-time-calculator#README.md

def add_time(start, duration, day_of_week = ""):
  def get_hours(str) :
    sep_index = str.find(":")
    return int(str[:sep_index])
  
  def get_mins(str) :
    sep_index = str.find(":")
    return int(str[sep_index+1: sep_index+3])
  
  def add_weekdays(weekday, add_days) :
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    
    formatted_day = weekday.lower().capitalize()
    index = days.index(formatted_day)
    index = (index + add_days) % 7
    
    # print("index = ", index) # debug
    
    return days[index]
  
  new_time = ""
  start_am_pm = start[-2:]
  start_h = get_hours(start)
  
  # convert to 23:23 format
  # 12 AM denotes midnight and 12 PM denotes noon
  if start_am_pm == "AM" and start_h == 12:
    start_h = 0
  elif start_am_pm == "PM" :
    if start_h != 12 :
      start_h += 12
    
  start_m = get_mins(start)

  dur_h = get_hours(duration)
  dur_m = get_mins(duration)

  new_m = start_m + dur_m
  new_h = start_h + dur_h
  if new_m > 59 :
    new_h += 1
    new_m -= 60
    
  if new_h > 23 :
    add_days = new_h // 24
    new_h = new_h % 24
  else :
    add_days = 0
    
  if add_days == 0 :
    days = ""
  elif add_days == 1 :
    days = "(next day)"
  else :
    days = "(" + str(add_days) + " days later)"
  
  weekday = ""
  if day_of_week != "" :
    weekday = add_weekdays(day_of_week, add_days)
  
  # back to 12:12 AM format
  if new_h > 12 :
    new_h = new_h % 12
    new_time = str(new_h) + ":" + str(new_m).zfill(2) + " PM"
  else :
    if start_h == 11 and start_am_pm == "AM" :
      new_time = str(new_h) + ":" + str(new_m).zfill(2) + " PM"
    elif new_h == 0:
      new_h = 12
      new_time = str(new_h) + ":" + str(new_m).zfill(2) + " AM"
    else :
      new_time = str(new_h) + ":" + str(new_m).zfill(2) + " AM"
    
  if day_of_week != "" :
    new_time += ", " + weekday
    
  if days != "" :
    new_time += " " + days
  
  # print(start_h, start_m, dur_h, dur_m) # debug
  # print(new_h, new_m, days) # debug

  return new_time

print(add_time("11:59 PM", "24:05"))