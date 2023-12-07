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
  return {
    listHead,
    prepend,
    append,
  };
};
