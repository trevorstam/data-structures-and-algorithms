'use strict';

const LinkedList = require('../ll-kth-from-end');

describe('Testing linked list with kth from the end', () => {
  const list = new LinkedList();

  describe('Test existence of linked list', () => {
    it('should return defined', () => {
      expect(list).toBeDefined();
    });
    it('should have no head when instantiated, so head should be null', () => {
      expect(list.head).toBeNull();
    });
  });

  describe('testing kth from the end', () => {
    it('should return C', () => {
      list.insert('A');
      list.insert('B');
      list.insert('C');
      list.insert('D');
      expect(list.kthFromEnd(2)).toBe('C');
    });
    it('should return null when length of list shorter than k', () => {
      const nuller = new LinkedList();
      nuller.insert('apples');
      nuller.insert('bananas');
      expect(nuller.kthFromEnd(2)).toBeNull();
    });
    it('should return ', () => {
      const zero = new LinkedList();
      zero.insert(4);
      zero.insert(3);
      zero.insert(2);
      console.log(zero);
      expect(zero.kthFromEnd(0)).toEqual(4);
    })
  });

});