"use strict";


// 1. countWords
function countWords(phrase) {

  const wordCounts = {};

  for (const word of phrase.split(' ')) {
  	if (wordCounts.hasOwnProperty(word)) {
  		wordCounts[word] += 1;
  	}
  	else {
  		wordCounts[word] = 1;
  	}
  }
  return wordCounts;
}
//console.log(countWords('Hello how are you are you good'));

// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
	const melonPrices = {
		2.50: ['Cantaloupe', 'Honeydew', 'apple'],
		2.05: ['Watermelon'],
		3.25: ['Musk', 'Crenshaw'],
		14.25: ['Christmas']
	};

	if (!melonPrices.hasOwnProperty(price)) {
		return;
	}

	const melonList = melonPrices[price];
	return melonList.sort(); 
}
console.log(getMelonsAtPrice(2.50));