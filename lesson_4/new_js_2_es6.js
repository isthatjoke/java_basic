/*Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.*/
'use strict';
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    make25PercentDiscount() {
        this.price = this.price / 1.25;
    }
}

const newProduct = new Product('new_one', 100500);
newProduct.make25PercentDiscount();
console.log('w8');