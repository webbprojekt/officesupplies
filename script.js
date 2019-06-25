let init = () => {

	/*   ---------------INITIALISE SUBMENU-----------------  */
	const submenuItems = ['Paper clips', 'Post-it notes', 'Staples', 'Hole punches', 'Paper', 'Binders', 'Staplers', 'Laminators', 'Fax machines', 'Computers', 'Photocopiers', 'Cash registers', 'Office furniture', 'Office furniture', 'Chairs', 'Cubicles', 'Filing cabinet', 'Armoire desks'];
	let listTemp = '';
	submenuItems.forEach(value => {
		listTemp += `<li class="listItem"><a href="#">${value}</a></li>`;
	});
	document.getElementsByClassName("submenu-list")[0].innerHTML = listTemp;
	let list = document.querySelectorAll(".submenu-list a");
	list[4].classList.add('active');

	/*   ---------------INITIALISE PRODUCT DATA-----------------  */
	const data = [{
		price: '670.60',
		oldprice: '565.00',
		title: 'Paper',
		colors: ['white', 'yellow', 'green'],
		description: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>'
	}]
	document.getElementsByClassName("product")[0].innerHTML = data[0].title;
	document.getElementsByClassName("price")[0].innerHTML = `${data[0].price.replace('.',',')} kr`;
	document.getElementsByClassName("oldprice")[0].innerHTML = `${data[0].oldprice.replace('.',',')} kr`;
	document.getElementsByClassName("description")[0].innerHTML = data[0].description;

	let selectTemp = '';
	data[0].colors.forEach(value => {
		selectTemp += `<option value="${value}">${value}</option>`;
	});
	document.getElementsByClassName("select")[0].innerHTML = selectTemp;


	/*    ---------------BUY BUTTON-----------------  */
	const cart = [];
	const button = document.querySelector(".buy");
	button.addEventListener('click', function () {
		cart.push(data[0])
		/*    ---------------UPDATE CART-----------------  */
		const cartTotal = cart.reduce((total, currentValue) => {
			return total + parseFloat(currentValue.price);
		}, 0)

		const cartTotalFormat = cartTotal.toFixed(2).replace('.', ',');

		document.getElementsByClassName("total")[0].innerHTML = `${(cartTotalFormat.length < 7) ? cartTotalFormat : cartTotalFormat[0] + ' ' + cartTotalFormat.substr(cartTotalFormat.length - 6)} kr`;
		document.getElementsByClassName("quantity")[0].innerHTML = `${cart.length} st`;
	});


	/*    ---------------READ MOORE BUTTON-----------------  */
	const readMorebtn = document.querySelector(".read-more");
	let state = 'height';
	readMorebtn.addEventListener('click', () => {
		if (state === 'height') {
			document.getElementById("description").style.height = "auto";
			document.getElementById("read-more").innerHTML = "- close -";
			state = 'auto';
		} else {
			document.getElementById("description").style.height = "260px";
			document.getElementById("read-more").innerHTML = "- read moore -";
			state = 'height';
		}
	})


	/*    ---------------SWAP PRODUCT IMGs-----------------  */
	const swapImgBtns = document.querySelectorAll(".product-image");
	swapImgBtns.forEach(btn => btn.addEventListener('click', () => {
		const tempSrc = btn.getAttribute('src');
		document.getElementById("_big").setAttribute('src', tempSrc);
	}));


	/*    ---------------REVERSE DIV ORDER FOR MOBILE-----------------  */

	const myWidth = window.innerWidth;
	if (myWidth < 768) {
		let display = document.getElementById("product-display")
		let referenceNode = document.querySelector(".info-field")
		referenceNode.after(display);
	}

	let checSize = function (myWidth) {
		if (myWidth < 768) {
			let display = document.getElementById("product-display")
			let referenceNode = document.querySelector(".info-field")
			referenceNode.after(display);
		} else {
			let display = document.getElementById("product-display")
			let referenceNode = document.getElementById("product-info-box")
			referenceNode.before(display);
		}
	}

	let displayWindowSize = () => {
		let myWidth = window.innerWidth;
		checSize(myWidth);
	};
	window.onresize = displayWindowSize;
	window.onload = displayWindowSize;
}

window.onload = init();