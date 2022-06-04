function test(input){ //change arg to "input"
    var scores = input; //input to defined var
    //-------------write code below
    var result = [];
    var broke_up = 0;
    var broke_down = 0;
    var max_score = scores[0];
    var min_score = scores[0];
    scores.forEach(score=>{
        if(score>max_score){broke_up++;max_score=score}
        if(score<min_score){broke_down++;min_score=score}
    })
    result[0] = broke_up;
    result[1] = broke_down;
    return result;
}

function main(input_text) {
    //var input = input_text; // as text to text
    var input = input_text.split(" "); //as "1 2 3" to array
    //var bill = [3, 10, 2, 9];
    //var k = 1;
    //var b = 12;

    var result = test(input);
    //var result = test(bill, k, b);

    console.log(result);
    //alert(result);
    //document.write(result);
    document.getElementById('result').innerHTML = input_text+" : "+result;
}
