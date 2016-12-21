'use strict';

let Queue = {
  mainStack: [],
  helperStack: [],
  enqueue: function(value) {
    this.mainStack.push(value);
  },
  dequeue: function() {
    if (this.helperStack.peek()) return this.helper.pop();
    while (this.mainStack.peek()) {
      this.helperStack.push(this.mainStack.pop());
    }
    return this.helperStack.pop();
  }
}
