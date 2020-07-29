"use strict";


// 1. isHometown

// Define your function here
function isHometown(town) {

	return town === 'San Francisco';
}
//console.log(isHometown('San Francisco'));
//console.log(isHometown('San Jose'));


// 2. getFullName

function getFullName(firstName, lastName) {

	return(`${firstName} ${lastName}`);
}
console.log(getFullName('Stephanie', 'Resis'));

// 3. calculateTotal

function calculateTotal(price, state, tax =0.05) {
	const subtotal = price * (1 + tax);
	let fee = 0;

	if (state === 'CA') {
		fee = (0.03 * subtotal);
	}
	else if (state === 'PA') {
		fee = 2;
	}
	else if (state === 'MA') {
		if (base_price <= 100) {
			fee = 1;
		}
		else {
			fee = 3;
		}
	}
	return subtotal + fee;
}
console.log(calculateTotal(40, 'CA', 0.05));
