"use strict";


// 1. printIndices
function printIndices(items) {

	for (const i in items) {
		console.log(`${items[i]} ${i}`);
	;}

}
//printIndices(['apple', 'berry', 'cherry'])


// 2. everyOtherItem
function everyOtherItem(items) {

	const result = [];
	for (const i in items) {
		if (i % 2 === 0) {
			result.push(items[i]);
		}
	}
	return result;
}
//console.log(everyOtherItem(['apple', 'berry', 'cherry']))


// 3. smallestNItems
function smallestNItems(items, n) {

	const sortedItems = items.sort((a, b) => a - b);
	const sortedNItems = sortedItems.slice(0, n);

	sortedNItems.reverse();

	return sortedNItems;
}
// console.log(smallestNItems([1, 30, 4, 21, 1000], 3))
