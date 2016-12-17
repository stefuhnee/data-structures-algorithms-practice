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
  tree.root.insideValidPath = true;
  let path = []

  function getSum(node, currentSum) {
    path.push(node.value);
    node.insideValidPath = true;
    node.aggregatedSum = currentSum + node.value; //work with it.
    currentSum += node.value;
    console.log('node value', node.value);
    console.log('currentSum', currentSum);

    if (node.aggregatedSum === target) {
      return findPath(tree.root);
    }

    if (node.left && node.aggregatedSum < target) {
      node.left.insideValidPath = true;
      getSum(node.left, currentSum);
    }
    if (node.right && node.aggregatedSum < target) {
      node.right.insideValidPath = true;
      getSum(node.right, currentSum);
    }
  }

// while we
  //
  function findPath(node) {
    let path = [];
    if (node.left && node.left.insideValidPath) findPath(node.left);
    if (node.right && node.right.insideValidPath) findPath(node.right);
      path.push(node.value);
      console.log('path', path)
  }

  return getSum(tree.root, 0);
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

console.log(findSum(myBST, 40));
