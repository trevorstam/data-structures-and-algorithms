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
  add(node) {
    if (this.root === null) {
      this.root = node;
      return;
    }
    let currentNode = this.root;
    while (currentNode !== null) {
      if (node.value < currentNode.value) {
        if (currentNode.leftChild !== null) {
          currentNode = currentNode.leftChild;
        } else {
          currentNode.leftChild = node;
          return;
        }
      }

      if (node.value > currentNode.value) {
        if (currentNode.rightChild !== null) {
          currentNode = currentNode.rightChild;
        } else {
          currentNode.rightChild = node;
          return;
        }
      }
    }
  }
  search(value) {
    if (this.root === null) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value < currentNode.value) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    return currentNode;
  }
}

module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree,
};