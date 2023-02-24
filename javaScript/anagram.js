function anagram(a, b) {

  let arr_a  = a.replace(/\s[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split("");
  let sort_arr_a = arr_a.sort();
  let str_sort_arr_a = sort_arr_a.join("");

  let arr_b  = b.replace(/\s[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split("");
  let sort_arr_b = arr_b.sort();
  let str_sort_arr_b = sort_arr_b.join("");

  if (str_sort_arr_a==str_sort_arr_b) {return true}
  else {return false}
}

let a = "Friend";
let b = "Finder";
console.log(anagram(a,b));