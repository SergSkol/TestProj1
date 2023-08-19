// https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one
//
function timeConversion(s) {
  const hourStr = s.substr(0, 2);
  const minStr = s.substr(2, 6);
  const amPm = s.substr(8, 2);
  let newHourInt = parseInt(hourStr);
  if (amPm === 'AM') {
    if (hourStr === '12') {
      newHourInt = 0;
    }
  } else {
    newHourInt = parseInt(hourStr) + 12;
    if (hourStr === '12') {
      newHourInt = 12;
    }
  }
  let newHourStr = newHourInt.toString(10);
  if (newHourInt < 10) {
    newHourStr = '0' + newHourStr;
  }
  return newHourStr + minStr;
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:05:45PM'));
console.log(timeConversion('12:05:45AM'));
console.log(timeConversion('06:40:03AM'));
