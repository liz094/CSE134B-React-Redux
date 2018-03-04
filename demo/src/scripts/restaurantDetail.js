//TODO 
// the local storage does not work!
//let list = [];
//sessionStorage.setItem("cartNumber", 0);
/*
function addToCart(name, price, img){
	let list = JSON.parse(sessionStorage.getItem("list"));
	if (list==null){
		list = [];
	}
	list.push(new dish (name, price, img));
	sessionStorage.setItem("list", JSON.stringify(list));
	updateCartNum();
}

function updateCartNum(){
	let number = sessionStorage.getItem("cartNumber");-
	number++;
	let newcart = "Cart (" + number + ")"
	document.getElementById("cart").innerHTML = newcart;
	console.log("setting sessionStorage to new cart value");
	sessionStorage.setItem("cartNumber", number);
	console.log("localstore is now " + sessionStorage.getItem("cartNumber"));
}


export function showCartNum(){
	let number = sessionStorage.getItem("cartNumber");
	if (number==null){
		number=0;
	}
	console.log("on load, number is " + number);
	let para = document.getElementById("cartlogout");
	let a = document.createElement("A");
	a.setAttribute("href", "./cart.html");
	a.setAttribute("id", "cart");	
	let t = document.createTextNode("Cart (" + number + ")");
	a.appendChild(t);
	para.appendChild(a);
}




*/