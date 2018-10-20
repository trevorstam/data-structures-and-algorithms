'use strict';

class LinkedList {
    constructor(node = null) {
        this.head = node;
        // this.next = null;
    }
    insert(value) {
        if (this.head === null){
            let newNode = new Node(value);
            this.head = newNode;
        } else {
            let tempNode = this.head;
            this.head = new Node(value);//resetting head
            this.head.next = tempNode;
            //this.head = new Node(value, this.head); JB's solution. This works without if..else
        }
    };
    includes(value) {
        // let currentNode = this.head;
        while (this.head) {
            if (this.head.value === value) {
                return true;
            } else {
                this.head = this.head.next;
            }
        }
        return false;
    };

    print() {
        let currentNode = this.head;
        let printArray = [];
        while(currentNode){
            printArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return printArray.join(',');
    }
};

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    };
};



module.exports = {
    LinkedList: LinkedList,
    Node: Node
};
