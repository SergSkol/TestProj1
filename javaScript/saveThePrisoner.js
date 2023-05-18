function saveThePrisoner(n, m, s) {
    // Write your code here
    let res = m % n +(s-1);
    if(res === 0){res = n}
    return res;
}

let n = 352926151;
let m = 380324688;
let s = 94730870;
console.log(saveThePrisoner(n, m, s))