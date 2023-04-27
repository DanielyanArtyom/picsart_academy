class Stack {
  _stack = null;
  top = null;
  constructor() {
    this._stack = [];
  }

  push(element) {
    this._stack.push(element);
    top = element;
  }

  pop() {
    if (!this._stack.length) {
      top = null;
      return null;
    }
    this._stack.pop();
    top = this._stack[this._stack.length - 1];
  }

  top() {
    return top;
  }

  size() {
    return this._stack.length;
  }
  empty() {
    this._stack = [];
    top = null;
  }
}
