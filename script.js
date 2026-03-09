const display = document.querySelector(".display");
let currentvalue = '0';
let operator = null;
let firstvalue = null;
let secondvalue = null;
function appendToDisplay(Value){
    if (currentvalue  === '0'){
        currentvalue = Value;
    } else {
        currentvalue += Value;

    }display.textContent = currentvalue;
}

function setOperator(op){
    firstvalue=currentvalue;
    operator=op;
    display.textContent=firstvalue+operator;
    currentvalue='0';
}
function calculate(){
    let num1=parseFloat(firstvalue);
    let num2=parseFloat(currentvalue);
    let result=0;
    if (operator === '+'){
        result=num1+num2;
    }
    else if (operator==='-'){
        result=num1-num2;
    }
    else if (operator==='x'){
        result=num1*num2;
    }
    else if (operator==='/'){
        if (num2===0){
            display.textContent='Division by Zero Error';
            return;
        }
        else{
            result=num1/num2;
        }
    }
    else if (operator === '%'){
        result=num1%num2;
    }
    currentvalue=result.toString();
    display.textContent=currentvalue;
    firstvalue=null;
    operator=null;
    
}
function clearDisplay(){
    currentvalue='0';
    firstvalue=null;
    operator=null;
    display.textContent='0';
}
function backspace(){
    if (currentvalue.length > 1){
        currentvalue=currentvalue.slice(0,-1);
    }
    else{
        currentvalue='0';
    }
    display.textContent=currentvalue;
}
function toggleSign() {
    currentvalue = (parseFloat(currentvalue) * -1).toString();
    display.textContent = currentvalue;
}