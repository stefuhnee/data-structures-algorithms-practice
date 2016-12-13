'use strict';

const expect = require('chai').expect;

function fizzBuzz(pairings) {
  let output;
  for (let i = 1; i <= 1000; i++) {
    output = '';
    for (let key in pairings)
      if (!(i % parseInt(key))) {
        output += pairings[key]
      }
    console.log(output || i);
  }
}

fizzBuzz({
  3: 'Fizz',
  5: 'Buzz',
});

describe('testing fizzBuzz', function() {

})
