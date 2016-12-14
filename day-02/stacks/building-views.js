'use strict';

// set of buildings in a line. they are all laid down east to west.  if there's a building that's taller than the building before it, it blocks the view.
// given a set of buildings, how many buildings have views of the sunset? in the west.
// same dimensions except height.
// [4, 3, 5, 6, 2]

// make stack (view at the bottom).
// pop off one at a time
  // peek at next item
  // is cur > next?
    // yes --> push to new stack
    // no --> throw away.

function buildingsWithViews(heights) {
  let viewStack = [];
  let current;
  let next;
  while (!isEmpty(heights)) {
    current = heights.pop();
    next = peek(heights);
    if (current > next || !next) viewStack.push(current);
  }
  return viewStack;
}

function peek(stack) {
  return stack[stack.length - 1];
}

function isEmpty(stack) {
  if (stack.length) return false;
  return true;
}

console.log(buildingsWithViews([4,3,5,6,2]));
