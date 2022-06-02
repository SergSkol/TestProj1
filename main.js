'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'minimumDistances' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function catAndMouse(x, y, z) {
    // Write your code here
    var xz = Math.abs(x-z);
    var yz = Math.abs(y-z);
    if(xz < yz){return "Cat A"}
    else if (xz > yz){return "Cat B"}
    else {return "Mouse C"}
}

function main() {
    var x = 1;
    var y = 2;
    var z = 3;
    const result = catAndMouse(x, y, z);
    console.log(result);
/*
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = catAndMouse(x, y, z);

    ws.write(result + '\n');

    ws.end();
*/
}
