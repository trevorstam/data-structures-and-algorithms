'use strict';

const pq = require('../queue-with-stacks');

const pseudoQ = new pq.PseudoQueue();

describe('queues and stacks', () => {
  it('should test if class of pseudoqueue exist', () => {
    expect(pseudoQ).toBeDefined();
  });
  describe('the enqueue method on the stack', () => {
    it('should test if it enqueus a value', () => {
      let apples = pseudoQ.enqueue('apples');
      expect(apples).toEqual(['apples']);
    });
    it('should test if it can enqueue more than one value', () => {
      pseudoQ.enqueue('apples');
      pseudoQ.enqueue('bananas');
      console.log(pseudoQ);
      expect(pseudoQ.enqStack[2]).toEqual('bananas');
    });
    it('should test once enqueue, that hasEnq is truthy', () => {
      expect(pseudoQ.hasEnq).toBeTruthy();
    });
  });
  describe('the dequeue method on the stack', () => {
    it('should dequeue or pop of a value upon calling', () => {
      pseudoQ.dequeue();
      console.log(pseudoQ);
      expect(pseudoQ.enqStack).not.toContain('bananas');
    });
    it('should test if the enqueue stack is empty', () => {
      pseudoQ.dequeue();
      expect(pseudoQ.enqStack).toEqual([]);
    });
    it('should have a falsy hasEnq value', () => {
      pseudoQ.dequeue();
      expect(pseudoQ.hasEnq).toBeFalsy();
    })
  });
});