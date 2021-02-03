'use strict'

const MONITOR = document.querySelector('#screen');

const CLEAN_ENTRY = document.querySelector('#clean-entry');
const CLEAN = document.querySelector('#clean');
const BACKSPACE = document.querySelector('#backspace');
const DINOMINATOR = document.querySelector('#denominator');
const GRANT_TOTAL = document.querySelector('#grant-total');

const MEMORY_CLEAN = document.querySelector('#memory-clean');
const MEMORY_READ = document.querySelector('#memory-read');
const MEMORY_ADD = document.querySelector('#memory-add');
const MEMORY_SUBTRACT = document.querySelector('#memory-subtract');
const CHANGE_SIGN = document.querySelector('#change-sign');

const SEVEN = document.querySelector('#seven');
const EIGHT = document.querySelector('#eight');
const NINE = document.querySelector('#nine');
const DEVIDED = document.querySelector('#devided');
const RADICAL = document.querySelector('#radical');

const FOUR = document.querySelector('#four');
const FIVE = document.querySelector('#five');
const SIX = document.querySelector('#six');
const MULTIPLY = document.querySelector('#multiply');
const PERCENT= document.querySelector('#percent');

const ONE = document.querySelector('#one');
const TWO = document.querySelector('#two');
const THREE = document.querySelector('#three');
const SUBTRACKT = document.querySelector('#subtract');
const EQUAL = document.querySelector('#equal');

const NUM_NULL = document.querySelector('#num-null');
const NUM_TWO_NULL = document.querySelector('#num-two-null');
const POINT = document.querySelector('#point');
const ADD = document.querySelector('#add');

ONE.addEventListener('click', () => doInput('1'))
TWO.addEventListener('click', () => doInput('2'))
THREE.addEventListener('click', () => doInput('3'))
FOUR.addEventListener('click', () => doInput('4'))
FIVE.addEventListener('click', () => doInput('5'))
SIX.addEventListener('click', () => doInput('6'))
SEVEN.addEventListener('click', () => doInput('7'))
EIGHT.addEventListener('click', () => doInput('8'))
NINE.addEventListener('click', () => doInput('9'))
NUM_NULL.addEventListener('click', () => doInput('0'))
NUM_TWO_NULL.addEventListener('click', () => doInput('00'))

function doInput(num) {
    if (MONITOR.value == '0' && MONITOR.value.indexOf('.') == -1 || MONITOR.value === int || checkEqual === true) {
        checkEqual = false;
        MONITOR.value = num;
    } else {
        MONITOR.value = MONITOR.value + num;
    }
    
}

POINT.addEventListener('click', () => {
    if (MONITOR.value.indexOf('.') == -1) {
        MONITOR.value = MONITOR.value + '.';
    }
})


CLEAN_ENTRY.addEventListener('click', function () {
    MONITOR.value = '0';
})

BACKSPACE.addEventListener('click', function () {
    MONITOR.value = MONITOR.value.slice(0, (MONITOR.value.length - 1));
})


PERCENT.addEventListener('click', function () {
    MONITOR.value = getMultiplied(int, String(parseFloat(MONITOR.value)/100));
})

RADICAL.addEventListener('click', function () {
    MONITOR.value = Math.sqrt(parseFloat(MONITOR.value));
})

CHANGE_SIGN.addEventListener('click', function() {
    if (parseFloat(MONITOR.value) > 0) {
        MONITOR.value = 0 - MONITOR.value;
    } else {
        MONITOR.value = Math.abs(parseFloat(MONITOR.value));
    }
})

DINOMINATOR.addEventListener('click', function () {
    MONITOR.value = 1/parseFloat(MONITOR.value);
})


var operation;
var int = 0;
var gt = 0;

ADD.addEventListener('click', function () {
    checkInt()
    operation = getSum;
})

function getSum (num1, num2) {
    return (parseFloat(num1) + parseFloat(num2)).toFixed(floatLength(num1, num2));
}

SUBTRACKT.addEventListener('click', function () {
    checkInt()
    operation = getSub;
})

function getSub (num1, num2) {
    return (parseFloat(num1) - parseFloat(num2)).toFixed(floatLength(num1, num2));
}

function floatLength(n1, n2) {
    n1 = n1.split('.')[1];
    n2 = n2.split('.')[1];
    if (n1 === undefined && n2 === undefined) {
        return 0;
    }
    if (n1 === undefined) {
        return n2.length;
    }
    if (n2 === undefined) {
        return n1.length;
    }

    return Math.max(n1.length, n2.length);
}

MULTIPLY.addEventListener('click', function () {
    checkInt()
    operation = getMultiplied;
})

function getMultiplied (num1, num2) {
    let n1 = num1.split('.')[1];
    let n2 = num2.split('.')[1];
    if (n1 === undefined && n2 === undefined) {
        return num1*num2;
    }
    if (n1 === undefined) {
        return (num1*num2).toFixed(n2.length);
    }
    if (n2 === undefined) {
        return (num1*num2).toFixed(n1.length);
    }

    return (num1*num2).toFixed(n1.length + n2.length);
}

DEVIDED.addEventListener('click', function () {
    checkInt()
    operation = getDevided;
})

function getDevided (num1, num2) {
    return num1/num2;
}

var checkEqual = false;

EQUAL.addEventListener('click', function () {
    checkEqual = true;
    checkInt()
    gt = gt + parseFloat(MONITOR.value);
    operation = undefined;
    int = 0;
})

function checkInt () {
    if (!int) {
        int = MONITOR.value;
    } else {
        int = operation(int, MONITOR.value);
        MONITOR.value = int;
    }
}



CLEAN.addEventListener('click', function () {
    MONITOR.value = '0';
    int = 0;
    operation = undefined;
    mem = 0;
})

var mem = 0;

MEMORY_ADD.addEventListener('click', function () {
    mem = mem + parseFloat(MONITOR.value);
})

MEMORY_CLEAN.addEventListener('click', function () {
    mem = 0;
})
MEMORY_READ.addEventListener('click', function () {
    MONITOR.value = mem;
})

MEMORY_SUBTRACT.addEventListener('click', function () {
    mem = mem - parseFloat(MONITOR.value);
})


GRANT_TOTAL.addEventListener('click', function () {
    MONITOR.value = gt;
})