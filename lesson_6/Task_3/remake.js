'use strict';
let buyButton= document.querySelectorAll("button");
let bin = document.getElementById("shopping-cart");
let addedProducts = document.getElementById("added-products");
let summary = document.getElementById("summary");

buyButton.forEach(element => element.addEventListener('click', function(event) {
    let id = event.target.dataset.id;
    let price = event.target.dataset.price;
    let name = event.target.dataset.name;
    let mybasket = new basket(id, price, name);
    mybasket.main();
}));

bin.addEventListener("click", function(event) {
	if (addedProducts.style.display == "none" || addedProducts.style.display == "") {
		addedProducts.style.display = "block";
	} else {
		addedProducts.style.display = "none";
	}
});


let products = {};


class basket {
    
    constructor(id, price, name, count=1) {
        this.id = id;
        this.price = price;
        this.name = name;
        this.count = count;
    }

    

    main() {
        
        this.addProducts();
        this.addToCart();
        this.addRemoveListener();
    }

    addToCart() {
        let productInBasket = document.querySelector(`.count[data-id="${this.id}"]`);
        if (productInBasket) {
            productInBasket.textContent++;
            this.doSum();
            
        } else {
            let row = `
                <tr id="row" data-id="${this.id}">
                    <td>${this.id}</td>
                    <td>${this.name}</td>
                    <td class="product-price" data-id="${this.id}">${this.price}</td>
                    <td class="count" data-id="${this.id}">1</td>
                    <td><i id="${this.id}" data-id="${this.id}" class="fas fa-trash trash"></i></td>
                </tr>
                    `;
            let tbody = document.querySelector('tbody');
            tbody.insertAdjacentHTML("beforeend", row);
            this.doSum();
        }
    }

    addProducts() {
        if (products[this.id] == undefined) {
            products[this.id] = {
                price: this.price,
                name: this.name,
                count: 1,
            }
        } else {
            products[this.id].count++;
        }        
    }
    
    getProductSum() {

    }


    minusSum() {
        if (products[this.id].count == 0) {
            summary.innerText = parseInt(summary.innerText) - parseInt(this.price);
        } else {
            summary.innerText = parseInt(summary.innerText) - parseInt(this.price) * parseInt(products[this.id].count);
        }
    }

    addRemoveListener() {
        let remBut = document.querySelectorAll('.trash');
        for (let i=0; i<remBut.length; i++) {
            remBut[i].addEventListener('click', this.removeProductListener.bind(this));
        };
    }

    removeProductListener() {
        let productInBasket = document.querySelector(`.count[data-id="${this.id}"]`);
        if (productInBasket.textContent == "1") {
            let row = document.querySelector(`#row[data-id="${this.id}"]`);
            row.remove();
            products[this.id].count = 0;
            this.doSum();
            delete this.remBut;
            delete this.productInBasket;
            this.addRemoveListener();
        } else {
            productInBasket.textContent--;
            products[this.id].count--;
            this.doSum();
            delete this.remBut;
            delete this.productInBasket;
            this.addRemoveListener();
        };
    }

    doSum() {
        summary.innerText = 0;
        for(let el in products) {
            summary.innerText = parseInt(summary.innerText) + parseInt(products[el].price) * parseInt(products[el].count);
        };
    }
};

