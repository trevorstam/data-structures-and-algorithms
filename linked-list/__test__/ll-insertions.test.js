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
        console.log(list);
        expect(list.head.next.val).toBeUndefined();
    });
});