/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.*/
'use strict';
let a = +prompt('Введите первое число: ');
let b = +prompt('Введите второе число: ');

function doAddition(val_1, val_2) {
    return val_1 + val_2;
}

function doSubtraction(val_1, val_2) {
    return val_1 - val_2;
}

function doMultiplication(val_1, val_2) {
    return val_1 * val_2;
}

function doDivide(val_1, val_2) {
    return val_1 / val_2;
}

alert('Сумма чисел = ' + doAddition(a, b));
alert('Разность чисел = ' + doSubtraction(a, b));
alert('Произведение чисел = ' + doMultiplication(a, b));
alert('Частное чисел = ' + doDivide(a, b));