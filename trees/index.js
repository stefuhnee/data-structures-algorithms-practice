'use strict';

const BST = require('./bst');

let myFirstBST =  new BST();

myFirstBST.addNodeWithValue(17)
  .addNodeWithValue(11)
  .addNodeWithValue(21)
  .addNodeWithValue(9)
  .addNodeWithValue(15)
  .addNodeWithValue(19)
  .addNodeWithValue(33)
  .addNodeWithValue(22324);

// myFirstBST.depthFirstTraversal();
myFirstBST.breadthFirstTraversal();
