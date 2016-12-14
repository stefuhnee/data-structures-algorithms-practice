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
