'use strict';

const listClasses = require('../linked-list');

describe('testing LinkedList and node', ()=>{
    it('should test if the linked list is defined', ()=>{
        const LinkedList = listClasses.LinkedList;
        expect(LinkedList).toBeDefined();
    });
    it('should test if the node is defined', () => {
        const Node = listClasses.Node;
        expect(Node).toBeDefined();
    });

    describe('testing insert method', ()=>{
        it('should test if it inserts a string value', ()=>{
            const apples = new listClasses.LinkedList;
            apples.insert('apples');

            expect(apples.head.value).toBe('apples');
        });
        it('should test if the insert method inserts a number', ()=>{
            const number = new listClasses.LinkedList;
            number.insert(5);

            expect(number.head.value).toBe(5);
        });
        it('should test if you insert nothing it returns undefined', ()=>{
            const undefiner = new listClasses.LinkedList;
            expect((undefiner.insert())).toBeUndefined();
        });
    });

    describe('testing includes method', ()=>{
        it('should test if List does not includes a value', ()=>{
            const bananas = new listClasses.LinkedList;
            bananas.insert('apples');
            bananas.insert('bunnies');

            expect(bananas.includes('bananas')).toBeFalsy();
        });
        it('should test if List includes a value', ()=>{
            const bananas = new listClasses.LinkedList;
            bananas.insert('apples');
            bananas.insert('bunnies');
            
            expect(bananas.includes('apples')).toBeTruthy();
        });
        it('should test when nothing gets passed into the method', ()=>{
            const bananas = new listClasses.LinkedList;
            expect(bananas.insert()).toBeUndefined();
        })
    });

    describe('testing print method', ()=>{
        it('should test if it prints out a value', ()=> {
            const bananas = new listClasses.LinkedList;
            bananas.insert('apples');
            bananas.print();
            expect(bananas.head.value).toBe('apples');

        });
        it('should test if it prints out multiple data types', ()=>{
            const bananas = new listClasses.LinkedList;
            bananas.insert('camel');
            bananas.insert(2);
            expect(bananas.print()).toEqual('2,camel');
        });
        it('should return empty', ()=>{
            const bananas = new listClasses.LinkedList;
            bananas.insert();
            expect(bananas.print()).toBe('');
        })
    });

});