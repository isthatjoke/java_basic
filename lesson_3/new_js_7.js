/*Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

'use strict';
let letter = 'x';
for (let count = 1; count <= 20; count++) {
    console.log(letter);
    letter += 'x';
}