// https://www.hackerrank.com/challenges/taum-and-bday/problem

// *
//  * The function is expected to return a LONG_INTEGER.
//  * The function accepts following parameters:
//  *  1. INTEGER b
//  *  2. INTEGER w
//  *  3. INTEGER bc
//  *  4. INTEGER wc
//  *  5. INTEGER z
//  */

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    if (wc + z < bc) {
        return w * wc + b * (wc + z)
    } else if (bc + z < wc) {
        return b * bc + w * (bc + z)
    } else {
        return w * wc + b * bc;
    }
}

let b = 742407782;
let w = 90529439;
let bc = 847666641;
let wc = 8651519;
let z = 821801924;
console.log(taumBday(b, w, bc, wc, z));
