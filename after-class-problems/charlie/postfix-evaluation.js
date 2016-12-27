'use strict';

const math = require('mathjs');

function evaluatePostFixWithStack(operationArr) {
  let stack = [];
  let evaluated = '';
  let cur = 0;
  while (cur < operationArr.length) {
    console.log('evaluated', evaluated);
    console.log('thing at cur', operationArr[cur]);
    console.log('stack', stack);
    if (typeof operationArr[cur] === 'number') {
      stack.push(operationArr[cur]);
    }
    else {
      let operand = stack.pop();
      console.log('operand', operand);
      console.log('stack in else', stack);
      if (!stack[stack.length - 1]) evaluated += operand + operationArr[cur];
      if (typeof stack[stack.length - 1] === 'number') evaluated += '(' + operand + operationArr[cur] + stack.pop() + ')';
      else {
        evaluated += operationArr[cur] + operand;
      }
    }
    cur++;
  }
  console.log('evaluated', evaluated);
  return math.eval(evaluated);
}

// console.log(evaluatePostFixWithStack([2, 4, '+', 7, '*']));
console.log(evaluatePostFixWithStack([2, '+', 4, 7, '*']));

/*
Look for an operand, type of !number
eval
use a stack
[];
*/

// =. [2, 4, '+', 7, '*']
// (2 + 4) * 7
// 2 4 + 7 * --> 42

// 2 + (4 * 7)
// 2 + 4 7 * --> 30

// 2 * (4 + 7)
// 2 * 4 7 +  ---> 22
