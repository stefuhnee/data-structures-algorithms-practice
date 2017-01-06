'use strict';

function findCoins(sum) {
  let output = [];

  _findCoins('', sum);

  function _findCoins(str, rem) {
    if (rem >= 25) _findCoins(str + '25 ', rem - 25);
    if (rem >= 10) _findCoins(str + '10 ', rem - 10);
    if (rem >= 5) _findCoins(str + '5 ', rem - 5);
    if (rem >= 1) _findCoins(str + '1 ', rem - 1);
    if (rem === 0) output.push(str);
  }
  return output;
}

console.log(findCoins(25));
