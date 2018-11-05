const fb = require('../fizz-buzz-tree');
//build a tree

let one = new fb.Node(3);
let two = new fb.Node(5);
let three = new fb.Node(10);
let four = new fb.Node(7);
let five = new fb.Node(15);

one.leftChild = two;
one.rightChild = three;
two.leftChild = four;
two.rightChild = five;

const hollowTree = new fb.BinaryTree();
const testTree1 = new fb.BinaryTree(one);
const testTree2 = new fb.BinaryTree(two);

describe('fizzbuzz tree function', () => {
  it('should account for an emptry tree', () => {
    let emptyTree = fb.fizzBuzzTree(hollowTree);
    expect(emptyTree).toBeNull();
  });
  it('should return fizzbuzz if value of node is divisible by 3 and 5', () => {
    let getFizzBuzz = fb.fizzBuzzTree(testTree2);
    expect(getFizzBuzz.root.rightChild.value).toEqual(five.value);
  });
  it('should return fizz if value of node is divisible by 3', () => {
    let getFizz = fb.fizzBuzzTree(testTree1);
    expect(getFizz.root.value).toEqual(one.value);
  });
  it('should return fizzbuzz if value of node is divisible by 3 and 5', () => {
    let getBuzz = fb.fizzBuzzTree(testTree1);
    expect(getBuzz.root.rightChild.value).toEqual(three.value);
  });

});