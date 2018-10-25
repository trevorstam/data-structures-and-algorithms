'use strict';

const listClasses = require('../ll-insertions');

describe(' testing the linked list insertions module', () => {
  it('should test if linked list is defined', () => {
    const LinkedList = listClasses.LinkedList;
    expect(LinkedList).toBeDefined();
  });
});

describe('testing the append method', () => {
  it('should test if it appends a value', () => {
    const numbersNode = new listClasses.Node(2);
    const numbers = new listClasses.LinkedList(numbersNode);
    numbers.append(3);
    expect(numbers.head.val).toEqual(2);
    expect(numbers.head.next.val).toEqual(3);
  });
  it('should test if it appends an empty array and returns an empty array', () => {
    const Node = new listClasses.Node(2);
    const list = new listClasses.LinkedList(Node);
    list.append([]);
    expect(list.head.next.val).toEqual([]);
  });
  it('should test when you pass in nothing into the append method it should return undefined', () => {
    const Node = new listClasses.Node(2);
    const list = new listClasses.LinkedList(Node);
    list.append();
    expect(list.head.next.val).toBeUndefined();
  });
});

describe('testing the insert before method', () => {
  it('should test if it inserts a new value before the value argument', () => {
    const numbersNode = new listClasses.Node(2);
    const numbers = new listClasses.LinkedList(numbersNode);
    numbers.append(3);
    numbers.append(4);
    numbers.insertBefore(3, 4);
    expect(numbers.head.next.val).toEqual(4);
  });
  it('should test if it inserts a value of a string before the last appended value', () => {
    const numbersNode = new listClasses.Node(2);
    const numbers = new listClasses.LinkedList(numbersNode);
    numbers.append(3);
    numbers.append(4);
    numbers.insertBefore(4, 'A');
    expect(numbers.head.next.next.val).toEqual('A');
  });
  it('should test if it inserts a value of a string before the last appended value', () => {
    const numbersNode = new listClasses.Node(2);
    const numbers = new listClasses.LinkedList(numbersNode);
    numbers.append(3);
    numbers.append(4);
    numbers.insertBefore(4, );
    expect(numbers.head.next.next.val).toBeUndefined();
  });
});

describe('testing the insert after method', () => {
  it('should test if it inserts a new value after the value argument', () => {
    const numbersNode = new listClasses.Node(2);
    const numbers = new listClasses.LinkedList(numbersNode);
    numbers.append(3);
    numbers.append(4);
    numbers.insertAfter(3, 17);
    expect(numbers.head.next.next.val).toEqual(17);
  });
  it('should test if it inserts a boolean after the value argument', () => {
    const numbersNode = new listClasses.Node(2);
    const numbers = new listClasses.LinkedList(numbersNode);
    numbers.append(3);
    numbers.append(4);
    numbers.insertAfter(3, true);
    expect(numbers.head.next.next.val).toBeTruthy();
  });
  it('should test when you pass in no new value and return undefined', () => {
    const numbersNode = new listClasses.Node(2);
    const numbers = new listClasses.LinkedList(numbersNode);
    numbers.append(3);
    numbers.append(4);
    numbers.insertAfter(3, );
    expect(numbers.head.next.next.val).toBeUndefined();
  });

});