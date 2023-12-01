const buttonPlus = document.getElementById('buttonPlus');
const buttonMinus = document.getElementById('buttonMinus');
const buttonMultiply = document.getElementById('buttonMultiply');
const buttonDivide = document.getElementById('buttonDivide');

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');

function getNumber1() {
    return Number(input1.value);
};
function getNumber2() {
    return Number(input2.value);
};

function makeOperation(operationCode) {
    if (operationCode === '+') {
        var result = getNumber1() + getNumber2();
    } else if (operationCode === '-') {
        var result = getNumber1() - getNumber2();
    } else if (operationCode === '*') {
        var result = getNumber1() * getNumber2();
    } else if (operationCode === '/') {
        var result = getNumber1() / getNumber2();
    } else {
        window.alert('Operation is unknown');
    }
    window.alert(result);
}

function onButtonPlusClick() {
    makeOperation('+');
}
function onButtonMinusClick() {
    makeOperation('-');
}
function onButtonMultiplyClick() {
    makeOperation('*');
}

function onButtonDivideClick() {
    makeOperation('/');
}

buttonPlus.addEventListener('click', onButtonPlusClick)
buttonMinus.addEventListener('click', onButtonMinusClick)
buttonMultiply.addEventListener('click', onButtonMultiplyClick)
buttonDivide.addEventListener('click', onButtonDivideClick)