// get the list from sessionStorage first
/*
let list = sessionStorage.getItem("list");
let l = JSON.parse(sessionStorage.getItem("list"));

function remove(e, index){


	// update to most recent list
	l = JSON.parse(sessionStorage.getItem("list"));

	// for checkout payment
	let price = l[index].price;
	updateTotal(-price);

	// hide div
	e.parentNode.parentNode.parentNode.style.display='none';

	// remove element from list
	l.splice(index, 1);

	// store this new list
	sessionStorage.setItem("list", JSON.stringify(l));

	//console.log(sessionStorage.getItem("cartNumber"));
	//update the local storage
	sessionStorage.setItem("cartNumber", sessionStorage.getItem("cartNumber")-1);
}

function calcNewIndex(list) {
	// assuming list is an array of dishes
	for(let i = 0; i < list.length; i++) {
		list[i].index = i;
	}
	return list;
}

function createTotal (newprice){
	let total = document.getElementById("total");

	let para = document.createElement("P");
	para.setAttribute("id","subtotal");
	let t = document.createTextNode("Subtotal: $0.00" );
	para.appendChild(t);
	total.appendChild(para);

	para = document.createElement("P");
	para.setAttribute("id","estTax");
	t = document.createTextNode("Estimated Tax: $0.00");
	para.appendChild(t);
	total.appendChild(para);

	para = document.createElement("P");
	para.setAttribute("id","deliv");
	t = document.createTextNode("Delivert Fee: $5.00");
	para.appendChild(t);
	total.appendChild(para);

	para = document.createElement("P");
	para.setAttribute("id","estTotal");
	let para2 = document.createElement("B");
	t = document.createTextNode("Estimated Total:     $"+(5*1.08));
	para2.appendChild(t);
	para.appendChild(para2);
	total.appendChild(para);
}

let curTotal = 0;

function updateTotal( price){
	curTotal=(curTotal+ price);

	let subt = "Subtotal: $" + curTotal.toFixed(2);
	document.getElementById("subtotal").innerHTML = subt;

	let newTax = (curTotal*0.08).toFixed(2);
	let tax = "Estimated Tax: $" + newTax;
	document.getElementById("estTax").innerHTML = tax;

	let totnumber = (5+curTotal*1.08).toFixed(2);
	let tot = "Estimated Total:     $"+totnumber;
	document.getElementById("estTotal").innerHTML = tot;
}


export function dish(name, price, img, index){
	this.name = name;
	this.price=price;
	this.img= img;
	this. index = index;
}

let index=0;

function addElement(name, price, img){
	let li = document.createElement("li");
	let div1 = document.createElement("div");
	div1.id = name;
	div1.className = "selection";

	//p
	let para = document.createElement("P");
	let t = document.createTextNode(name);
	para.appendChild(t);
	div1.appendChild(para);

	//img
	let showimg = document.createElement("IMG");
	showimg.setAttribute("src", img);
    showimg.setAttribute("alt", "alt=a picture of the product");
	div1.appendChild(showimg);

	//div quantity
	let div2 = document.createElement("div");
	div2.className = "quantity";

	//form
	let form = document.createElement("FORM");
	form.setAttribute("action", "/action_page.php");

	//span
	let span = document.createElement("SPAN");
	t = document.createTextNode("Quantity:");
	span.appendChild(t);
	form.appendChild(span);

	//input 
	let input = document.createElement("INPUT");
	input.setAttribute("type", "number");
	input.setAttribute("name", "quantity");
	input.setAttribute("min", "0");
	input.setAttribute("max", "99");	
	form.appendChild(input);

	div2.appendChild(form);

	//removeItem
	let div3 = document.createElement("div");
	div3.className = "removeItem";
	//remove button
	let button = document.createElement("BUTTON");
	button.setAttribute("onclick", "remove(this," + index +")");
	t = document.createTextNode("remove");
	button.appendChild(t);
	div3.appendChild(button);

	div2.appendChild(div3);

	div1.appendChild(div2);

	//p
	para = document.createElement("P");
	para.className = "e1";
	t = document.createTextNode("totoal price is "+ price);
	para.appendChild(t);
	div1.appendChild(para);

	//append to the ul list
	li.appendChild(div1);
	document.getElementById("myUL").appendChild(li);

	updateTotal(price);
	l.push(new dish(name, price, img, index++));

}


function showCart(){
	let i=0;
	let number = l.length;
	for (i=0;i<number;i++){
		addElement(l[i].name, l[i].price, l[i].img);
	}
}
*/