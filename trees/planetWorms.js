'use strict';

const BST = require('./bst');

const myBST = new BST();
myBST.addNodeWithValueAndInputs(23, [12, 3])
.addNodeWithValueAndInputs(31, ['h', 234])
.addNodeWithValueAndInputs(3, ['p', {}, 0])
.addNodeWithValueAndInputs(5, [true])
.addNodeWithValueAndInputs(56, [false, 23])
.addNodeWithValueAndInputs(33, ['z', 'z'])
.addNodeWithValueAndInputs(2, 'face')
.addNodeWithValueAndInputs(12, ['hi there', 3])
.addNodeWithValueAndInputs(24, {name:'hello'});

function findClosestOuputValue(root, closest) {
  let currentNode = root;
  let prevNode, prevNodeDiff, curNodeDiff;

  while (currentNode) {
    // if the value of the current node matches in closest output, return inputs
    if (currentNode.value === closest) return currentNode.inputs;
    // if the current node's value is greater than the target
    if (currentNode.value > closest) {
      // check to see if there is a left node available
      if (!currentNode.left) {
        // if you cannot move further left, compare the difference between the previous node and the target to the difference between the current node and the target. return the closest in value to the target.
        return prevNodeDiff >= curNodeDiff ? currentNode.inputs : prevNode.inputs;
      }
      // save a reference to the current Node as the previous Node
      prevNode = currentNode;
      // if there is a left node available, point the current Node to it
      currentNode = currentNode.left;
      // find how much the previous Node differs in value from the target
      prevNodeDiff = closest - prevNode.value;
      // find how much the current node differs in value from the target
      curNodeDiff = closest - currentNode.value;
    }
    if (currentNode.value < closest) {
      if (!currentNode.right) {
        return prevNodeDiff >= curNodeDiff ? currentNode.inputs : prevNode.inputs;
      }
      // save a reference to the current Node as the previous Node
      prevNode = currentNode;
      currentNode = currentNode.right;
      prevNodeDiff = closest - prevNode.value;
      curNodeDiff = closest - currentNode.value;
    }
  }
}

console.log(findClosestOuputValue(myBST.root, 4));
