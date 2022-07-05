function mean(arr){
    let s = 0;
    for(let i = 0; i < arr.length; i++){
        s = s + arr[i];
    }
    return Math.round(s/arr.length * 10)/10;
}

function median(arr){
    const len = arr.length;
    let m = 0;
    arr.sort((a, b) => a - b);
    if(len % 2 == 0){
        m = (arr[len/2-1]+arr[len/2])/2;
    } else {
        m = arr[Math.floor(len / 2)];         
    }
    return Math.round(m * 10)  / 10;
}

function mode(arr){
    arr.sort((a, b) => a - b);
    let myMap = new Map();
    for(let i = 0; i < arr.length; i++){
        if(myMap.has(arr[i])){
            myMap.set(arr[i], myMap.get(arr[i])+1)
        } else {myMap.set(arr[i], 1)}
    }
    let maxValue = 0;
    let maxKey = 0;
    myMap.forEach((value, key) => {
        if(value>maxValue){
            maxValue = value;
            maxKey = key;
        }
    });
    return maxKey;
}

function stdDev(arr) {
    // Print your answers to 1 decimal place within this function
    function mean(arr){
        let s = 0;
        for(let i = 0; i < arr.length; i++){
            s = s + arr[i];
        }
        return Math.round(s/arr.length * 10)/10;
    }
    let m = mean(arr);
    let s = 0;
    for(let i = 0; i < arr.length; i++){
        let x = arr[i] - m;
        s = s + x * x;
    }
    let res = Math.round(10 * Math.sqrt(s / arr.length)) /10;
    return res;

    // if(Math.floor(res)==res){
    //     console.log(res+".0")
    // } else console.log(res)
}

function processData(input) {
    //Enter your code here

    input = input.split(" ");
    for(let i = 0; i < input.length; i++){
        input[i] = parseInt(input[i])
    }  

    console.log(mean(input));
    console.log(median(input));
    console.log(mode(input));
} 

processData('64630 11735 14216 99233 14470 4978 73429 38120 51135 67060');

// processData('1 1 2 3 4');