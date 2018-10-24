'use strict';

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  };
};

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(val) {
    let current = this.head;
    if (current === null) {
      this.head = new Node(val);
      return;
    }
    while (current !== null) {
      if (current.next === null) {

        current.next = new Node(val);
        return;
      }
      current = current.next;
    }
  }
}

function mergeLinkedList(lOne, lTwo) {
  let returnList = new LinkedList();

  let current1 = lOne.head;
  let current2 = lTwo.head;

  while (current1 !== null || current2 !== null) {
    if (current1 !== null) {
      returnList.append(current1.val);
      current1 = current1.next;
    }
    if (current2 !== null) {
      returnList.append(current2.val);
      current2 = current2.next;
    }
  }
  return returnList;
}

const apples = new LinkedList();
apples.append(5);
apples.append(4);
apples.append(3);
apples.append(2);
apples.append(1);
console.log(apples);

const bananas = new LinkedList();
bananas.append('A');
bananas.append('B');

mergeLinkedList(apples, bananas);