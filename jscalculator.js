let firstNum = null;
let secNum = null;
let sign = null;
let currentArr = [];
let equalsLastPressed = false;
let response;

//mathematic functions called by operator()
function calcAdd (a, b) {
    response = Math.round((a + b) * 100) / 100;
    return response;
}
function calcSubtract (a, b) {
    response = Math.round((a - b) * 100) / 100;
    return response;
}
function calcMultiply (a, b) {
    response = Math.round((a * b) * 100) / 100;
    return response;
}
function calcDivide (a, b) {
    if (b === 0) {
        clearAll();
        response = "let\'s not."
        return response;
    } else {
        response = response = Math.round((a / b) * 100) / 100;
        return response;
    }
    
}


//determines which math function to call based on the c parameter
function operator(a, b, c) {
    if (b === null) {
        return firstNum;
    }
    // if (b === 0 && c === 'divide') {
    //     display.textContent = `let's not`;
    // }
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
            return firstNum;
    }
}

function createNums(x) {
    if (equalsLastPressed === true) {
        clearAll();
    }
    currentArr.push(x);
    console.log(currentArr);
    display.textContent = currentArr.join('');
}

//called by any operator math 
function doMathBish(x) {
    equalsLastPressed = false;
    if (sign === null && firstNum === null) {
        firstNum = parseFloat(currentArr.join(''));
        currentArr.length = 0;
        sign = x;
        console.log(sign);
        console.log(currentArr);
    } else if (sign === null && firstNum !== null) {
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
function equalsPrimer() {
    equalsLastPressed = true;
    return equals();
}

function equals() {
    let answer;
    secNum = parseFloat(currentArr.join(''));
    currentArr.length = 0;
    answer = operator(firstNum, secNum, sign);
    firstNum = answer;
    sign = null
    secNum = null;
    return answer;
}

function clearAll() {
    firstNum = null;
    secNum = null;
    sign = null;
    currentArr.length = 0;
    equalsLastPressed = false;
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
    display.textContent = equalsPrimer();
});

const display = document.querySelector('#display');
