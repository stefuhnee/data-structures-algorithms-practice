'use strict';

const Node = require('./node');

const BST = module.exports = function BST() {
  this.root = null;
};

BST.prototype.addNodeWithValue = function(value) {
  if (!this.root) {
    this.root = new Node(value);
    return this;
  }
  this.root.addNodeWithValue(value); // Adds a NODE TO THE TREE FROM THE NODE CONSTRUCTOR
  return this;
};


BST.prototype.findNodeWithValue = function(value) {
  if (!this.root) return console.log('Not found');

  _findNodeWithValue(this.root);

  function _findNodeWithValue(node) {
    console.log('node', node);
    if (node) {
      if (value < node.value) return _findNodeWithValue(node.left);
      else if (value >= node.value) return _findNodeWithValue(node.right);
      else return 1;
    }
    return 0;
  }
};

// Depth-first search -- goes to the left all the way down. The callstack takes care of the order for us -- left is always preferred and rights have to wait until all lefts have finished running.

BST.prototype.depthFirstTraversal = function() {
  if (!this.root) return console.log('EMPTY TREE');
  _depthFirstTraversal(this.root, 'root', '');

  function _depthFirstTraversal(node, direction, pad) {
    console.log(`${pad}${direction}: ${node.value}`);
    if (node.left) _depthFirstTraversal(node.left, 'left', pad + '  ');
    if (node.right) _depthFirstTraversal(node.right, 'right', pad + '  ');
  }
};

// breadth first search - need a queue to do this. Every time you encounter a node, you enqueue it, then you dequeue them one a time.

BST.prototype.breadthFirstTraversal = function() {
  if (!this.root) return console.log('EMPTY TREE');
  let queue = [];
  _breadthFirstTraversal(this.root);

  function _breadthFirstTraversal(node) {
    console.log(node.value);
    if (node.left) queue.unshift(node.left);
    if (node.right) queue.unshift(node.right);

    if (queue.length) {
      _breadthFirstTraversal(queue.pop); // gives the left most node back
    }
  }
};
