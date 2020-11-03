/*Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999], мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы tens: 4, //это десятки hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/
'use strict';
let personInput = +prompt('Введите число от 0 до 999: ');
let units = 0;
let tens = 0;
let hundreds = 0;

 
function makeTens(value) {
    units = value % 10;
    tens = Math.floor(value / 10);
}
 
function makeHundreds(value) {
    units = value % 10;
    tens = Math.floor(value / 10 % 10);
    hundreds = Math.floor(value / 100);
}

function determineInteger(units, tens, hundreds) {
    this.units = units;
    this.tens = tens;
    this.hundreds = hundreds;
}
 
 
if (Number.isInteger(personInput) && personInput < 10 && personInput >= 0)
    units = personInput;
else if (Number.isInteger(personInput) && personInput < 100 && personInput >= 10)
    makeTens(personInput);
else if (Number.isInteger(personInput) && personInput < 1000 && personInput >= 100)
    makeHundreds(personInput);
else
    console.log('Ввели неверное число или тип данных');
               
const newInt = new determineInteger(units, tens, hundreds);

    




