'use strict';

class Node {
  constructor(value, leftChild = null, rightChild = null) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder(node = this.root) {
    let arrayReturn = [];

    function grabPreOrder(node) {
      if (node === null) {
        return null;
      }

      arrayReturn.push(node.value);

      if (node.leftChild !== null) {
        grabPreOrder(node.leftChild);
      }

      if (node.rightChild !== null) {
        grabPreOrder(node.rightChild);
      }
    }
    grabPreOrder(node);
    return arrayReturn;
  }
  inOrder(node = this.root) {
    let arrayReturn = [];

    function grabInOrder(node) {
      if (node === null) {
        return null;
      }

      if (node.leftChild !== null) {
        grabInOrder(node.leftChild);
      }
      arrayReturn.push(node.value);
      if (node.rightChild !== null) {
        grabInOrder(node.rightChild);
      }

    }
    grabInOrder(node);
    return arrayReturn;

  }
  postOrder(node = this.root) {
    let arrayReturn = [];

    function grabPostOrder(node) {
      if (node === null) {
        return null;
      }

      if (node.leftChild !== null) {
        grabPostOrder(node.leftChild);
      }
      if (node.rightChild !== null) {
        grabPostOrder(node.rightChild);
      }
      arrayReturn.push(node.value);


    }
    grabPostOrder(node);
    return arrayReturn;
  }

}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add() {

  }
  search() {

  }
}