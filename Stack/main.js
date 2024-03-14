class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = null;
    }
    if (this.length === 0) {
      this.bottom = newNode;
      this.top = newNode;
    } else {
      const pointer = this.top;
      this.top = newNode;
      this.top.next = pointer;
    }
    this.length++;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    // const pointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}
const myStack = new Stack();
myStack.push("google");
myStack.push("discord");
myStack.push("amazon");
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());
console.log(myStack);
