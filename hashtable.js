'use strict';

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0)
    }, 0) % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);
    console.log(hash, key, value);

    if (!this.map[hash]) {
      this.map[hash] = [];
    }
    this.map[hash].push({
      [key]: value
    });
  }

  get(key) {
    let hash = this.hash(key);
    return this.map[hash];
  }

  find(key) {
    let hash = this.hash(key);
    return this.map[hash].find((val, idx, obj) => {
      //still figuring this out
    })
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) {
      return 'No key';
    } else {
      return `It has key: ${key}`;
    }
  }

}