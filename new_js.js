"use strict";
let ask_t = prompt("Введите температуру в градусах по Цельсию")
let Tf = (9 / 5) * ask_t
alert('Температура по Фаренгейту - ' + Tf)


let admin
let name
name = 'Василий'
admin = name

let result = 10+10+'10'
console.log(result)
let result2 = 10+'10'+10
console.log(result2)
let result3 = 10+10++'10'
console.log(result3)
let result4 = 10/-''
console.log(result4)
let result5 = 10/+'2,5'
console.log(result5)

/*
1. будет 2010, приведенное к строке
2. будет 101010, приведенное к строке
3. будет ошибка, так как операции с 2 плюсами нет
4. будет -бесконечность
5. будет NaN
*/

/*
let mode = "normal";  - нет, зарезервированное системой
let my_valu3 = 102; - да
let 3my_value3 = "102"; - нет, не должно начинаться с цифры
let __hello__ = "world"; - да, но лучше не надо
let $$$ = "money"; - да
let !0_world = true; - нет
*/

