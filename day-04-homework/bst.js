'use strict';
const BST = require('../trees/bst');
//given a BST you are given a number. Return the path that will contain this sum.
// What constitutes the path?  -- BST adds no relevance to the problem.
  // each edge has a name... you have a function that takes in the parent and it's child and    gives you the name of the edge.
  // getName
// You are given the root.
// return some identifier...
// don't have to start at the root node (a section of the tree) -- stretch goal.
// nodes don't have to be positive
// unidirectional path.
  // branching is possible
// if sum is not possible - return empty set
// more than one possible sum?
// no priority for a given path.
// no need for an exhaustive search -- return first one you find.
// start at the head. ask children if they have a sum that adds to the remainder starting from the child. ********* how to get path? need a back pointer.

// every node has to keep track of what the sum is at it's point. (aggregated sum on the node constructor) - stores the sum as it is traversed.
// every node has a property - isValidPath. true/false. walk the tree from the root when you've found a sum in order to find the path -- print the nodes that have isValidPath.
// if multiple paths, would need to store a path ID.

function findSum(tree, target) {

  let path = [];

  function getSum(node, currentSum) {
    console.log('value', node.value);
    console.log('current sum', currentSum);
    node.aggregatedSum = currentSum + node.value;
    console.log('agg sum', node.aggregatedSum)
    if (node.aggregatedSum === target) {
      node.validPath = true;
      return true;
    }
    if (!node.validPath && node.left) node.validPath = getSum(node.left, node.aggregatedSum);
    if (!node.validPath && node.right) node.validPath = getSum(node.right, node.aggregatedSum);
    return node.validPath;
  }

  function findPath(node) {
    while (node && node.validPath) {
      console.log('node value in path', node.value)
      path.push(node.value);
      if (node.left && node.left.validPath) node = node.left;
      else if (node.right && node.right.validPath) node = node.right;
      else node = null;
    }
    return path;
  }

  if (getSum(tree.root, 0)) {
    console.log('hit');
    return findPath(tree.root);
  }
  return false;
}


let myBST = new BST();
myBST.addNodeWithValue(10);
myBST.addNodeWithValue(8);
myBST.addNodeWithValue(11);
myBST.addNodeWithValue(7);
myBST.addNodeWithValue(9);
myBST.addNodeWithValue(4);
myBST.addNodeWithValue(19);
myBST.addNodeWithValue(10);

console.log(findSum(myBST, 24));
