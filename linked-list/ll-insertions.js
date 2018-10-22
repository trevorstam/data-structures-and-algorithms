'use strict';

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
  }
  append(val) {
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    let newNode = new Node(val);
    newNode.next = null;
    current.next = newNode;
  }
  insertBefore(val, newVal) {
    let current = this.head;
    while (current.next.val !== val) {
      current = current.next;
    }
    let newNode = new Node(newVal);
    newNode.next = current.next;
    current.next = newNode;
  }
  insertAfter(val, newVal) {
    let current = this.head;
    while (current.val !== val) {
      current = current.next;
    }
    let newNode = new Node(newVal);
    newNode.next = current.next;
    current.next = newNode;
  }
}

module.exports = {
  LinkedList,
  Node,
};