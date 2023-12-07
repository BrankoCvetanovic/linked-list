const Node = function (value) {
  const next = null;
  return {
    value,
    next,
  };
};

const LinkedList = function () {
  const listHead = null;

  function prepend(value) {
    let tmp = null;
    if (this.listHead != null) {
      tmp = this.listHead;
    }
    this.listHead = new Node(value);
    this.listHead.next = tmp;
  }

  function append(value) {
    if (this.listHead === null) {
      this.prepend(value);
    } else {
      let currentNode = this.listHead;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
  }

  function size() {
    let counter = 0;
    let currentNode = this.listHead;
    while (currentNode !== null) {
      counter += 1;
      currentNode = currentNode.next;
    }
    return counter;
  }

  function head() {
    return this.listHead;
  }

  function tail() {
    let currentNode = this.listHead;
    while (currentNode !== null) {
      if (currentNode.next === null) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  function at(index) {
    if (typeof index !== "number") {
      return "wrong index";
    }
    if (index < 0) {
      return "Index to small";
    }
    let currentNode = this.listHead;
    for (let i = 0; i < index; i++) {
      if (currentNode.next === null) {
        return "Index too high";
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  function pop() {
    const lastElement = this.tail();
    let currentNode = this.listHead;
    while (currentNode !== null) {
      if (currentNode.next === lastElement) {
        currentNode.next = null;
      }
      currentNode = currentNode.next;
    }
  }

  function contains(value) {
    let currentNode = this.listHead;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  function find(value) {
    let currentNode = this.listHead;
    let index = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return index;
      }
      index += 1;
      currentNode = currentNode.next;
    }
    return false;
  }

  function toString() {
    let string = ``;
    let currentNode = this.listHead;
    while (currentNode !== null) {
      string = string + `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    string = string + `null`;
    return string;
  }

  function insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size()) {
      this.append(value);
      return;
    }
    const newNode = Node(value);
    previousNode = this.at(index - 1);
    currentNode = this.at(index);
    newNode.next = currentNode;
    previousNode.next = newNode;
  }

  function removeAt(index) {
    if (index === 0) {
      this.listHead = this.listHead.next;
    }
    currentNode = this.at(index);
    previousNode = this.at(index - 1);
    previousNode.next = currentNode.next;
  }

  return {
    listHead,
    prepend,
    append,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

// TEST
const list = LinkedList();
list.append(23);
list.append(334);
list.prepend("Hello");
list.append("Taill");
console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
list.insertAt("new tail", list.size());
console.log(list.toString());
list.pop();
list.removeAt(0);
console.log(list.toString());
