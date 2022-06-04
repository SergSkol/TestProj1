function sockMerchant(n, ar){
    //https://www.hackerrank.com/challenges/sock-Merchant/problem
 
    return npairs;
}

function run_sockMerchant(input) {
    var input_str_array = input.split(" "); //array "1 2 3" to array ["1","2","3"]
    var input_num_array = input_str_array.map((e)=>parseInt(e));

    var result = sockMerchant(input_num_array.lenght, input_num_array);

    console.log(result);
    document.getElementById('result').innerHTML = input+" : "+result;
}