function quartiles(arr) {
    // Write your code here
    function median(arr){
        const len = arr.length;
        arr.sort((a, b) => a - b);
        if(len % 2 == 0){
            return Math.round((arr[len/2-1]+arr[len/2])/2);
        } else {
            return arr[Math.floor(len / 2)];         
        }
    }

    const len = arr.length;
    arr.sort((a, b) => a - b);
    let q1 = 0;
    let q2 = 0;
    let q3 = 0;
    if(len % 2 == 0){
        const arr1 = arr.slice(0, len / 2);
        const arr3 = arr.slice(len / 2, len);
        q1 = median(arr1);
        q2 = median(arr);
        q3 = median(arr3);
    } else {
        const arr1 = arr.slice(0, Math.floor(len / 2));
        const arr3 = arr.slice(Math.floor(len / 2)+1, len);
        q1 = median(arr1);
        q2 = median(arr);
        q3 = median(arr3);                
    }
    return [q1, q2, q3];
}

console.log(quartiles([3,7,8,5,12,14,21,15,18,14]));