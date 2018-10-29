'use strict';

class PseudoQueue {
  constructor() {
    this.enqStack = [];
    this.deqStack = [];
    this.hasEnq = false;
  }
  enqueue(value) {
    if (this.hasEnq === undefined || this.hasEnq === true) {
      this.enqStack.push(value);
      return this.enqStack;
    } else {
      for (let i = this.deqStack.length; i > 0; i--) {
        let topVal = this.deqStack[i - 1];
        this.enqStack.push(topVal);
        this.deqStack.pop();
      }
      this.enqStack.push(value);
      this.hasEnq = true;
      return this.enqStack;
    }
  }
  dequeue() {

    if (this.hasEnq === false) {
      console.log('false');
      this.deqStack.pop();
    } else if (this.hasEnq === true) {
      console.log('false2');
      this.hasEnq = false;
      for (let i = this.enqStack.length; i > 0; i--) {
        let topVal = this.enqStack.pop();
        this.deqStack.push(topVal);
      }
      this.enqStack.pop();
      return this.deqStack;
    } else {
      return 'failed';
    }

  }
}

module.exports = {
  PseudoQueue,
};