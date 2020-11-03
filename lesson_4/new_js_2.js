/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.*/

'use strict';

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price / 1.25;
}

function Product(name, price) {
    this.name = name;
    this.price = price;
}

const prod1 = new Product('myNew', 123);
prod1.make25PercentDiscount();
console.log('w8');
