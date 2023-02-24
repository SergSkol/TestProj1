require 'json'

class Test
  def initialize(title, author)
    @title = title
    @author = author
    @rentals = []
  end

  def getItem
    { title: @title, author: @author }
  end
end

a = []
a.push(Test.new("TTT", "AAA"))
a.push(Test.new("NNN", "MMM"))

b = []
a.each do |e|
  b.push(e.getItem)
end

puts b
puts "-----"

out2 = JSON.generate(b)

puts JSON.parse(out2)
