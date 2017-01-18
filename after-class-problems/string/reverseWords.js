'use strict';

function reverseWords(str) {

  str = str.split('');
  let start = 0;
  let temp;
  let end;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      end = i - 1;
      while (end !== start && end - 1 !== start + 1) {
        console.log('end', end);

        console.log('start', start);
        temp = str[start];
        str[end] = str[start];
        str[start] = temp;
        console.log('str', str);
        start++;
        end--;
      }
    }
  }
  return str;
}

console.log(reverseWords('hello this is a string'));
