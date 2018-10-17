'use strict';

const binarySearch = require('../array_binary_search');

describe('testing binary search', ()=>{
    it('should take in a sorted array and a key, and return the index of the guessed value that is in the array', ()=>{
        expect(binarySearch([1, 2, 3], 2)).toEqual(1);
    });
    it('should return 0 if key = arr[0]', () => {
        expect(binarySearch([1, 2, 3], 1)).toEqual(0);
    });

    it('should return -1 if key = 0 ', () => {
        expect(binarySearch([1, 2, 3], 0)).toEqual(-1);
    });

    it('should return -1 if key > arr[midIndex] ', () => {
        expect(binarySearch([1, 2, 3], 5)).toEqual(-1);
    });
});