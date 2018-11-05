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
}

function fizzBuzzTree(tree) {
  if (tree.root === null) {
    return null;
  }

  let treeNode = tree.root;

  function fizzBuzzHelper(node) {
    if (node.value % 3 === 0 && node.value % 5 === 0) {
      node.value = 'fizzbuzz';
    } else if (node.value % 3 === 0) {
      node.value = 'fizz';
    } else if (node.value % 5 === 0) {
      node.value = 'buzz';
    }

    if (node.leftChild !== null) {
      fizzBuzzHelper(node.leftChild);
    }
    if (node.rightChild !== null) {
      fizzBuzzHelper(node.rightChild);
    }
  }
  fizzBuzzHelper(treeNode);
  return tree;
}

module.exports = {
  Node,
  BinaryTree,
  fizzBuzzTree,
};