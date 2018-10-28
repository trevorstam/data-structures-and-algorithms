class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//create a class of stack
class Stack {
  constructor() {
    this.top = null;
    // Array method for reference: let storageNode = [];
  }
  push(value) {
    // Array method for reference: this.storageNode.push(value);
    //create a newNode
    let newNode = new Node(value);
    //point the next of the newNode to the one that is currently Top
    newNode.next = this.top;
    //assign the top to the newNode
    this.top = newNode;
  }

  pop() {
    // Array method for reference:this.storageNode.pop();
    //node top is temp
    let tempNode = this.top;
    //top = top.next
    this.top = tempNode.next;
    //tempnode.next = null
    tempNode.next = null;
    //return the temp
    return tempNode;
  }

  peek() {
    // Array method for reference:return this.storageNode[this.storageNode.length - 1];
    return this.top;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    // let qNode = [];
  }
  enqueue(value) {
    // Array method for reference:this.qNode.unshift(value);
    let newNode = new Node(value);
    //if there's just one node queued up
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else { // assign the pointer of the rear to the newnode and move the rear to the newNode
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  dequeue() {
    // Array method for reference:this.qNode.pop();
    //create tempNode and point it to the front
    let tempNode = this.front;

    //re-assign front to the next node in the queue
    this.front = this.front.next;
    //to sever all ties from the queue, let the next of the tempNode point to null
    tempNode.next = null;

  }
  peek() {
    // Array method for reference:return this.qNode[0];
    return this.front;
  }
}

module.exports = {
  Stack,
  Queue,
};