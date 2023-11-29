//Linkedlist

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// let node1 = new Node(10);
// console.log(node1);

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Add in begining of the list

  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // add at last of node
  addLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  // find the size of list

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // add at certain point or index

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error('Invalid Index');
      return;
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // remove from first of the node

  removeTop() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  // remove from last of the node
  removeLast() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }

    current.next = null;
  }

  // remove at certain index

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error('Invalid Index');
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // print the list

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(10);
linkedlist.addFirst(20);
linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(8);
linkedlist.addLast(6);

// linkedlist.removeTop();

linkedlist.addAt(5, 100);

linkedlist.removeLast();
linkedlist.removeAt(2);

linkedlist.print();
console.log('size = ' + linkedlist.size());
