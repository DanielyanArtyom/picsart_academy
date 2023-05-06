class Queue {
  _queue = null;

  constructor() {
    this._queue = [];
  }

  push(element) {
    if (!this._queue.length) {
      this._queue.push(element);
    } else {
      this._queue = [element, ...this._queue];
    }
  }

  pop() {
    if (!this._queue.length) {
      return null;
    }
    this._queue.pop();
  }

  front() {
    return this._queue[0];
  }
  back() {
    return this._queue[this._queue.length - 1];
  }

  size() {
    return this._queue.length;
  }

  empty() {
    this._queue = [];
  }
}

const queue = new Queue();
console.log("start", queue._queue);
queue.push(5);
queue.push(125);
queue.push(4);
queue.push(35);

console.log("push", queue._queue);

console.log("back", queue.back());
console.log("front", queue.front());

queue.pop();
queue.pop();
queue.pop();
queue.pop();
queue.pop();

console.log("pop", queue._queue);
