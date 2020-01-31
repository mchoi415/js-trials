"use strict";


function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  let result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result);
}


function kidsGame(names) {
  let output = names.shift();

  const first_letter_to_words = {};

  for (const name of names) {
    if (!first_letter_to_words[name[0]]) {
      first_letter_to_words[name[0]] = [name];
    } else {
      first_letter_to_words[name[0]].push(name);
    }
  }

  while (True) {
    
  }
}
