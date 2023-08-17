// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
//
function plusMinus(arr) {
  const counts = [
      arr.filter(x => x > 0).length,
      arr.filter(x => x < 0).length,
      arr.filter(x => x === 0).length
  ] 
  counts.forEach(v => console.log((v / arr.length).toFixed(6)))
}

const arr = [-4, 3, -9, 0, 4, 1];
console.log(plusMinus(arr) );
