//https://www.hackerrank.com/challenges/js10-switch/problem?isFullScreen=true

function getLetter(s) {
    let letter;
    let l = s.charAt(0);
    // Write your code here
    switch(l) {
    case 'a' || 'e' || 'i' || 'o' || 'u':
        letter = "A";
        break;
        case 'b' || 'c' || 'd' || 'f' || 'g':
        letter = "B";
        break;
    case 'h' || 'j' || 'k' || 'l' || 'm':
        letter = "C";
        break;
    default:
        letter = "D";
    }
    return letter;
}

console.log(getLetter("bdfgt"))