"use strict";


// 1. countWords
function countWords(phrase) {
  let wordCount = {}

  const words = phrase.split(' ');

  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else { 
     wordCount[word] = 1;
    }
  }

  return wordCount;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }

  if (!melon_prices[price]) {
    return null;
  }

  return melon_prices[price].sort();
}
