'use strict';

const DLL = require('./ll/doubly-linked-list');
const Node = require('./ll/node');

DLL.prototype.reverse = function() {
  let current = this.head;
  let next, temp;
  while (current) {
    next = current.next; // 2
    current.next = current.prev; // null
    current.prev = next;
    current = current.prev;
  }
};

let dll = new DLL();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
console.dir(dll);

dll.reverse();
console.dir(dll);
