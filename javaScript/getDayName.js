// https://www.hackerrank.com/challenges/js10-date/problem
//
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let dayArr=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayArr[new Date(dateString).getDay()];
    return dayName;
}

console.log(getDayName("10/11/2009"));
console.log(getDayName("11/10/2010"));
