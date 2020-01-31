"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const index in items){
      console.log(`${items[index]} ${index}`);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];

  for (const idx in items) {
    if (idx % 2 === 0) {
      result.push(items[idx]);
    }
  }

  return result;
}


// 3. smallestNItems
function smallestNItems(items, n) {
  const sortNumber = items.sort((a, b) => b - a);
  const sliceList = sortNumber.slice(0, n);


  console.log(sliceList);
}
