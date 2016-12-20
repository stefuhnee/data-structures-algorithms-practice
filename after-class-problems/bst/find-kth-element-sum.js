'use strict';

const BST = require('./tree.js');

require('./add-new-node.js');

let testTree = new BST();

// Setting up the tree
testTree.addNewNode(10);
testTree.addNewNode(6);
testTree.addNewNode(20);
testTree.addNewNode(4);
testTree.addNewNode(8);
testTree.addNewNode(19);
testTree.addNewNode(30);
testTree.addNewNode(1);
testTree.addNewNode(5);
testTree.addNewNode(7);
testTree.addNewNode(9);
testTree.addNewNode(29);
testTree.addNewNode(50);
testTree.addNewNode(3);
testTree.addNewNode(4);
testTree.addNewNode(10);
testTree.addNewNode(2);

// function to find the sum of all n children of the kth node.
function findElemSum(head, k) {
  if (!head) throw new Error('Unable to find sum; invalid head given.');
  if (k === 0) throw new Error('k must be greater than 0');
  if (typeof k !== 'number') throw new Error('k must be an integer');
  let counter = 0;
  let sum = 0;

  // Function to recursively find the kth node with minival tree reversal, starting from the smallest node (always far left)
  function findKth(node) {
    if (node.left) findKth(node.left);
    counter++;
    if (counter === k) return getSum(node);
    if (node.right) findKth(node.right);
  }

  // function to find the sum on n node values once the kth node is found
  function getSum(node) {
    sum += node.value;
    if (node.left) getSum(node.left);
    if (node.right) getSum(node.right);
    return sum;
  }
  findKth(head);
  if (counter < k) throw new Error('k is larger than the tree');
  return sum;
}

console.log(findElemSum(testTree.head, 2));
