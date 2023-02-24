class Solver
  def factorial(n)
    raise "Wrong Input" if n<0
    return 1 if n==0
    result = 1
    for i in 1..n do
      result = result * i
    end
    result
  end

  def reverse(word)
    result = ''
    len = word.length
    i = len
    while i > 0 do
      i = i - 1
      result = result + word[i]
    end
    result
  end

  def fizzbuzz(n)
    return 'fizzbuzz' if n % 3 == 0 && n % 5
    return 'fizz' if n % 3 == 0
    return 'buzz' if n % 5 == 0
    return n
  end
end

sol = Solver.new
puts sol.factorial(0)
puts sol.factorial(5)
puts sol.reverse('hello')
puts sol.fizzbuzz(3)
puts sol.fizzbuzz(5)
puts sol.fizzbuzz(15)
puts sol.fizzbuzz(7)
