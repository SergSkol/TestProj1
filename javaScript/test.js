let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
function checkCustomersArray(arr) {
  for (let el of arr) {
    if (typeof el == "number") {
      console.log(`Type error: ${el} should be a string!`)
    }
  }
}

checkCustomersArray(customersArray);
