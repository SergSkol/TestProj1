require 'date'

s = '2023-02-03'
d = Date.parse(s)

puts d
puts d.strftime('%B')
