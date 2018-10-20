'use strict';

const listClasses = require('../linked-list');

const LinkedList = listClasses.LinkedList;
const Node = listClasses.Node;

describe('testing LinkedList and node', ()=>{
    it('should test if the linked list is defined', ()=>{
        expect(LinkedList).toBeDefined();
    });
    it('should test if the node is defined', () => {
        expect(Node).toBeDefined();
    });

});