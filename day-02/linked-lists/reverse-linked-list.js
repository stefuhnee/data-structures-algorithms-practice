// if  a linked list has an infinite loop, determine where that is!
// group odds & evens of a linked list.


// given a single linked list, you must reverse it.
// method operates on the list passed in.

'use strict';
// given  HEAD a -> b -> c -> d
// return a <- b <- c <- d HEAD

function LinkedList() {
  this.head = null;
  this.size = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  let temp = new Node(value);
  let current = this.head;

  if (!this.head) this.head = temp;
  else {
    while (current.next) {
      current = current.next;
    }
    current.next = temp;
  }
  return ++this.size;
};


// traverse through the linked list.
// save a reference to the size.
// switch the nodes on opposite sides.

// a <---> d
// b <---> c
// a: {
//  a b c d
// // }
//
// a --> b --> c --> d
//
// d --> null   b --> c  --> a

LinkedList.prototype.reverse = function() {
  if (!this.head) return null;
  let current = this.head;
  let next;
  let prev = null;
  // traverse through
  // as long as there is a node to continue with
  while (current.next) {
    // save a reference to the next node
    next = current.next;
    // set every node's next property to be the previous node (starts at null for the tail).
    current.next = prev;
    // move prev forward to the current node
    prev = current;
    // move current forward to the next node.
    current = next;
  }
  // finally, set the head equal to the last node (originally had null as next property)
  this.head = prev;
};

LinkedList.prototype.print = function() {
  console.log('whole linked list');
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};

var ll = new LinkedList();
ll.add('A');
ll.add('B');
ll.add('C');
ll.add('D');
ll.reverse();
ll.print();
