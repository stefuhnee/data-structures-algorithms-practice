'use strict';

const expect = require('chai').expect;

function isPalindrome(strInput) {
  if (typeof strInput !== 'string') throw new TypeError('Expected a string');
  strInput = strInput.toLowerCase().split(' ').join('');
  for (let i = 0; i < Math.floor(strInput.length / 2) + 1; i++) {
    let char = strInput[i];
    let mirror = strInput[strInput.length - 1 - i];
    if (!char.match((/^[0-9a-z]+$/))) throw new SyntaxError('Non alphanumeric character');
    if (char === mirror) continue;
    else return 0;
  }
  return 1;
}

describe('testing isPalindrome', function() {
  it('should detect palindromes', () => {
    expect(isPalindrome('a')).to.equal(1);
    expect(isPalindrome('bb')).to.equal(1);
    expect(isPalindrome('Gog')).to.equal(1);
    expect(isPalindrome('racecar')).to.equal(1);
    expect(isPalindrome('satt as')).to.equal(1);
  });
  it('should throw an exception error', () => {
    expect(() => isPalindrome('r!r')).to.throw(SyntaxError, 'Non alphanumeric character');
    expect(() => isPalindrome({})).to.throw(TypeError, 'Expected a string');
  });
});
