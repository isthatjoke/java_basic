'use strict';
let bin = document.getElementById("shopping-cart");
let addToCart = document.querySelectorAll("button");
let addedProducts = document.getElementById("added-products");
let table = document.getElementById("products-table");
let tbody = table.children[0];
let summary = document.getElementById("summary");
let price = tbody.children;
let trash = tbody.querySelectorAll(".trash");


addToCart.forEach(element => element.addEventListener('click', function (event) {
    console.log("dir", event.srcElement);
    console.log("dir", table);
    let tr = document.createElement("tr");
    for (let i=0; i<5; i++) {
    	let td = document.createElement("td");
    	if (i==0) {
    		td.innerText = event.target.dataset["id"];
    	} else if (i==1) {
    		td.innerText = event.target.dataset["name"];
    	} else if(i==2) {
    		td.innerText = event.target.dataset["price"];
    		summary.innerText = parseInt(summary.innerText) + parseInt(event.target.dataset["price"]);
    	} else if(i==3) {
    		td.innerText = "1";
    	} else {
    		td.innerHTML = '<i id="trash" class="fas fa-trash trash"></i>';
    		trash = tbody.querySelectorAll("i");
    	}
    tr.appendChild(td);
    
    tbody.insertBefore(tr, tbody.children[tbody.children.length - 1]);
    }
    
    
}));

bin.addEventListener("click", function(event) {
	if (addedProducts.style.display == "none" || addedProducts.style.display == "") {
		console.log("dir", event.target);
		addedProducts.style.display = "block";
	} else {
		addedProducts.style.display = "none";
	}
});


tbody.querySelectorAll(".trash").forEach(element => element.addEventListener('click', function (event) {
	console.log("dir", event.target);
}));






