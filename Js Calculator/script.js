const numbers=document.querySelectorAll(".number");
const calculatorScreen=document.querySelector(".calculator-screen");
const operators=document.querySelectorAll('.operator');
const equalSign=document.querySelector('.equal-sign');
const clearBtn=document.querySelector('.allclear');
const percentage=document.querySelector('.percentage');
const Decimal=document.querySelector('.decimal');

let prevNumber='0';
let currentNumber='0';
let calculationOperator='';
let chk=0;
let temp='0'

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    });
});

const updateScreen=(number)=>{
    calculatorScreen.value=number;
}

const inputNumber=( number)=>{
    if (currentNumber!=='0')
    currentNumber+=number;
    else
    currentNumber=number;
}

operators.forEach((operator)=>{
    operator.addEventListener('click',(event)=>{
        inputOperator(event.target.value);
    });
});

const inputOperator=(operator)=>{
    if(chk===0){
        prevNumber=currentNumber;
    }
    else{
        prevNumber=parseFloat(currentNumber)
    }
    calculationOperator=operator;
    currentNumber='0';
}

const calculate=()=>{
    let result=0
    switch(calculationOperator){
        case '+':
            result=parseFloat(prevNumber)+parseFloat(currentNumber);
            break;
        case '-':
            result=parseFloat(prevNumber)-parseFloat(currentNumber);
        break;
        case '*':
            result=parseFloat(prevNumber)*parseFloat(currentNumber);
            break;
        case '/':
            result=parseFloat(prevNumber)/parseFloat(currentNumber);
            break;
        default:
            return;
    }
    currentNumber=result.toString();
    calculationOperator='';
}

equalSign.addEventListener('click',()=>{
    calculate();
    updateScreen(currentNumber);
});

clearBtn.addEventListener('click',()=>{
    clearAll();
    updateScreen(currentNumber);
});

const clearAll=()=>{
    prevNumber='0';
    currentNumber='0';
    calculationOperator='';
}

percentage.addEventListener('click',()=>{
    prevNumber=(parseFloat(currentNumber)/100).toString();
    calculationOperator='*';
    currentNumber='0';
});

Decimal.addEventListener('click',()=>{
    temp=currentNumber;
    currentNumber+='.';
    updateScreen(currentNumber);
    ch=1;
});