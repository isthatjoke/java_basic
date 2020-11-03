'use strict';
/*let prodDesc = document.getElementById('prod_desc');
let prodImg = document.getElementById('prod_img')
let btn = document.querySelectorAll('button');
let products = document.querySelectorAll('product')

btn.forEach(element => element.addEventListener('click', function(event) {
	prodDesc.style.display = "block";
	prodImg.style.display = "none";
}));*/

let btn = document.querySelectorAll('button');
btn.forEach(element => element.addEventListener('click', function(event) {
      	console.log("Clicked", event.target.textContent);
      	console.dir(event.target.parentNode);
      	if (event.target.textContent === "Подробнее") {
      		event.target.textContent = "Отмена";
      		event.target.parentNode.children[2].style.display = "none";
      		event.target.parentNode.children[1].style.display = "block";
      	} else {
      		event.target.textContent = "Подробнее";
      		event.target.parentNode.children[1].style.display = "none";
      		event.target.parentNode.children[2].style.display = "block";
      	}
}));






