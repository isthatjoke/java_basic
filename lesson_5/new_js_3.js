'use strict';
let modal = document.getElementById('modal');
let closeFunc = document.getElementById('span');
let btn = document.querySelector('button');
let txt = document.getElementById('text');

btn.addEventListener('click', function(event) {
	doBefore();
});

closeFunc.addEventListener('click', function(event) {
    doAfter();
	setTimeout(close, 300);
});

window.onclick = function(event) {
    if (event.target != btn && event.target != modal && event.target != txt) {
        doAfter();
	    setTimeout(close, 300);
    }
}

function close() {
    modal.style.display = "none";
}

function doBefore() {
    modal.style.display = "block";
    let selector = document.querySelector('.modal_class');
    selector.classList.add('magictime', 'twisterInUp');
}

function doAfter() {
    let selector = document.querySelector('.modal_class');
    selector.classList.remove('magictime', 'twisterInUp');
    selector.classList.add('magictime', 'magic');
	setTimeout(close, 300);
}
