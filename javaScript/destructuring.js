const person = {
  fullname:'name',
  age:20,
  hobby:['sport','movies']
}

// destructuring:
const {fullname, age, hobby} = person;

console.log(fullname);
console.log(age);
console.log(hobby);