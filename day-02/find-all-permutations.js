'use strict';

// unique string with no repetitions, no punctuation
// give code that prints out all permutations of characters

// hold on the character reference.

// 'abc' ---> 'acb'
//       ---> 'bac'
//       ---> 'bca'
//       ---> 'cab'
//       ---> 'cba'

/*
  STEPS: Mutate the string;
  1. Given String.
  2. Keep one character static (a) - keep in front
    - abc
    - acb (swap)
  3. Keep one character static (b) - keep in front
    - bac (swap)
    - bca (swap)
  4. Keep one chraacter static (c) - keep in front
    - cba
    - cab
*/

function findPermutations(str) {
  str = str.split('');
  let permArray = [];
  // base case: if we're at the final character of the string.
  // split string into "start" and "rest"
  perm('', str);

  function perm(prefix, suffix) {
    // ONLY PERMUTING SUFFIX
    // combine prefix plus all permutations of suffix
    if (suffix.length === 1) return permArray.push(prefix + suffix);
    // once we return, we return to the 2nd call of perm, and the i value continues to iterate. When we call perm again without returning, i is reinitialized at 0.
    // if suffix has more than one character we want to swap all the characters in the suffix.
    // move the suffix[i] to part of the prefix.
    for (let i = 0; i < suffix.length; i++) { //only permuting suffix
      // swap i character with the 0th character in the suffix.
      // --> move the pointer's character to the start.
      swap(0, i, suffix); // swap the 0th with the ith inside of the suffix.
      perm(prefix + suffix[0], suffix.slice(1));
    }
  }

  function swap(idxA, idxB, suff) {
    let temp = suff[idxA];
    suff[idxA] = suff[idxB];
    suff[idxB] = temp;
  }

  return permArray;
}

console.log(findPermutations('abc'));

//
//
// function findPermutations(inputStr) {
//   if (inputStr.length === 1) return inputStr;
//   let letter = inputStr[0];
//   let refLetterIndex;
//   let suffix = inputStr.substring(1);
//   let perm;
//   let strArr;
//
//   function getSuffix(suffix) {
//     while (suffix.length > 1) {
//       _findPermutations(letter, suffix);
//       letter = suffix[0];
//       suffix = suffix.substring(1);
//       getSuffix(suffix);
//     }
//   }
//    // hold on to 'a'  // rearrange 'b' and 'c'
//   function _findPermutations(refLetter, suf) {
//     strArr = inputStr.split('');
//     refLetterIndex = strArr.indexOf(refLetter);
//     for (let i = 0; i < suf.length; i++) {
//       console.log('strArr', strArr);
//       console.log(refLetter, 'refLetter')
//       console.log('suf', suf)
//       perm = strArr.slice(0, strArr[refLetterIndex]).join('') + strArr.slice(strArr[refLetterIndex], strArr.length);
//       console.log(perm);
//     }
//
//   }
//   getSuffix(suffix);
// }
//
// console.log(findPermutations('abc'));



//// hold on to a reference letter.
