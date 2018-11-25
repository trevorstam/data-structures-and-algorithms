'use strict';

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  getHash(key) {
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0)
    }, 0) % this.size;
  }

  add(key, value) {
    let hash = this.getHash(key);
    console.log(hash, key, value);

    if (!this.map[hash]) {
      this.map[hash] = [];
    }
    this.map[hash].push({
      [key]: value
    });
  }

  get(key) {
    let hash = this.getHash(key);
    return this.map[hash];
  }

  find(key) {
    let hash = this.getHash(key);

    if (this.map[hash]) {
      let foundKey = this.map[hash].find((items) => {
        return Object.keys(items) === key;
      });
    }

    if (!foundKey) {
      return 'No existing key discovered';
    } else {
      return foundKey[key];
    }
  }

  contains(key) {
    let hash = this.getHash(key);
    if (!this.map[hash]) {
      return false;
    } else {
      return `It has key: ${key}`;
    }
  }

  serialize() {
    return JSON.stringify(this.map);
  }

  deserialize(data) {
    let deserializedString = JSON.parse(data);
    let newHashMap = new HashMap();
    //stuck in this method. Don't know how to move on


  }

}