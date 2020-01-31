"use strict";


function wordsInCommon(words1, words2) {
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word of words1Set) {
    if (words2Set.has(word)) {
      result.add(word);
    }
  }
  return Array.from(result);
}


function kidsGame(names) {
  const output = [names.shift()];

  const first_letter_to_words = {};

  for (const name of names) {
    if (!first_letter_to_words[name[0]]) {
      first_letter_to_words[name[0]] = [name];
    } else {
      first_letter_to_words[name[0]].push(name);
    }
  }

  while (true) {
    const last_word = output[output.length - 1];
    const start_letter = last_word[last_word.length - 1];

    if (!first_letter_to_words[start_letter] || first_letter_to_words[start_letter].length === 0) {
      break;
    }

    const word = first_letter_to_words[start_letter].shift();
    output.push(word);
  }

  return output;
}


const names = ["bagon", "baltoy", "yamask", "starly", "nosepass", "kalob", "nicky", "booger"]
const names2 = ["apple", "berry", "cherry"]
const names3 = ["noon", "naan", "nun"]

console.log(kidsGame(names));
console.log(kidsGame(names2));
console.log(kidsGame(names3));