'use strict';

function isPermutation(str1, str2) {
  let map = {};
  if (str1.length === 0 || str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    map[str1[i]] ? map[str1[i]]++ : map[str1[i]] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (map[str2[i]]) {
      if (map[str2[i]] > 1) map[str2[i]]--;
      else delete map[str2[i]];
    }
    else return false;
  }
  if (Object.keys(map).length) return false;
  return true;
}

console.log(isPermutation('tatdder', 'tatdder'));
