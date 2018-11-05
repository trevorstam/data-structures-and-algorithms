const bst = require('../tree');

//let's build a binary tree
const one = new bst.Node(1);
const two = new bst.Node(2);
const three = new bst.Node(3);
const four = new bst.Node(4);
const five = new bst.Node(5);
const six = new bst.Node(6);
const seven = new bst.Node(7);
one.leftChild = two;
one.rightChild = three;
three.leftChild = five;
three.rightChild = four;
two.leftChild = six;
two.rightChild = seven;
const tree = new bst.BinaryTree(one);
const subTree = new bst.BinaryTree(two);
const hollowTree = new bst.BinaryTree();

describe('testing the binary tree', () => {
  it('should test whether the binary tree is defined', () => {
    expect(tree).toBeDefined();
  });

  describe('testing the order methods', () => {
    it('should test whether the PREORDER method returns an array with the root, followed by left and right child', () => {
      expect(tree.preOrder()).toEqual([1, 2, 6, 7, 3, 5, 4]);
    });
    it('should do the same PREORDER but now with a subtree', () => {
      expect(subTree.preOrder()).toEqual([2, 6, 7]);
    });
    it('should return an empty array when the tree is empty when using PREORDER', () => {
      expect(hollowTree.preOrder()).toEqual([]);
    });
    it('should test whether the INORDER method returns an array with left root right', () => {
      expect(tree.inOrder()).toEqual([6, 2, 7, 1, 5, 3, 4]);
    });
    it('should follow the same INORDER but now with a subtree', () => {
      expect(subTree.inOrder()).toEqual([6, 2, 7]);
    });
    it('should return an empty array when the tree is empty when using INORDER', () => {
      expect(hollowTree.inOrder()).toEqual([]);
    });
    it('should test whether the POSTORDER method returns an array with left right root', () => {
      expect(tree.postOrder()).toEqual([6, 7, 2, 5, 4, 3, 1]);
    });
    it('should follow the same POSTORDER but now with a subtree', () => {
      expect(subTree.postOrder()).toEqual([6, 7, 2]);
    });
    it('should return an empty array when the tree is empty when using POSTORDER', () => {
      expect(hollowTree.postOrder()).toEqual([]);
    });
  });
});

//let's build a binary search tree
const bs1 = new bst.Node(200);
const bs2 = new bst.Node(100);
const bs3 = new bst.Node(500);
const bs4 = new bst.Node(400);
const bs5 = new bst.Node(50);

const binST = new bst.BinarySearchTree();


describe('the binary search tree and its methods', () => {


  it('should be an instance of bst.BinarySearchTree', () => {
    expect(binST).toBeInstanceOf(bst.BinarySearchTree);
  });

  describe('the add method', () => {
    it('should add a node with value to the BST', () => {
      binST.add(bs1);
      console.log(binST);
      expect(binST.root).toEqual(bs1);
    });
    it('should test if it adds a second value and when lower thant the first should be added as leftChild', () => {
      binST.add(bs2);
      expect(binST.root.leftChild).toBe(bs2);
    });
    it('should test if it adds a third value and when higher  than rootvalue should be added as rightChild', () => {
      binST.add(bs3);
      expect(binST.root.rightChild).toBe(bs3);
    });
  });

  describe('the search method', () => {
    it('should find the value  and return the node', () => {
      expect(binST.search(500)).toEqual(bs3);
    });
    it('should find the value  and return the node', () => {
      expect(binST.search(100)).toEqual(bs2);
    });
    it('should find the value  and return the root node when no value is passed in', () => {
      expect(binST.search()).toEqual(bs1);
    });

  });

});