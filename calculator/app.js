var currentExpression="";
var output=document.getElementById("output-value");
function makeExpression(e){
    if(currentExpression.length<15){
        if(e=='.'){
            if(currentExpression.indexOf('.')==-1)
                currentExpression=currentExpression+e;
        }
        else{
            currentExpression=currentExpression+e;
        }
    }

}
function printCurrentExpression(currentExpression){
    if(currentExpression==""){
        document.getElementById("exp-val").innerHTML=currentExpression;
    }
    else
        document.getElementById("exp-val").innerHTML=currentExpression;
}
function printCurrentValue(currentExpression) {
    if(currentExpression=="")
        document.getElementById("current-value").innerHTML=currentExpression;
    else
        document.getElementById("current-value").innerHTML=eval(currentExpression);
}
function printOutputValue(currentExpression){        
    if(currentExpression.length){
        var opelement=document.getElementById("output");
        output.innerHTML=eval(currentExpression);
        console.log(output.innerHTML);
        opelement.style.zIndex='1';
        printCurrentExpression("");
    }
}


//working with numbers
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        makeExpression(this.id);
        printCurrentExpression(currentExpression);
    });
}

//working with operators
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="backspace"){
            currentExpression=currentExpression.substr(0,currentExpression.length-1);
            printCurrentExpression(currentExpression);
        }

        else if(this.id=="clear"){
            currentExpression="";
            printCurrentExpression("");
            output.innerHTML="";
            document.getElementById("output").style.zIndex='-1';
        }

        else if(this.id=="="){
            printOutputValue(currentExpression);
        }
        else{
            //do not take more than one operator continuously (need to be done)
            //only take operator if there is an operand (need to do)
            makeExpression(this.id);
            printCurrentExpression(currentExpression);
        }
    });
}