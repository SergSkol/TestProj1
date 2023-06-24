// https://github.com/microverse-students/anagram-SergSkol

// Return true if the two given strings are anagrams. Otherwise, return false.

// A word is an anagram of another word if both use the same letters in the same quantity, 
// but arranged differently.

// For example:

// friend and Finder are anagrams.
// The Morse Code and Here come dots are anagrams as well.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
// and turn everything into the same case (lower or upper case) in order to check for anagrams.

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