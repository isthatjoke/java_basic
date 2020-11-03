'use strict';
let table = document.createElement('table');
let color = true;
let tr2 = document.createElement('tr');
let letters = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'J', 'H'];

for (let i=0; i<8; i++) {
	let tr = document.createElement('tr');
	let td1 = document.createElement('td');
	td1.style.width = "50px";
	td1.style.height = "50px";
	td1.style.border = "1px solid black";
	td1.innerHTML = 8-i;
	tr.appendChild(td1);
	table.appendChild(tr);
	for (let j=0; j<8; j++) {
		if (j==0)
			color = !color;
		let td2 = document.createElement('td');
		td2.style.width = "50px";
		td2.style.height = "50px";
		td2.style.border = "1px solid black";
		if (color){
			td2.style.background = "black";
		} else {
			td2.style.background = "white";
		}
		tr.appendChild(td2);
		color = !color;
		if (i==1) {
			let img = new Image(40, 40);
			img.src = "pawn_bl.jpg"
			td2.appendChild(img);
		} else if ((i==0 && j==0) || (i==0 && j==7)) {
			let img = new Image(40, 40);
			img.src = "rook_bl.jpg"
			td2.appendChild(img);
		} else if ((i==0 && j==2) || (i==0 && j==5)) {
			let img = new Image(40, 40);
			img.src = "bishop_bl.jpg"
			td2.appendChild(img);
		} else if ((i==0 && j==1) || (i==0 && j==6)) {
			let img = new Image(40, 40);
			img.src = "knight_bl.jpg"
			td2.appendChild(img);
		} else if (i==0 && j==3) {
			let img = new Image(40, 40);
			img.src = "queen_bl.jpg"
			td2.appendChild(img);
		} else if (i==0 && j==4) {
			let img = new Image(40, 40);
			img.src = "king_bl.jpg"
			td2.appendChild(img);
		} else if (i==6) {
			let img = new Image(40, 40);
			img.src = "pawn_wt.jpg"
			td2.appendChild(img);
		} else if ((i==7 && j==0) || (i==7 && j==7)) {
			let img = new Image(40, 40);
			img.src = "rook_wt.jpg"
			td2.appendChild(img);
		} else if ((i==7 && j==2) || (i==7 && j==5)) {
			let img = new Image(40, 40);
			img.src = "bishop_wt.jpg"
			td2.appendChild(img);
		} else if ((i==7 && j==1) || (i==7 && j==6)) {
			let img = new Image(40, 40);
			img.src = "knight_wt.jpg"
			td2.appendChild(img);
		} else if (i==7 && j==3) {
			let img = new Image(40, 40);
			img.src = "queen_wt.jpg"
			td2.appendChild(img);
		} else if (i==7 && j==4) {
			let img = new Image(40, 40);
			img.src = "king_wt.jpg"
			td2.appendChild(img);
		}
	}
	table.appendChild(tr);
}

for (let h=0; h<9; h++){
	let td3 = document.createElement('td');
	td3.style.width = "50px";
	td3.style.height = "50px";
	td3.style.border = "1px solid black";
	td3.style.background = "white";
	td3.innerHTML = letters[h];
	tr2.appendChild(td3);
}
table.appendChild(tr2);
document.body.appendChild(table);



