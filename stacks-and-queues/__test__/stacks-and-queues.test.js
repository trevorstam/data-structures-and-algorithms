'use strict';

// NOTE: the peek method is embedded in the testing of the other methods

const sq = require('../stacks-and-queues');

const stack = new sq.Stack();
const queue = new sq.Queue();

describe('stacks class', () => {
  it('should test if the Stack module is defined', () => {
    expect(stack).toBeDefined();
  });
  it('should return null when peeking at the top of the stack', () => { //first peek
    expect(stack.peek()).toBeNull();
  });
  describe('push method', () => {
    it('should add a value to the top of the stack', () => {
      stack.push('apes');
      expect(stack.top.value).toBe('apes');
    });
    it('should push another node onto the stack and return bears and the next therof should return apes', () => {
      stack.push('bears');
      expect(stack.top.value).toBe('bears');
      expect(stack.top.next.value).toBe('apes');
    });
    it('should return the value of the newly pushed node when peeking at the top', () => { //second peek
      expect(stack.peek().value).toBe('bears');
    });
  });

  describe('pop method', () => {
    it('should remove a node from the top of the stack when called', () => {
      stack.pop();
      expect(stack.top.value).toBe('apes');
    });
    it('should show that the next of the top is null', () => {
      expect(stack.top.next).toBeNull();
    });
    it('should check the top with the peek method', () => { //third peek
      expect(stack.peek().value).toBe('apes');
    });
  });

});



describe('queues class', () => {
  it('should test if the Queue module is defined', () => {
    expect(queue).toBeDefined();
  });
  it('should return null when peeking at the front of the queue', () => { //first queue peek
    expect(queue.peek()).toBeNull();
  });
  it('should return null when looking at the rear', () => {
    expect(queue.rear).toBeNull();
  });

  describe('the enqueue method of the queue class', () => {
    it('should add a node to the queue', () => {
      queue.enqueue('apples');
      expect(queue.front.value).toBe('apples');
      expect(queue.rear.value).toBe('apples');
    });
    it('should add another node and add it to the back of the previous node', () => {
      queue.enqueue('bananas');
      expect(queue.front.next.value).toBe('bananas');
    });
    it('should check the front with the peek method', () => { //second queue peek
      expect(queue.peek().value).toBe('apples');
    });
    it('should check to what the next of the rear points at', () => {
      expect(queue.rear.next).toBeNull();
    });
  });

  describe('the dequeue method of the queue class', () => {
    it('should remove a node from the queue', () => {
      queue.dequeue();
      expect(queue.front.value).toBe('bananas');
    });
    it('should dequeue another value until the queue is empty and return null', () => {
      queue.dequeue();
      console.log(queue);
      expect(queue.front).toBeNull();
      expect(queue.rear.next).toBeNull();
    });
    it('should return the front of the queue with the peek method', () => { //third queue peek
      expect(queue.peek()).toBeNull();
    });
  });
});