let firstNum = null;
let secNum = null;
let sign = null;
let currentArr = [];

//mathematic functions called by operator()
function calcAdd (a, b) {
    return a + b;
}
function calcSubtract (a, b) {
    return a - b;
}
function calcMultiply (a, b) {
    return a * b;
}
function calcDivide (a, b) {
    return a / b;
} 

//determines which math function to call based on the c parameter
function operator(a, b, c) {
    switch (c) {
        case 'plus':
            return calcAdd(a, b);
        case 'minus':
            return calcSubtract(a, b);
        case 'multiply':
            return calcMultiply(a, b);
        case 'divide':
            return calcDivide(a, b);
        default:
            return errorMsg();
    }
}

function createNums(x) {
    currentArr.push(x);
    console.log(currentArr);
    display.textContent = currentArr.join('');
}

//called by any operator math 
function doMathBish(x) {
    if (sign === null && firstNum === null) {
        firstNum = parseFloat(currentArr.join(''));
        currentArr.length = 0;
        sign = x;
        console.log(sign);
        console.log(currentArr);
    } elseif (sign === null && firstNum !== null) {
        sign = x;
    } else {
        let runningTotal;
        runningTotal = equals();
        display.textContent = runningTotal;
        sign = x;
        console.log(sign);
    }
}
//called by equal button
function equals() {
    let answer;
    secondNum = parseFloat(currentArr.join(''));
    currentArr.length = 0;
    answer = operator(firstNum, secondNum, sign);
    firstNum = answer;
    secondNum = null;
    return answer;
}

function clearVars() {

}
function clearAll() {
    firstNum = null;
    secondNum = null;
    sign = null;
    currentArr.length = 0;
    display.textContent = '';
}


console.log(operator(3, 3, 'plus'));
console.log();

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    createNums(1);
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    createNums(2);
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    createNums(3);
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    createNums(4);
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    createNums(5);
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    createNums(6);
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    createNums(7);
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    createNums(8);
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    createNums(9);
});

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    createNums(0);
});

const point = document.querySelector('#point');
point.addEventListener('click', () => {
    createNums('.');
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    doMathBish('plus');
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    doMathBish('minus');
});

const multiply = document.querySelector('#multiply');
multiply.addEventListener('click', () => {
    doMathBish('multiply');
});

const divide = document.querySelector('#divide');
divide.addEventListener('click', () => {
    doMathBish('divide');
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    clearAll();
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    display.textContent = equals();
});

const display = document.querySelector('#display');
