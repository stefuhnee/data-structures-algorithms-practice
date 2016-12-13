'use strict';

const expect = require('chai').expect;

// given a string, give me the length of the last word.
// ASCII, English
// any character can be the string.
// throw an error if empty string
// type exception - throw error
// maximum length - n
// what constitutes a word?
   // any character other than alphanumeric. Don't include that character in the length of the word. ---> word break.

function lengthOfLastWord(strInput) {
  if (!strInput || typeof strInput !== 'string') throw new TypeError('Expected String');
  let isStarted = false;
  let count = 0;
  for (let i = strInput.length - 1; i >= 0; i--) {

    // if char doesn't match alphanumeric char and we've found a valid word to start on.
    if (!strInput[i].match(/^[0-9a-z]+$/) && isStarted) break;

    // if char doesn't match alphanumeric char or it is a space and we haven't found a valid word to start on.
    if (!isStarted && !strInput[i].match(/^[0-9a-z]+$/) || strInput[i].match(/^[\s]+$/)) {
      continue;
    }

    count++;
    isStarted = true;
  }
  return count;
}

console.log(lengthOfLastWord('the word is !')) //2
console.log(lengthOfLastWord('123')) // 3
console.log(lengthOfLastWord('The word!')) //4
console.log(lengthOfLastWord(', !!?'))
