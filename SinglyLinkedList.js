class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  get Next() {
    return this.next;
  }

  set Next(next) {
    this.next = next;
  }

  get Value() {
    return this.value;
  }

  set Value(value) {
    this.value = value;
  }
}


class SinglyLinkedList {
  constructor(head = null) {
    this.head = head;
    this.size = this.head === null ? 0 : 1;
  }

  insert(value, position) {
    let node = new Node(value);

    //  insert front
    if (!this.head) {
      this.head = node;
      return;
    } else if (position === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let temp = this.head;
    let targetPos = 0;

    // insert last

    while (temp.next !== null && targetPos < position) {
      temp = temp.next;
      targetPos++;
    }

    node.next = temp.next;
    temp.next = node;

    this.size += 1;
  }

  //  delete by value
  delete(value) {
    if (this.head === null) return;

    // start
    if (value === this.head.value) {
      this.head = this.head.next;
      return;
    }

    // middle and end
    let currentNode = this.head; 

    while (currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    currentNode.next = currentNode.next.next;
  }

  // size
  getSize() {
    return this.size;
  }

  // print
  print() {
    let temp = this.head;
    let i = 0;

    while (temp !== null) {
      console.log(`${i}: ${temp.value}`);
      temp = temp.next;
      i++;
    }
  }
}

