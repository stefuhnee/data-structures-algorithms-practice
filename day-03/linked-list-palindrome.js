'use strict';

//


/////////////////////////////////

const LinkedList = function() {
  this.head = null;
};

const Node = function(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.appendNode = function(value) {
  let node = new Node(value);
  if (!this.head) {
    this.head = node;
    return this;
  }
  let currentNode = this.head;
  while (currentNode) {
    if (!currentNode.next) {
      currentNode.next = new Node(value);
      return this;
    }
    currentNode = currentNode.next;
  }
};




LinkedList.prototype.isPalindrome = function() {
  // 1 prev 1 next 1 double, stop reversing once double reaches the end.
  let prev;
  let current = this.head();
  let double;
  while (current) {
    current = current.next;
  }
}

LinkedList.prototype.getLength = function() {
  let current = this.head;
  let count = 1;
  while (current.next) {
    count++;
    current = current.next;
  }
  return count;
};

let ll = new LinkedList();
ll.appendNode('a');
ll.appendNode('b');
ll.appendNode('a');

console.log(ll.getLength());
