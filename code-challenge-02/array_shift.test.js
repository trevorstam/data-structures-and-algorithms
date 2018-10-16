'use strict';

const arrayShift = require('./array_shift');

describe('testing array_shift', ()=>{
    it('should insert value in middle of array and return', () =>{
        expect(arrayShift([1,2,3,4,5], 7)).toEqual([1,2,3,7,4,5]);
    });
});

describe('testing array_shift', () => {
    it('should insert value in middle of array and return', () => {
        expect(arrayShift(['a', 'b', 'c'], 7)).toEqual(['a', 'b', 7, 'c']);
    });
});

describe('testing array_shift', () => {
    it('should insert value in middle of array and return', () => {
        expect(arrayShift([1, 2, 3, 4, 5], 'a')).toEqual([1, 2, 3, 'a', 4, 5]);
    });
});
