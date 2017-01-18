'use strict';



function nextLargest(root, target) {
  function traverse(cur) {
    if (target > cur.value) {
      if (cur.right && cur.right.value < target) return traverse(cur.right);
      else return cur;
    }
    if (target <= cur.value) {
      if (cur.left) return traverse(cur.left);
      else if (!cur.left && cur.value >= target) return null;
      else return cur;
    }
  }
  return traverse(root);
}

const BST = require('../../trees/bst.js');

let testTree = new BST();

// Setting up the tree
testTree.addNodeWithValue(10);
testTree.addNodeWithValue(6);
testTree.addNodeWithValue(20);
testTree.addNodeWithValue(4);
testTree.addNodeWithValue(8);
testTree.addNodeWithValue(19);
testTree.addNodeWithValue(30);
testTree.addNodeWithValue(1);
testTree.addNodeWithValue(5);
testTree.addNodeWithValue(7);
testTree.addNodeWithValue(9);
testTree.addNodeWithValue(29);
testTree.addNodeWithValue(50);
testTree.addNodeWithValue(3);
testTree.addNodeWithValue(4);
testTree.addNodeWithValue(10);
testTree.addNodeWithValue(2);

console.log(nextLargest(testTree.root, 20))
