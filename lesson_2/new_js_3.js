'use strict';
let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');


function doCheck_v1(val_1, val_2) {
    if (val_1 >= 0 && val_2 >= 0 && val_1 >= val_2)
        alert('Разность чисел ' + val_1 + ' и ' + val_2 + ' = ' + (val_1 - val_2));
    
    if (val_1 >= 0 && val_2 >= 0 && val_2 > val_1)
        alert('Разность чисел ' + val_2 + ' и ' + val_1 + ' = ' + (val_2 - val_1));
    
    if (val_1 < 0 && val_2 < 0)
        alert('Произведение чисел ' + val_1 + ' и ' + val_2 + ' = ' + (val_1 * val_2));
    
    if ((val_1 >= 0 && val_2 < 0) || (val_1 < 0 && val_2 >= 0))
        alert('Сумма чисел ' + val_1 + ' и ' + val_2 + ' = ' + (val_1 + val_2));
}

function doCheck_v2(val_1, val_2) {
    if ((Math.sign(val_1) == 1 || Math.sign(val_1) == 0) && (Math.sign(val_2) == 1 || Math.sign(val_2) == 0))
        alert('Разность чисел ' + val_1 + ' и ' + val_2 + ' = ' + (val_1 - val_2)); // не стал делать условие по величине переменных "а" и "б"
    
    if (Math.sign(val_1) == -1 && Math.sign(val_2) == -1)
        alert('Произведение чисел ' + val_1 + ' и ' + val_2 + ' = ' + (val_1 * val_2));
    
    if (Math.sign(val_1) == -1 || Math.sign(val_2) == -1)
        alert('Сумма чисел ' + val_1 + ' и ' + val_2 + ' = ' + (val_1 + val_2));
}

doCheck_v1(a, b);
doCheck_v2(a, b);
