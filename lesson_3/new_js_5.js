/*Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort */

'use strict';
const products = [ 
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg", 
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    }, 
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ] 
    },
    {
        id: 8,
        price: 78,
    }
];

let photoProd = products.filter(function(prod) {
    if (prod.photos && prod.photos.length > 0)
        return prod.photos;
});
console.log(photoProd);
products.sort(function(a, b) {
    if (a.price > b.prie) {
    return 1;
    }
    if (a.price < b.price) {
    return -1;
    }
    return 0;
});
console.log(products);