'use strict';

class LinkedList {
  // node argument has default value
  constructor(node = null) {
    this.head = node;
  }
  insert(value) {
    this.head = new Node(value, this.head);
  }
  kthFromEnd(k) {
    let hare = this.head; //leader
    let snail = null; //follower
    let snailCount = -k;

    if (snailCount === 0) {
      snail = this.head;
    }

    while (hare.next) {
      snailCount++;
      if (snailCount === 0) {
        snail = this.head;
      } else if (snailCount > 0) {
        snail = snail.next;
      }
      hare = hare.next;
    }

    if (snail === null) {
      return null;
    } else {
      return snail.value;
    }
    // alter (more modern) style below
    // return snail && snail.value;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = LinkedList;