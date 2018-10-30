'use strict';

class Cat {
  constructor(name = null, node = null) {
    this.name = name;
    this.next = node;
  }
}

class Dog {
  constructor(name = null, node = null) {
    this.name = name;
    this.next = node;
  }
}

class AnimalShelter {
  constructor(node = null) {
    this.front = node;
    this.rear = node;
    this.fCat;
    this.fDog;
  }
  enqueue(enimal) {
    if (this.front === null) {
      if (animal === 'cat') {
        this.front = new Cat(name);
        this.fCat = this.front;
        this.rear = this.fCat;
      } else {
        this.front = new Dog(name);
        this.fDog = this.front;
        this.rear = this.fDog;
      }
    } else {
      if (animal === 'cat' && this.fCat === null) {
        this.rear.next = new Cat(name);
        this.rear = this.rear.next;
        this.fCat = this.rear;
      } else if (animal === 'dog' && this.fDog === null) {
        this.rear.next = new Dog(name);
        this.rear = this.rear.next;
        this.fDog = this.rear;
      } else {
        if (animal === 'dog') {
          this.rear.next = new Dog(name);
          this.rear = this.rear.next;
        } else {
          this.rear.next = new Cat(name);
          this.rear = this.rear.next;
        }
      }
    }
  }
}