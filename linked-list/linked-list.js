function Node(v) {
  this.value = v;
  this.prev = null;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.push = function(v) {
  const newNode = new Node(v);
  if(this.head) {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
}

LinkedList.prototype.pop= function(v) {
  if(this.tail) {
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) {
      this.tail.next = null;
    }
    return value;
  } else {
    return null;
  }
}

LinkedList.prototype.shift = function() {
  if(this.head) {
    const value = this.head.value;
    this.head = this.head.next;
    if(this.head) {
      this.head.prev = null;
    }

    return value;
  } else {
    return null;
  }
}

LinkedList.prototype.unshift = function(v) {
  const newNode = new Node(v);
  if(this.head) {
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
}

LinkedList.prototype.count = function() {
  let len = 0;
  if(this.head) {
    let p = this.head;
    while(p) {
      len += 1;
      p = p.next;
    }
    return len;
  } else {
    return 0;
  }
}

LinkedList.prototype.delete = function(v) {
  let p = this.head;
  const removeNode = (node) => {
    if(!node) {return;}

    if(node === this.head && node === this) {
      this.head = null;
      this.tail = null;
      return;
    }

    if(node === this.head) {
      this.shift();
      return;
    }

    if(node === this.tail) {
      this.pop();
      return;
    }

    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  while(p) {
    if(p.value === v) {
      removeNode(p);
      return;
    }
    p = p.next;
  }

}

module.exports = LinkedList;
