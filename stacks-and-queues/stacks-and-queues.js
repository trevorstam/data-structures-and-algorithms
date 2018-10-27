//create a class of stack
class Stack {
  constructor() {
    let storageNode = [];
  }
  push(node) {
    this.storageNode.push(node);
    //input is a node
    //create a newNode
    //point the next of the newNode to the one that is currently Top
    //newNode.next = top
    //assign the top to the newNode
    //top = newNode
  }

  pop() {
    this.storageNode.pop();
    //node top is temp
    //top = top.next
    //temp.next = null
    //return the temp

  }

  peek() {
    //return top
    return this.storageNode[this.storageNode.length - 1];
  }
}

class Queue {
  constructor() {
    let qNode = [];
  }
  enqueue() {

  }
  dequeue() {

  }
  peek() {

  }
}