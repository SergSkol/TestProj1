function test(input){
    var a = input; //input to defined var
    //-------------write code below
    var result = 0;
    
    var dic = [];
    
    var alen = 0;
    a.forEach(element=>{
        var tmp = dic.includes(element);
        if (!tmp){dic.push(element)}
        alen++;
    })
    
    dic.forEach(element=>{
        var p1 = 0;
        var p2 = 0;
        for(let i=0; i<alen; i++){
            if(a[i] == element){
                if(p1 == 0){p1=i+1}
                else {p2=i+1}
            }
        }
        if (p2!==0){
            if (result==0){result = p2-p1}
            else {result = Math.min(result, p2-p1)}
        }
    })
    if(result ==0){result=-1}
    
    return result;
}

function main(input_text) {
    //var input = input_text; // as text to text
    var input = input_text.split(" "); //as "1 2 3" to array
    //var result = input;

    var result = test(input);
    
    console.log(result);
    //alert(result);
    //document.write(result);
    document.getElementById('result').innerHTML = input_text+" : "+result;
}
