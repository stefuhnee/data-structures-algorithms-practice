'use strict';

const Node = module.exports = function(value, inputs) {
  this.value = value || null;
  this.left = null;
  this.right = null;
};

Node.prototype.addNodeWithValue = function(value) {
  // check if the value is the current value
  if (value === this.value) return this;
  // if so, do nothing
  if (value < this.value) {
    if (this.left) return this.left.addNodeWithValue(value);
    this.left = new Node(value);
    return this; // allows us to chain functions
  }
  if (this.right) return this.right.addNodeWithValue(value);
  this.right = new Node(value);
  return this;
  // check if the value is less than the current value
  // if the left node already exists, pass the value into this.left.addNodeWithValue
  // if the left node does not exist, set the left node to a new node... same with right.
};
