//https://www.hackerrank.com/challenges/sock-Merchant/problem

function sockMerchant(n, ar){
    var ncol = 0;
    var npairs = 0;
    var prevs = null;
    ar.sort((a,b)=>a-b);
    ar.forEach((s) =>{
        if (prevs == null) { //first
            ncol++;
        } else if (s == prevs) { //same color
            ncol++;    
        } else { //next col
            var p = Math.floor(ncol / 2);
            npairs = npairs + p;
            ncol = 1;
        }
        prevs = s;
    })
    var p = Math.floor(ncol / 2);
    npairs = npairs + p;
    return npairs;
}
