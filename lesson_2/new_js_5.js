/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/
'use strict';
let a = +prompt('Введите первое число: ');
let b = +prompt('Введите второе число: ');
let c = prompt('Укажите математическую операцию (сложение, вычитание, умножение, деление: ');

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

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'сложение':
            alert('Сумма чисел = ' + doAddition(arg1, arg2));
            break;
        case 'вычитание':
            alert('Разность чисел = ' + doSubtraction(arg1, arg2));
            break;
        case 'умножение':
            alert('Произведение чисел = ' + doMultiplication(arg1, arg2));
            break;
        case 'деление':
            alert('Частное чисел = ' + doDivide(arg1, arg2));
            break;
        default:
            alert('Такого математического действия нет');
    }
}

mathOperation(a, b, c);