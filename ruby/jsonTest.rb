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
a.push(Test.new("Title 1", "Author 1"))
a.push(Test.new("Kobzar", "Taras Shev"))

b = []
a.each do |e|
  b.push(e.getItem)
end

puts b
puts "-----"

out2 = JSON.generate(b)

puts JSON.parse(out2)
