// given an expression, find if braces are matching
// closing brace in the appropriate place.
// need to close bracket before trying to close another one.  closing innermost one first.

// '{()}[]{}' well formed
// [{()]

// use a stack

'use strict';

function matchingBrackets(expression) {
  let braceMap = {
    '{':'}',
    '[':']',
    '(':')',
    '}':'{',
    ']':'[',
    ')':'(',
  };
  let originalStack = expression.split('');
  let matcherStack = [originalStack.pop()];

  while (!isEmpty(originalStack)) {
    let OSValue = peek(originalStack);
    let MSValue = peek(matcherStack);
    if (braceMap[OSValue] === MSValue) {
      originalStack.pop();
      matcherStack.pop();
      continue;
    }
    matcherStack.push(originalStack.pop());
    // compare the tops/ends of the stacks
    // not matching, pop off original, push to matcher.
    // matching, pop off both original and matcher.
  }
  if (isEmpty(matcherStack)) return true;
  return false;
}

function peek(stack) {
  return stack[stack.length - 1];
}

function isEmpty(stack) {
  if (stack.length) return false;
  return true;
}

console.log(matchingBrackets('{()}[]{}'));
console.log(matchingBrackets('[{()]'));


// SECOND IMPLEMENTATION - USES ONE stack

'use strict';

function validBraces(braceStr) {

  let map = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  let stack = [];

  for (let i = 0; i < braceStr.length; i++) {
    let current = braceStr[i];
    if (map[current] && map[current] !== stack[stack.length -1]) return false;
    if (map[current] && stack[stack.length - 1] === map[current]) {
      stack.pop();
      continue;
    }
    stack.push(current);
  }

  if (stack.length > 0) return false;
  return true;
  // Every time we come across an open brace, we'll want to push it into stack1.
  // If it's a closing brace, we compare it to the top of the stack and pop it off if it is the same as the prior item in the stack.
}

console.log(validBraces('({[]})')); //true
console.log(validBraces('(){}')); //true
console.log(validBraces('({)')); //false
console.log(validBraces('()[}')); //false
console.log(validBraces('}(){')); //false
